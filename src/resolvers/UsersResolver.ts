import {Arg, FieldResolver, Query, Resolver, ResolverInterface, Root} from "type-graphql";
import { UserSampleData } from "../data/UserSampleData";
import User from "../schemas/User";

@Resolver((of) => User)
export default class UsersResolver {
    private items: User[] = UserSampleData;
    @Query((returns) => User, {nullable: true})
    public userByName(@Arg("name") name: string): User | undefined {
        return this.items.find((user) => user.credentials.name = name);
    }

    @Query((returns) => User, {nullable: true})
    public userById(@Arg("id") id: number) {
        return this.items.find((user) => user.id === id);
    }

    @Query((returns) => [User], {nullable: false})
    public allUsers() {
        return this.items;
    }
}
