"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <Link href="/api/auth/logout">Logout</Link>
      </>
    );
  }

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link href="/api/auth/login">Login</Link>
    </>
  );
}
