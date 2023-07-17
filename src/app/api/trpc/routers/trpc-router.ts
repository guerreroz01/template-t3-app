import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { z } from "zod";
import { prisma } from "../../../../../lib/prisma";

const t = initTRPC.create({ transformer: superjson });

export const appRouter = t.router({
  getUsers: t.procedure.query(async ({ ctx }) => {
    const users = await prisma.user.findMany();
    return users;
  }),
});

export type AppRouter = typeof appRouter;
