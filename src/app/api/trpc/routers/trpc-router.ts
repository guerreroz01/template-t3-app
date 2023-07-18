import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const t = initTRPC.create({ transformer: superjson });
export const prisma = new PrismaClient();

export const appRouter = t.router({
  getUsers: t.procedure.query(async ({ ctx }) => {
    const users = await prisma.user.findMany();
    return users;
  }),
});

export type AppRouter = typeof appRouter;
