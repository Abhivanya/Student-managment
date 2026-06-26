import { prisma } from "@/lib/prisma";
import { createStudentController } from "@/modules/student/student.controller";
import { asyncHandler } from "@/utils/async-handler";

export async function GET() {
  const students = await prisma.student.findMany();
  return Response.json({
    students,
  });
}

export const POST = asyncHandler(async (request: Request) => {
  return createStudentController(request);
});
