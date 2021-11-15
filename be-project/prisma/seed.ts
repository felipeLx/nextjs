import prisma from "./lib/prisma-client";
import fetchCategories from "./lib/categories.json"
import fetchProducts from "./lib/products.json"

async function main() {
  // not to production

await prisma.orderedProduct.deleteMany({})
await prisma.user.deleteMany({})
await prisma.product.deleteMany({})

  const testUser = await prisma.user.upsert({
    create: {
      email: 'test@prisma.io',
      name: 'Grace Bell',
    },
    update: {
      name: 'Grace Bell',
    },
    where: {
      email: 'test@felipeLx.io',
    },
  })
  const testAdmin = await prisma.user.upsert({
    create: {
      email: 'test-admin@felipeLx.io',
      name: 'Admin',
    },
    update: {
      name: 'Admin',
    },
    where: {
      email: 'test-admin@prisma.io',
    },
  })

  const productsFetched = await Promise.all(
    fetchProducts.map(({
      id,
      title,
      price,
      image,
      description,
      category
    }) => prisma.product.upsert({
      where: {id},
      update: {},
      create: {
        id,
        name: title,
        price,
        image,
        description,
        category
      }
    }))
  )
/*
id: 2,
title: "Mens Casual Premium Slim Fit T-Shirts ",
price: 22.3,
description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
category: "men's clothing",
image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
rating: {
rate: 4.1,
count: 259
}
*/
  console.log(
    `Created test user\tid: ${testUser.id} | email: ${testUser.email} `,
  )
  console.log(
    `Created test admin\tid: ${testAdmin.id} | email: ${testAdmin.email} `,
  )
  
  console.log(
    `Created
     products: ${productsFetched} `,
  )
  
}

main()
  .then(() => console.log(`Seeded data successfully`))
  .catch((e) => console.error(`Failed to seed data, ${e}`))
  .finally(async () => {
    await prisma.$disconnect();
  });

export default main;