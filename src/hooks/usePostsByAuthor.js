import { useState, useEffect } from 'react';

export const usePostsByAuthor = (authorId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthorPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${authorId}`);
        if (!response.ok) throw new Error('Failed to fetch posts');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (authorId) {
      fetchAuthorPosts();
    }
  }, [authorId]);

  return { data, loading, error };
};
