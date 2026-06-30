import { prisma } from "@/lib/prisma";
import { FindDepartmentsOptions } from "./department.types";

export async function createDepartment(data: { name: string }) {
  return await prisma.department.create({
    data,
  });
}

export async function getDepartmentByName(name: string) {
  return await prisma.department.findUnique({
    where: { name: name },
  });
}

export async function getAllDepartments(options: FindDepartmentsOptions) {
  const { skip, take, search, sort } = options;
  return await prisma.department.findMany({
    skip,
    take,
    where: buildDepartmentWhereClause(search),
    orderBy: {
      [sort]: "asc",
    },
  });
}

export async function getDepartmentCount(search?: string) {
  return await prisma.department.count({
    where: buildDepartmentWhereClause(search),
  });
}

function buildDepartmentWhereClause(
  search?: string,
): { name: { contains: string; mode: "insensitive" } } | undefined {
  if (!search) return undefined;

  return {
    name: {
      contains: search,
      mode: "insensitive",
    },
  };
}
