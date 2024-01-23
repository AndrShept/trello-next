'use client';

import { Button } from '@/components/ui/button';
import { useFormState, useFormStatus } from 'react-dom';

export const SubmitButton = () => {
  const { data, pending, action, method } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      SubmitAction
    </Button>
  );
};
