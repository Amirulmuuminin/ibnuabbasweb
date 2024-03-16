import prisma from "@/../db";
import path from "path";
import { OldData } from "../../data/model";
import { readFileSync } from "fs";

// retrieve posts
const filePath = path.join(process.cwd(), "/data/ibnuabbasData.json");
const jsonData = readFileSync(filePath, { encoding: "utf8" });
const objectData: OldData = JSON.parse(jsonData);
const postsData = objectData.rss.channel.item.filter((item) => {
  return item.post_type.__cdata == "post";
});

export const updateSlug = () => {
  try {
    postsData.map(async (item): Promise<void> => {
      console.log("updating slug", item.title.__cdata.replace(/ /g, "%20"));
      await prisma.post.update({
        where: {
          slug: item.title.__cdata.replace(/ /g, "%20"),
        },
        data: {
          slug: encodeURI(item.title.__cdata),
        },
      });
      console.log("success", encodeURI(item.title.__cdata));
    });
  } catch (error) {
    console.log(error);
  }
};

// export const removeCommaFromExistingSlug = async () => {
//   const allPost = await prisma.post.findMany();
//   const allSlug = allPost.map((item) => item.slug);

//   // remove commas from all slug
//   allSlug.map(async (item) => {
//     try {
//       console.log("updating", item);
//       await prisma.post.update({
//         where: { slug: item },
//         data: { slug: removeCommas(item) },
//       });
//       console.log("success", removeCommas(item));
//     } catch (error) {
//       console.log(error);
//     }
//   });
// };
