import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import UsersResolver from "./resolvers/UsersResolver";
import DepartmentsResolver from './resolvers/DepartmentsResolver';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UsersResolver, DepartmentsResolver],
    emitSchemaFile: true,
  });

  const server = new GraphQLServer({
    schema,
  });

  server.start(() => console.log("Server is running on http://localhost:4000"));
}

bootstrap();