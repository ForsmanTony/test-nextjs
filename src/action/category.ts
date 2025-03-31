'use server';

import { z } from "zod";
import { prisma } from "@/lib/prisma";

const formSchema = z.object({
  name: z.string(),

})

export default async function createCategory(formData: FormData) {
  const result = formSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {

    console.log(result.error.flatten());
    return result.error.flatten();
  }

  return await prisma.category.create({

  })
}

export async function getCategory() {
  const category = await prisma.category.findMany();
  return category
}

export async function deleteCategory(id: string) {
  return await prisma.category.delete({
    where: { id },
  });
}