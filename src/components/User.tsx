"use client";
import { useState } from "react";
import { Session } from "next-auth";

export default function User({ session }: { session: Session }) {
  const [tweet, setTweet] = useState("");
  return (
    <div>
      <form></form>
    </div>
  );
}
