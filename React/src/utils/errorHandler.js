export const handleApiError = (error) => {
  if (!error || !error.message) {
    return 'An unknown error occurred.';
  }

  if (error.message.includes('Failed to fetch')) {
    return 'Network error. Please check your internet connection.';
  }

  if (error.message.includes('404')) {
    return 'Resource not found.';
  }

  if (error.message.includes('500')) {
    return 'Server error. Please try again later.';
  }

  return error.message || 'An unexpected error occurred.';
};