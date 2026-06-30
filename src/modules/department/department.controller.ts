import { successResponse } from "@/utils/api-response";
import {
  createDepartmentService,
  getAllDepartmentsService,
} from "./department.service";
import { validate } from "@/utils/validate";
import {
  departmentSchema,
  getDepartmentsQuerySchema,
} from "./department.schema";
import { NextRequest } from "next/server";

export async function getDepartmentsController(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const query = {
    page: searchParams.get("page") ?? undefined,
    limit: searchParams.get("limit") ?? undefined,
    search: searchParams.get("search") ?? undefined,
    sort: searchParams.get("sort") ?? undefined,
  };

  const validatedQuery = validate(getDepartmentsQuerySchema, query);

  const departments = await getAllDepartmentsService(validatedQuery);
  return successResponse(departments, "Departments fetched successfully");
}

export async function createDepartmentController(request: Request) {
  const body = await request.json();
  const parsedBody = validate(departmentSchema, body);

  const newDepartment = await createDepartmentService(parsedBody.name);

  return successResponse(newDepartment, "Department Created Successfully", 201);
}
