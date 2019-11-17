import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export default class Position {
    @Field((type) => Int)
    public id: number;
    @Field()
    public name: string;
    @Field()
    public responsibility: string;
}