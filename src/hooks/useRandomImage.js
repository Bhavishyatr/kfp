import { useState, useEffect, useRef } from 'react';

export const useRandomImage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isFetching = useRef(false);

  useEffect(() => {
    // Prevent duplicate calls
    if (isFetching.current) return;
    
    isFetching.current = true;

    const fetchRandomImage = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) throw new Error('Failed to fetch image');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        isFetching.current = false;
      }
    };

    fetchRandomImage();
  }, []);

  return { data, loading, error };
};
