import { successResponse } from "@/utils/api-response";
import { createStudent, getStudentByEmail } from "./student.service";
import { studentSchema } from "./studetn.schema";
import { ConflictError } from "@/shared/errors/ConflictError";
import { validate } from "@/utils/validate";

export async function createStudentController(request: Request) {
  const body = await request.json();

  const parsedBody = validate(studentSchema, body);

  const existingStudent = await getStudentByEmail(parsedBody.email);

  if (existingStudent) {
    throw new ConflictError("Student Already Exists");
  }

  const student = await createStudent(parsedBody);
  return successResponse(student, "Student created successfully", 201);
}
