import { auth } from '@clerk/nextjs';
import React from 'react';

const page = ({ params }: { params: { organizationId: string } }) => {
  const { userId } = auth();
  return <div className=''>{params.organizationId}</div>;
};

export default page;
