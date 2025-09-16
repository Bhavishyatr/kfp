import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import PostDetailPage from './pages/PostDetailPage.jsx';
import AuthorPostsPage from './pages/AuthorPostsPage.jsx';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<PostDetailPage />} />
          <Route path="/author/:authorId" element={<AuthorPostsPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
