import { sign } from "hono/jwt";
import { hResponse } from "../../../utils/types";
import { loginUser } from "../auth/functions/authFunctions";
import { getAllUsers } from "./functions/userFunctions";
import { YogaInitialContext } from "graphql-yoga";

const userQueries = {
  user: async (_, { username, password }) => {
    console.log("user", username);

    const findUser: hResponse = await loginUser({ username, password });
    if (findUser.success) {
      const jwtData = { id: findUser.data.id };
      const JWT_SECRET: string = process.env.JWT_SECRET || "";
      console.log("Jwt", JWT_SECRET);

      const accessToken = await sign(
        { jwtData, exp: Date.now() + 60 * 15 },
        JWT_SECRET
      );
      console.log("accesstoken", accessToken);

      // await setSignedCookie(c, "JWT_TOKEN", accessToken, JWT_SECRET, { httpOnly: false,  secure: false, signingSecret: JWT_SECRET, sameSite: "Lax" })
      return findUser.data;
    } else {
      return null;
    }
  },
  getAllUser: async (_,{}, ctx:YogaInitialContext) => {
    const cookiesValue = await ctx.request.cookieStore?.get("hello")
    console.log("cookie value", cookiesValue);
    
    const allUser = await getAllUsers();
    return allUser?.data;
  },
};
export default userQueries;
