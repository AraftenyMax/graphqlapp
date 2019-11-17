import { Field, Int, ObjectType } from 'type-graphql';
import User from './User';

@ObjectType()
export default class Department {
    @Field((type) => Int)
    public id: number;
    @Field()
    public address: string;
    @Field()
    public name: string;
    @Field((type) => Int)
    public foundAt: number;
    @Field((type) => [User])
    public users: User[];
}