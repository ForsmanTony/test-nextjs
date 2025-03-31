'use server';

import { z } from "zod";
import { prisma } from "@/lib/prisma";

const formSchema = z.object({
  name: z.string(),
  amount: z.number(),
  category: z.string(),
  date: z.string(),
})

export default async function createExpense(formData: FormData) {
  const result = formSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {

    console.log(result.error.flatten());
    return result.error.flatten();
  }

  return await prisma.expense.create({

  })
}

export async function getExpense() {
  const expense = await prisma.category.findMany();
  return expense
}

export async function deleteExpense(id: string) {
  return await prisma.expense.delete({
    where: { id },
  });
}