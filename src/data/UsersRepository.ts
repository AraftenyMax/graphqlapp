import { IUserData, UserSampleData } from "../data/UserSampleData";

export default class UsersRepository {
    private data: IUserData[];
    public constructor(data: IUserData[]) {
        this.data = [...data];
    }

    public getUserByName(name: string) {
        return this.data.find((user) => user.name = name);
    }

    public getUserById(id: number) {
        return this.data.find((user) => user.id === id);
    }
}
