import { prisma } from '@/lib/db/prisma';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const newBody = await prisma.board.create({
    data: { title: body },
  });
  revalidatePath('/organization/[organizationId]', 'page');
  return NextResponse.json(newBody, { status: 201 });
};
