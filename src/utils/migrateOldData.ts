import path from "path";
import { OldData } from "../../data/model";
import fsPromises from "fs/promises";
import prisma from "@/../db";
import { removeBeforeP } from "./removeBeforePTag";
import { slugify } from "./removeCommasFunction";

export async function inspectObject() {
  const filePath = path.join(process.cwd(), "/data/ibnuabbasData.json");
  const jsonData = await fsPromises.readFile(filePath, { encoding: "utf8" });
  const objectData: OldData = JSON.parse(jsonData);
  const singlePost = objectData.rss.channel.item.filter((item) => {
    return item.title.__cdata == "Profil Yayasan Ibnu Abbas BSD";
  })[0];
  console.log(
    singlePost.title.__cdata,
    singlePost.category?.__cdata,
    // singlePost.encoded[0],
  );
}

export async function migrateOldDataCategory() {
  const filePath = path.join(process.cwd(), "/data/ibnuabbasData.json");
  const jsonData = await fsPromises.readFile(filePath, { encoding: "utf8" });
  const objectData: OldData = JSON.parse(jsonData);

  objectData.rss.channel.category.map(async (item) => {
    const upsertUser = await prisma.category.create({
      data: { name: item.cat_name.__cdata },
    });
  });
}

export async function migrateOldDataProfile() {
  const filePath = path.join(process.cwd(), "/data/ibnuabbasData.json");
  const jsonData = await fsPromises.readFile(filePath, { encoding: "utf8" });
  const objectData: OldData = JSON.parse(jsonData);
  const singleProfile = objectData.rss.channel.item.filter((item) => {
    return item.title.__cdata == "Profil Yayasan Ibnu Abbas BSD";
  })[0];

  try {
    await prisma.post.upsert({
      where: { slug: singleProfile.title.__cdata.replace(/ /g, "%20") },
      update: {
        title: singleProfile.title.__cdata,
        slug: singleProfile.title.__cdata.replace(/ /g, "%20"),
        content: removeBeforeP(singleProfile.encoded[0].__cdata),
      },
      create: {
        title: singleProfile.title.__cdata,
        slug: singleProfile.title.__cdata.replace(/ /g, "%20"),
        content: removeBeforeP(singleProfile.encoded[0].__cdata),
      },
    });
    console.log("data inserted");
  } catch (error) {
    console.log(error);
  }
}

export async function migrateOldDataPost() {
  // retrieve posts
  const filePath = path.join(process.cwd(), "/data/ibnuabbasData.json");
  const jsonData = await fsPromises.readFile(filePath, { encoding: "utf8" });
  const objectData: OldData = JSON.parse(jsonData);
  const postsData = objectData.rss.channel.item.filter((item) => {
    return item.post_type.__cdata == "post";
  });

  const categoryId = async (
    categoryName?: string,
  ): Promise<string | undefined> => {
    if (!categoryName) return undefined;
    const allCategories = await prisma.category.findMany();
    const filteredcategory = allCategories.filter(
      (item) =>
        item.name.toLocaleLowerCase() == categoryName.toLocaleLowerCase(),
    );

    if (!filteredcategory[0]?.id) {
      console.log(filteredcategory[0]);
      return undefined;
    } else {
      return filteredcategory[0].id;
    }
  };

  try {
    postsData.map(async (item) => {
      await prisma.post.upsert({
        where: {
          slug: slugify(item.title.__cdata),
        },
        create: {
          title: item.title.__cdata,
          content: removeBeforeP(item.encoded[0].__cdata),
          slug: slugify(item.title.__cdata),
          categoryId: await categoryId(item.category?.__cdata),
        },
        update: {
          title: item.title.__cdata,
          content: removeBeforeP(item.encoded[0].__cdata),
          slug: slugify(item.title.__cdata),
          categoryId: await categoryId(item.category?.__cdata),
        },
      });
    });

    // await prisma.post.delete({
    //   where: {
    //     slug: "Hello%20world!",
    //   },
    // });
    // await prisma.post.delete({
    //   where: {
    //     slug: "",
    //   },
    // });
    console.log("post inserted");
  } catch (error) {
    console.log(error);
  }
}
