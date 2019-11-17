import { Field, Int, ObjectType } from "type-graphql";
import Credentials from "./Credentials";
import Position from "./Position";

@ObjectType()
export default class User {
    @Field((type) => Int)
    public id: number;
    @Field((type) => Credentials) 
    public credentials: Credentials;
    @Field((type) => Position)
    public position: Position;
}
