import React, { ReactNode } from 'react';

import { Sidebar } from '../_components/Sidebar';

const OrganizationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="pt-20 md:pt-24 px-4 max-w-6xl 2xl:max-w-screen-xl h-screen mx-auto">
      <div className="flex gap-x-7 h-full">
        <aside className="w-64 sticky top-0 z-50 shrink-0 hidden md:block ">
          <Sidebar />
        </aside>
     

        {children}
     
      </div>
    </main>
  );
};
export default OrganizationLayout;
