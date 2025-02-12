import prismaClient from "../../prisma/prisma";

interface AddItemOrderServiceProps {
  amount: number;
  product_id: string;
  order_id: string;
}

class AddItemOrderService {
  async execute({ amount, product_id, order_id }: AddItemOrderServiceProps) {
    const item = await prismaClient.item.create({
      data: {
        amount: amount,
        productId: product_id,
        orderId: order_id,
      },
    });

    return item;
  }
}

export { AddItemOrderService };
