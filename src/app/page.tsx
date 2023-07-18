import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { NewTweetForm } from "@/components/NewTweetForm";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="container mx-auto">
      <>
        <header className="sticky top-0 z-10 border-b bg-white pt-2">
          <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
        </header>
        {session && <NewTweetForm session={session} />}
      </>
    </main>
  );
}
