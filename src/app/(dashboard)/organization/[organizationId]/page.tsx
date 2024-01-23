import { onCreateBoard } from '@/actions/board-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { prisma } from '@/lib/db/prisma';
import React from 'react';

import { BoardList } from '../../_components/BoardList';
import { Form } from '../../_components/Form';
import { SubmitButton } from '../../_components/SubmitButton';
import { TestForm } from '../../_components/TestForm';

const OrganizationPage = async ({
  params,
}: {
  params: { organizationId: string };
}) => {
  const boards = await prisma.board.findMany({});
  return (
    <div className="flex-1 max-w-xl min-w-[350px] mx-auto">
      <Form />

      {boards.map((board) => (
        <BoardList key={board.id} board={board} />
      ))}
    </div>
  );
};

export default OrganizationPage;
