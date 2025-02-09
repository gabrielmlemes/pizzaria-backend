import prismaClient from "../prisma/prisma";

interface CreateProductServiceProps {
  name: string;
  description: string;
  price: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: CreateProductServiceProps) {
    const product = await prismaClient.product.create({
      data: {
        name,
        price: Number(price),
        description,
        banner,
        categoryId: category_id,
      },
    });

    if (!product) {
      throw new Error(" all datas are required");
    }

    return product;
  }
}

export { CreateProductService };
