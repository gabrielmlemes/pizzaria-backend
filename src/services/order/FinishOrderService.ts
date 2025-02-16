import prismaClient from "../../prisma/prisma";

class FinishOrderService {
  async execute(orderId: string) {
    const order = await prismaClient.order.update({
      where: {
        id: orderId,
      },
      data: {
        status: true,
      },
    });

    return order;
  }
}

export { FinishOrderService };
