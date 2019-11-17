import { Field, Int, ObjectType } from "type-graphql";
import User from "./User";

@ObjectType()
export default class Credentials {
    @Field((type) => Int)
    public id: number;
    @Field()
    public name: string;
    @Field((type) => Int)
    public age: number;
}