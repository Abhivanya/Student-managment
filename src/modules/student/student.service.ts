import { prisma } from "@/lib/prisma";

export async function createStudent(data: {
  name: string;
  email: string;
  age: number;
}) {
  return prisma.student.create({
    data,
  });
}
