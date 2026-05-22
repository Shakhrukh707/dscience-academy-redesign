import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import NewsList from './components/NewsList';
import NewsArticle from './components/NewsArticle';
import ProjectList from './components/ProjectList';
import ProjectArticle from './components/ProjectArticle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Language } from './types';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = ({ lang }: { lang: Language }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home lang={lang} /></PageWrapper>} />
        <Route path="/news" element={<PageWrapper><NewsList lang={lang} /></PageWrapper>} />
        <Route path="/news/:id" element={<PageWrapper><NewsArticle lang={lang} /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><ProjectList lang={lang} /></PageWrapper>} />
        <Route path="/projects/:id" element={<PageWrapper><ProjectArticle lang={lang} /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('UZ');

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar lang={lang} setLang={setLang} />
        <div className="flex-grow">
          <AnimatedRoutes lang={lang} />
        </div>
        <Footer lang={lang} />
      </div>
    </Router>
  );
}
