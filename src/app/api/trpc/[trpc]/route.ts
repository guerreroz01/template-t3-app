import {
  FetchCreateContextFnOptions,
  fetchRequestHandler,
} from "@trpc/server/adapters/fetch";
import { appRouter } from "../routers/trpc-router";

const handler = async (request: Request, response: Response) => {
  console.log(`Incoming request from [ ${request.url} ]`);

  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: (
      opts: FetchCreateContextFnOptions
    ): object | Promise<object> => {
      return opts;
    },
  });
};

export { handler as GET, handler as POST };
