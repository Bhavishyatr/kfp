import React from 'react';

const Loader = ({ message = 'Loading...' }) => {

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <p className="text-sm text-gray-600">{message}</p>
    </div>
  );
};

export default Loader;
