import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewsList from './components/NewsList';
import NewsArticle from './components/NewsArticle';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsArticle />} />
      </Routes>
    </Router>
  );
}
