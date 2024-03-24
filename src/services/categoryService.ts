import prisma from "../../db";

export async function getCategoryId({
  categoryName,
}: {
  categoryName: string;
}) {
  const category = await prisma.category.findUnique({
    where: { name: categoryName },
  });
  return category?.id;
}
