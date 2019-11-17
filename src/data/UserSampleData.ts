import User from "../schemas/User";
import { CredentialsSampleData } from './CredentialsSampleData';
import { PositionsSampleData } from './PositionSampleData';

export const UserSampleData: User[] = [
    {id: 1, credentials: CredentialsSampleData[0], position: PositionsSampleData[0]},
    {id: 2, credentials: CredentialsSampleData[1], position: PositionsSampleData[1]},
    {id: 4, credentials: CredentialsSampleData[2], position: PositionsSampleData[2]},
    {id: 6, credentials: CredentialsSampleData[3], position: PositionsSampleData[1]},
    {id: 12, credentials: CredentialsSampleData[4], position: PositionsSampleData[1]},
    {id: 22, credentials: CredentialsSampleData[5], position: PositionsSampleData[0]},
    {id: 167, credentials: CredentialsSampleData[6], position: PositionsSampleData[2]},
    {id: 10, credentials: CredentialsSampleData[7], position: PositionsSampleData[1]},
    {id: 15, credentials: CredentialsSampleData[8], position: PositionsSampleData[2]}
];
