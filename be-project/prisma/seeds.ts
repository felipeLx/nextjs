import { categories, products } from "@utils/data";
import prisma from "@lib/prisma-client";

async function main() {


  // creates categories
  await Promise.all(
    categories.map(({ name, id, image }) =>
      prisma.category.upsert({
        where: { id: id },
        update: {},
        create: { name, id, image },
      })
    )
  );
  await Promise.all(
    products.map(
      ({
        categories,
        buyers,
        id,
        name,
        price,
        image,
        description,
        brand,
        currentInventory,
      }) =>
        prisma.product.upsert({
          where: { id },
          update: {},
          create: {
            id,
            name,
            price,
            image,
            brand,
            description,
            currentInventory,
            categories: {
              connect: categories.map((id) => ({ id })),
            },
            users: {
              connect: buyers ? buyers.map((id) => ({ id })) : null,
            }
          },
        })
    )
  );
}

main()
  .then(() => console.log(`Seeded data successfully`))
  .catch((e) => console.error(`Failed to seed data, ${e}`))
  .finally(async () => {
    await prisma.$disconnect();
  });

export default main;