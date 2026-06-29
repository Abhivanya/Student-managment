import { ValidationError } from "@/errors/ValidationError";
import { ZodSchema } from "zod";

export function validate<T>(schema: ZodSchema<T>, data: unknown): T {
  const parsedData = schema.safeParse(data);

  if (!parsedData.success) {
    const errors = parsedData.error.issues
      .map((issue) => `${issue.path.join(".")} : ${issue.message}`)
      .join(", ");

    throw new ValidationError(errors);
  }

  return parsedData.data;
}
