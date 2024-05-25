import {createYoga } from "graphql-yoga";


import schemas from "./schema";

const yogaConf = createYoga({
  schema: schemas,
  graphqlEndpoint: "/graphql",
});
export default yogaConf;
