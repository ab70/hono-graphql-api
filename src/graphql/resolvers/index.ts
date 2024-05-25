import { authMutations } from "./auth";
import { userQueries } from "./user";
const resolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...authMutations,
  },
};
export default resolvers;
