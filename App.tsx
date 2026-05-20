import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewsList from './components/NewsList';
import NewsArticle from './components/NewsArticle';
import Navbar from './components/Navbar';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('UZ');

  return (
    <Router>
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsArticle />} />
      </Routes>
    </Router>
  );
}
