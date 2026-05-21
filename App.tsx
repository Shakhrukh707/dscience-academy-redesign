import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewsList from './components/NewsList';
import NewsArticle from './components/NewsArticle';
import ProjectList from './components/ProjectList';
import ProjectArticle from './components/ProjectArticle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('UZ');

  return (
    <Router>
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/news" element={<NewsList lang={lang} />} />
        <Route path="/news/:id" element={<NewsArticle lang={lang} />} />
        <Route path="/projects" element={<ProjectList lang={lang} />} />
        <Route path="/projects/:id" element={<ProjectArticle lang={lang} />} />
      </Routes>
      <Footer lang={lang} />
    </Router>
  );
}
