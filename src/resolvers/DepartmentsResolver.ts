import { Arg, Query, Resolver } from 'type-graphql';
import { DepartmentsSampleData } from '../data/DepartmentsSampleData';
import Department from '../schemas/Department';

@Resolver((of) => Department)
export default class DepartmentsResolver {
    private items: Department[] = DepartmentsSampleData;
    @Query((returns) => [Department], {nullable: false})
    public allDepartments() {
        return DepartmentsSampleData;
    }

    @Query((returns) => Department, {nullable: true})
    public departmentByName(@Arg("name") name: string) {
        return this.items.find(department => department.name === name);
    }

    @Query((returns) => Department, {nullable: true})
    public departmentById(@Arg("id") id: number) {
        return this.items.find((department) => department.id === id);
    }
}