import { PrismaClient } from "@prisma/client";
export {}
// add prisma to the NodeJS global type
declare global {
  namespace NodeJS {
    interface CustomNodeJsGlobal {
        prisma: PrismaClient;
    }
  }
}
// Prevent multiple instances of Prisma Client in development
declare const global: NodeJS.CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;