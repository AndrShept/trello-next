import React, { ReactNode } from 'react';

import { Navbar } from './_components/navbar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section >
      <Navbar />
      {children}
    </section>
  );
};

export default DashboardLayout;
