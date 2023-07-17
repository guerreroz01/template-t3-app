"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button className="px-4 py-2 border" onClick={() => signIn()}>
      Sign In
    </button>
  );
};

export const LogOutButton = () => {
  return (
    <button className="px-4 py-2 border" onClick={() => signOut()}>
      Log Out
    </button>
  );
};
