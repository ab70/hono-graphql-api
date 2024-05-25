import { join } from "path";
import { readdirSync,readFileSync } from "fs";
import{ makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolvers";

const gqlFiles = readdirSync(join(__dirname, './types'))
let typeDefs ='';
gqlFiles.forEach(file => {
    const typeDefsFile = readFileSync(join(__dirname, './types', file), 'utf-8');
    typeDefs += typeDefsFile;
});

const schemas = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schemas;

