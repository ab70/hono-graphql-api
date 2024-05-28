// import { createUser, getUserByCredentials } from "../../auth";

import { YogaInitialContext } from "graphql-yoga";
import { createUser, getUserByCredentials } from "./functions/authFunctions";
import { useCookies } from '@whatwg-node/server-plugin-cookies'

const authMutations = {
  signup: async (_, { username, password }, ctx: YogaInitialContext) => {

    const newUser = await createUser({ username, password });
    await ctx.request.cookieStore?.set("hello", "tello")
    // console.log("con", honoContext.c);

    // await setSignedCookie(honoContext.c, "secret", "jjkl", "jjkloi", { httpOnly: false, path: "/", secure: false, signingSecret: "JWT_SECRET", sameSite: "Lax" })

    return { username, password };
  },
  login: async (_, { username, password }) => {
    const user = await getUserByCredentials({ username, password });
    // if (user) {
    //   // Generate and return JWT token or other authentication identifier
    //   // Replace with your actual token generation logic
    //   const token = 'your_generated_token';
    //   return token;
    // } else {
    //   return null; // Indicate failed login
    // }
  },
};
export default authMutations;
