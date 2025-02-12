import prismaClient from "../../prisma/prisma";

class ListOrdersService {
  async execute() {
    const orders = await prismaClient.order.findMany({
        where: {
            draft: false,
            status: false
        },
        orderBy: {
            
        }
        
    });
    return orders;
  }
}

export { ListOrdersService };
