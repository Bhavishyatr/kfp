// Application constants

export const API_ENDPOINTS = {
  POSTS: 'https://jsonplaceholder.typicode.com/posts',
  COMMENTS: (postId) => `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  POSTS_BY_USER: (userId) => `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  RANDOM_IMAGE: 'https://dog.ceo/api/breeds/image/random'
};

export const ROUTES = {
  HOME: '/',
  POST_DETAIL: (postId) => `/post/${postId}`,
  AUTHOR_POSTS: (authorId) => `/author/${authorId}`
};

export const UI_CONSTANTS = {
  LOADING_MESSAGE: 'Loading...',
  ERROR_MESSAGE: 'Something went wrong',
  NO_POSTS_MESSAGE: 'No posts found',
  POSTS_COUNT_MESSAGE: (count) => `${count} posts available`
};
