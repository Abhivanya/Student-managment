import { prisma } from "@/lib/prisma";
import { createStudentController } from "@/modules/student/student.controller";

export async function GET() {
  const students = await prisma.student.findMany();
  return Response.json({
    students,
  });
}

export async function POST(request: Request) {
  return createStudentController(request);
}
