import { ConflictError } from "@/shared/errors/ConflictError";
import {
  createDepartment,
  getAllDepartments,
  getDepartmentByName,
  getDepartmentCount,
} from "./department.repository";
import { GetDepartmentsQueryType } from "./department.types";

export async function getAllDepartmentsService(query: GetDepartmentsQueryType) {
  const { page, limit, search, sort } = query;
  const skip = (page - 1) * limit;

  const [departments, total] = await Promise.all([
    getAllDepartments({ skip, take: limit, search, sort }),
    getDepartmentCount(search),
  ]);

  const totaPages = Math.ceil(total / limit);
  return {
    data: departments,
    pagination: { page, limit, total, totaPages },
  };
}

export async function createDepartmentService(departmentName: string) {
  const exitstingDepartment = await getDepartmentByName(departmentName);

  if (exitstingDepartment) {
    throw new ConflictError(
      `Department with name ${departmentName} already exists`,
    );
  }
  return await createDepartment({ name: departmentName });
}
