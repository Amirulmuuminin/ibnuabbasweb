import path from "path";
import { OldData } from "../data/model";
import fsPromises from "fs/promises";
import prisma from "@/../db";

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
    await prisma.post.create({
      data: {
        title: singleProfile.title.__cdata,
        content: singleProfile.encoded[0].__cdata,
      },
    });
    console.log("data inserted");
  } catch (error) {
    console.log(error);
  }
}
