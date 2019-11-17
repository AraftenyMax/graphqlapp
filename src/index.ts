import { ApolloServer } from "apollo-server";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import UsersResolver from "./resolvers/UsersResolver";

async function bootstrap() {
    const schema = await buildSchema({
        emitSchemaFile: path.resolve(__dirname, "./schemas/query.gql"),
        resolvers: [UsersResolver]
    });
    const server = new ApolloServer({
        playground: true,
        schema
    });
    const { url } = await server.listen(4000);
    /* tslint:disable */
    console.log(`Server is running, GraphQL Playground available at ${url}`);
    /* tslist:enable */
}

bootstrap();
