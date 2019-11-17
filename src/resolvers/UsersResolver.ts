import {Arg, FieldResolver, Query, Resolver, ResolverInterface, Root} from "type-graphql";
import { IUserData, UserSampleData } from "../data/UserSampleData";
import UsersRepository from "../data/UsersRepository";
import User from "../schemas/User";

@Resolver((of) => User)
export default class UsersResolver {
    private repository: UsersRepository = new UsersRepository(UserSampleData);
    @Query((returns) => User, {nullable: true})
    public userByName(@Arg("name") name: string): IUserData | undefined {
        return this.repository.getUserByName(name);
    }

    @Query((returns) => User, {nullable: true})
    public userById(@Arg("id") id: number) {
        return this.repository.getUserById(id);
    }
}
