"use client";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import React from "react";

const Auth0Provider = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Auth0Provider;
