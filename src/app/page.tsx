import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "@/components/User";
import { LogOutButton, LoginButton } from "@/components/Auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="container mx-auto">
      <div>Hello World</div>
      <pre>{JSON.stringify(session)}</pre>
      <div className="mt-10"></div>

      {session ? (
        <div>
          <User session={session} />
          <LogOutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </main>
  );
}
