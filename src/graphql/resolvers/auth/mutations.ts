// import { createUser, getUserByCredentials } from "../../auth";

import { setCookie, setSignedCookie } from "hono/cookie";
import { createUser, getUserByCredentials } from "./functions/authFunctions";

const authMutations = {
  signup: async (_, { username, password }, { honoContext }) => {

    const newUser = await createUser({ username, password });

    console.log("con", honoContext.c);

    await setSignedCookie(honoContext.c, "secret", "jjkl", "jjkloi", { httpOnly: false, path: "/", secure: false, signingSecret: "JWT_SECRET", sameSite: "Lax" })

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
