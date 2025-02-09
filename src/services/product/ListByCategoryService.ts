import prismaClient from "../../prisma/prisma";

class ListByCategoryService {
  async execute(id: string) {
    const products = await prismaClient.product.findMany({
      where: {
        categoryId: id,
      },
    });

    return products;
  }
}

export { ListByCategoryService };
