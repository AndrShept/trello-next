'use client';

import { createBoard } from '@/actions/board-actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';

export const TestForm = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const res = await createBoard({title})
      console.log(res)
    });
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <Input onChange={(e) => setTitle(e.target.value)} name="title" />

      <Button disabled={isPending} type="submit">
        Submit
      </Button>
      {/* <SubmitButton /> */}
    </form>
  );
};
