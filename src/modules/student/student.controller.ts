import { successResponse } from "@/utils/api-response";
import { createStudent } from "./student.service";
import { studetnSchema } from "./studetn.schema";

export async function createStudentController(request: Request) {
  const body = await request.json();

  const parsedBody = studetnSchema.parse(body);

  const student = await createStudent(parsedBody);
  return successResponse(student, "Student created successfully", 201);
}
