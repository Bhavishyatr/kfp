import React from 'react';
import { useNavigation } from '../../../utils/navigation.js';

const PostCard = ({ post, showAuthor = true }) => {
  const { goToPost, goToAuthorPosts } = useNavigation();

  const handlePostClick = () => {
    goToPost(post.id);
  };

  const handleAuthorClick = (e) => {
    e.stopPropagation(); // Prevent post click when clicking author
    goToAuthorPosts(post.userId);
  };

  return (
    <div
      className="bg-white rounded-lg p-4 shadow cursor-pointer hover:shadow-md transition"
      onClick={handlePostClick}
    >
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{post.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{post.body}</p>
        {showAuthor && (
          <div
            className="flex justify-between items-center pt-2 border-t border-gray-100 hover:text-indigo-600"
            onClick={handleAuthorClick}
          >
            <span className="text-gray-500 text-sm">Author ID: {post.userId}</span>
            <span className="text-indigo-600 text-xs font-medium">View more posts →</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
