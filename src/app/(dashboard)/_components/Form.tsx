import { onCreateBoard } from '@/actions/board-actions';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useFormState } from 'react-dom';

import { SubmitButton } from './SubmitButton';

export const Form = () => {
  const initialState = {  message: null , errors: {}};

  //@ts-ignore
  const { state, dispatch } = useFormState(onCreateBoard, initialState);
  return (
    <form className="flex flex-col gap-2" action={dispatch}>
      <Input name="title" />

      <SubmitButton />
    </form>
  );
};
