export interface IUserData {
    id: number;
    name: string;
    department: string;
}

export const UserSampleData: IUserData[] = [
    {id: 1, name: "Martin", department: "Engineering"},
    {id: 2, name: "Henning", department: "Software"},
    {id: 4, name: "Christian", department: "Software"},
    {id: 6, name: "Adam", department: "Management"},
    {id: 12, name: "Smith", department: "Security"},
    {id: 22, name: "Hugo", department: "Secutiry"}
];
