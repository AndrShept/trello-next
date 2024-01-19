import { auth } from '@clerk/nextjs';
import React from 'react';

const page = ({ params }: { params: { id: string } }) => {
    const { userId} = auth()
  return <div>PAGWE</div>;
};

export default page;
