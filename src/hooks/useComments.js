import { useState, useEffect, useRef } from 'react';

export const useComments = (postId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isFetching = useRef(false);

  useEffect(() => {
    // Prevent duplicate calls
    if (isFetching.current || !postId) return;
    
    isFetching.current = true;

    const fetchComments = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!response.ok) throw new Error('Failed to fetch comments');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        isFetching.current = false;
      }
    };

    fetchComments();
  }, [postId]);

  return { data, loading, error };
};
