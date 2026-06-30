import z from "zod";

export const departmentSchema = z.object({
  name: z.string().trim().min(2).max(100),
});

export const getDepartmentsQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10),
  search: z.string().trim().optional(),
  sort: z.enum(["name", "createdAt"]).default("createdAt"),
});
