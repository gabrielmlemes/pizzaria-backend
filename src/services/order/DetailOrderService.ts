import prismaClient from "../../prisma/prisma";

class DetailOrderService {
  async execute(order_id: string) {
    const orders = await prismaClient.item.findMany({
      where: {
        orderId: order_id,
      },
      include: {
        product: true,
        order: true,
      },
    });

    return orders;
  }
}

export { DetailOrderService };
