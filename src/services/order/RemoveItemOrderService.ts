import prismaClient from "../../prisma/prisma";

class RemoveItemOrderService {
  async execute(item_id: string) {
    const remove = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });

    return remove
  }
}

export { RemoveItemOrderService };
