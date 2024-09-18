import React, { ReactNode } from 'react';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

type PageLayoutProps = {
  children: ReactNode;
  title?: string;
  error?: boolean;
  nav?: ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ nav, title, children, error }) => {
  return (
    <div className="w-screen h-full flex flex-col gap-2 bg-gray-300 ">
      <PageHeader title={title} nav={nav} error={error} />
      <div className="h-[84.5vh] w-full p-2 justify-center overflow-hidden">{children}</div>
      <PageFooter />
    </div>
  );
};

export default PageLayout;
