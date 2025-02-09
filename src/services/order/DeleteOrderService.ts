import prismaClient from "../../prisma/prisma";

class DeleteOrderService {
  async execute(id: string) {
    const order = await prismaClient.order.delete({
        where: {
            id: id
        }
    })

    return order
  }
}

export { DeleteOrderService };
