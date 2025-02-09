import prismaClient from "../../prisma/prisma";

interface CreateOrderServiceProps {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ name, table }: CreateOrderServiceProps) {
    
    const order = await prismaClient.order.create({
        data: {
            table: table,
            name: name
        }
    })

    return order;
  }
}

export { CreateOrderService };
