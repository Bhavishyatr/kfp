import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/index.js';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToPost = (postId) => {
    navigate(ROUTES.POST_DETAIL(postId));
  };

  const goToAuthorPosts = (authorId) => {
    navigate(ROUTES.AUTHOR_POSTS(authorId));
  };

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate(ROUTES.HOME);
  };

  return {
    goToPost,
    goToAuthorPosts,
    goBack,
    goHome
  };
};
