import React from 'react';
import PageLayout from './PageLayout';

const NotFoundPage: React.FC = () => {
  return (
    <PageLayout title="Not Found">
      <div className="p-4 flex gap-4 items-center">
        <h1 className="text-lg">We not find your page</h1>
        <a href={'/'} className="text-blue-600">
          Back to homepage
        </a>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
