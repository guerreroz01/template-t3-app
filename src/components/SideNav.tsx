import { getServerSession } from "next-auth";
import Link from "next/link";
import { LogOutButton, LoginButton } from "./Auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function SideNav() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="sticky top-0 px-2 py-4">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {session && (
          <li>
            <Link href={`/profiles/${session.user.id}`}>Profile</Link>
          </li>
        )}
        {!session ? (
          <li>
            <LoginButton />
          </li>
        ) : (
          <li>
            <LogOutButton />
          </li>
        )}
      </ul>
    </nav>
  );
}
