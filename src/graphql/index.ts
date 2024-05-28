import { createYoga } from "graphql-yoga";
// import { Context } from "hono"
import { useCookies } from '@whatwg-node/server-plugin-cookies'
 
import schemas from "./schema";

const yogaConf = createYoga({
  schema: schemas,
  graphqlEndpoint: "/graphql",
  // context: (c) => {
  //   // Include Hono context in GraphQL context
  //   return {
  //     honoContext: {
  //       c
  //     },
  //   };
  // },
  plugins: [useCookies()]
});
export default yogaConf;
