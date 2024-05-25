// import { createUser, getUserByCredentials } from "../../auth";

import { createUser, getUserByCredentials } from "./functions/authFunctions";

const authMutations = {
  signup: async (_, { username, password }) => {
    const newUser = await createUser({ username, password });
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
