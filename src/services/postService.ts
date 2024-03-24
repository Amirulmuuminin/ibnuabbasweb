import prisma from "../../db";

export async function getPostBySlug(slug: string) {
  return await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });
}

export async function getAllSlug() {
  const posts = await prisma.post.findMany();
  const allSlug = posts.map((item) => item.slug);
  return allSlug;
}

export async function deletePostBySlug(slug: string) {
  await prisma.post.delete({
    where: { slug },
  });
  console.log(slug, "deleted");
}

export async function getLatestPosts() {
  return await prisma.post.findMany({
    take: 5,
    orderBy: {
      updatedAt: "desc",
    },
  });
}

export async function getNext5Post() {
  return await prisma.post.findMany({
    skip: 5,
    take: 5,
    orderBy: {
      updatedAt: "desc",
    },
  });
}

export async function getPostByCategory(category: string) {
  const categoryData = await prisma.category.findUnique({
    where: { name: category },
  });
  const categoryId = categoryData?.id;

  return await prisma.post.findMany({
    where: { categoryId },
  });
}
