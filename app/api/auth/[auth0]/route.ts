import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      connection: "google-oauth2",
    },
  }),
  signup: handleLogin({
    authorizationParams: {
      connection: "google-oauth2",
    },
  }),
});
