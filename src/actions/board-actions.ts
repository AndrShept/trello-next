'use server';

import { prisma } from '@/lib/db/prisma';
import { revalidatePath } from 'next/cache';
import z from 'zod';

export type State = {
  errors?: {
    title?: string[];
  };

  message?: string | null;
};

const CreateBoard = z.object({
  title: z
    .string()
    .min(3, { message: 'Minimum length of 3 letters is required' }),
});

export const onCreateBoard = async (prevState: State, formData: FormData) => {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get('title'),
  });
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      message: 'Missing fields',
    };
  }
  const { title } = validatedFields.data;
  try {
    await prisma.board.create({
      data: { title },
    });
  } catch (error) {
    return {
      message: `Database Error `,
    };
  }

  revalidatePath('/organization/[id]', 'page');
};
export const onDeleteBoard = async (boardId: string) => {
  await prisma.board.delete({
    where: { id: boardId },
  });

  revalidatePath('/organization/[id]', 'page');
};
