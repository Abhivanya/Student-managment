import { createStudent } from "./student.service";
import { studetnSchema } from "./studetn.schema";

export async function createStudentController(request: Request) {
  const body = await request.json();

  const parsedBody = studetnSchema.parse(body);

  const student = await createStudent(parsedBody);
  return Response.json(
    {
      student,
    },
    { status: 201 },
  );
}
