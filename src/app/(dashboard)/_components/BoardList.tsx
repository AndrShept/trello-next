'use client';

import { onDeleteBoard } from '@/actions/board-actions';
import { Button } from '@/components/ui/button';
import type { Board } from '@prisma/client';
import { XIcon } from 'lucide-react';
import React from 'react';

export const BoardList = ({ board }: { board: Board }) => {
  const onClick = async() => {
   const res =  await onDeleteBoard(board.id);
  };
  return (
    <ul className="flex items-center p-1 list-disc" key={board.id}>
      <li>{board.title}</li>
      <Button
     
        onClick={onClick}
        className="h-6 w-6 ml-2"
        variant={'ghost'}
        size={'icon'}
      >
        <XIcon size={16} />
      </Button>
    </ul>
  );
};
