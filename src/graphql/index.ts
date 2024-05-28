import { createYoga } from "graphql-yoga";
// import { Context } from "hono"

import schemas from "./schema";

const yogaConf = createYoga({
  schema: schemas,
  graphqlEndpoint: "/graphql",
  context: (c) => {
    // Include Hono context in GraphQL context
    return {
      honoContext: {
        c
      },
    };
  },
});
export default yogaConf;
