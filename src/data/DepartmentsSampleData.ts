import User from '../schemas/User';
import { UserSampleData } from '../data/UserSampleData';
import Department from '../schemas/Department';

export const DepartmentsSampleData: Department[] = [
    {id: 1, name: "Engineering", address: "5th Avenue",
     foundAt: Date.now(), users: [UserSampleData[0]]},
    {id: 2, name: "Software", address: "6th Avenue",
     foundAt: 973987200, users: [UserSampleData[1], UserSampleData[2]]},
    {id: 3, name: "Management", address: "7th Avenue",
     foundAt: 930873600, users: [UserSampleData[3]]},
    {id: 4, name: "Security", address: "8th Avenue",
     foundAt: 254275200, users: [UserSampleData[4], UserSampleData[5]]}
];