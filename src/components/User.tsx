import { Session } from "next-auth";

export default function User({ session }: { session: Session }) {
  return <pre>{JSON.stringify(session)}</pre>;
}
