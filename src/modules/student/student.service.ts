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

export async function getStudentById(id: string) {
  return prisma.student.findUnique({
    where: { id },
  });
}

export async function getStudentByEmail(email: string) {
  return prisma.student.findUnique({
    where: { email },
  });
}
