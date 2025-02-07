import prismaClient from "../../prisma/prisma";

class CreateCaterogyService {
  async execute(name: string) {
    if (name === "") {
      throw new Error("Name is required");
    }

    const categoryAlreadyExist = await prismaClient.category.findFirst({
      where: {
        name: name,
      },
    });

    if (categoryAlreadyExist) {
      throw new Error("Category already exist");
    }

    const categoryCreated = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return categoryCreated;
  }
}

export { CreateCaterogyService };
