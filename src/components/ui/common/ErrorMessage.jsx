import React from 'react';
import { handleApiError } from '../../../utils/errorHandler.js';

const ErrorMessage = ({ error, onGoBack }) => {
  const errorMessage = handleApiError(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-white text-center p-8">
      <h2 className="text-2xl mb-4 text-red-400">Error</h2>
      <p className="mb-4">{errorMessage}</p>
      {onGoBack && (
        <button
          onClick={onGoBack}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Go Back
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
