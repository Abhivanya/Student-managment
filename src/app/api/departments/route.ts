import {
  createDepartmentController,
  getDepartmentsController,
} from "@/modules/department/department.controller";
import { asyncHandler } from "@/utils/async-handler";
import { NextRequest } from "next/server";

export const GET = asyncHandler(async (request: NextRequest) => {
  return getDepartmentsController(request);
});

export const POST = asyncHandler(async (request: Request) => {
  return createDepartmentController(request);
});
