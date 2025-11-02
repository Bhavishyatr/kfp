import { useState, useEffect, useRef } from 'react';

export const usePosts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isFetching = useRef(false);

  useEffect(() => {
    // Prevent duplicate calls
    if (isFetching.current) return;
    
    isFetching.current = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        isFetching.current = false;
      }
    };

    fetchPosts();
  }, []);

  return { data, loading, error };
};