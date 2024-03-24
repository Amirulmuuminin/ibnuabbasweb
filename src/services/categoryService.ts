import prisma from "../../db";

export async function getCategoryId(categoryName: string) {
  const category = await prisma.category.findUnique({
    where: { name: categoryName },
  });
  return category?.id;
}

export async function getCategoryById(id: string) {
  return prisma.category.findUnique({
    where: { id },
  });
}
