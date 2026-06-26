import z from "zod";

export const studetnSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.email(),
  age: z
    .number()
    .int()
    .min(16, { message: "Age must be at least 18" })
    .max(100, { message: "Age must be less than 100" }),
});
