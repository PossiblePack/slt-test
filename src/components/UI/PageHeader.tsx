import React, { ReactNode } from 'react';

type PageHeaderProps = {
  title?: string;
  nav?: ReactNode;
  error?: boolean;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, nav, error }) => {
  const theme = error ? 'bg-red-500 text-white' : 'bg-white';
  return (
    <div className={`w-full h-[8vh] items-center  flex justify-between ${theme}`}>
      <h2 className="text-2xl font-bold p-4">{title}</h2>
      {nav}
    </div>
  );
};

export default PageHeader;
