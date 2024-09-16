import React from 'react';
import PageLayout from './PageLayout';

const ErrorPage: React.FC = () => {
  return (
    <PageLayout title="Error" error>
      <div className="p-4 flex gap-4 items-center">
        <h1 className="text-lg">Something went wrong. please contact the officer.</h1>
      </div>
    </PageLayout>
  );
};

export default ErrorPage;
