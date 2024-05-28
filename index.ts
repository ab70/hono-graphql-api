import { Hono } from 'hono'
import { db } from './src/db/db';
import { cors } from "hono/cors"
import yogaConf from './src/graphql';

const app = new Hono()


export default {
  fetch: yogaConf.fetch,
  port: 4001,
}
