import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings2, Moon, Sun, ZoomIn, ZoomOut, Volume2, Square, Contrast, SquareSquare } from 'lucide-react';
import { Language } from '../types';

export default function AccessibilityMenu({ lang }: { lang: Language }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // States
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [fontSize, setFontSize] = useState<number>(100);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Load saved settings
  useEffect(() => {
    const savedTheme = localStorage.getItem('dscience-theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    
    const savedFontSize = parseInt(localStorage.getItem('dscience-fontSize') || '100', 10);
    setFontSize(savedFontSize);
    document.documentElement.style.fontSize = `${savedFontSize}%`;

    const savedGrayscale = localStorage.getItem('dscience-grayscale') === 'true';
    setIsGrayscale(savedGrayscale);

    const savedContrast = localStorage.getItem('dscience-contrast') === 'true';
    setIsHighContrast(savedContrast);
  }, []);

  // Update HTML styles when states change
  useEffect(() => {
    let filterString = '';
    if (isGrayscale) filterString += 'grayscale(100%) ';
    if (isHighContrast) filterString += 'contrast(125%) saturate(150%) ';
    
    document.documentElement.style.filter = filterString.trim();
  }, [isGrayscale, isHighContrast]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Actions
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('dscience-theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    document.documentElement.style.colorScheme = newTheme;
  };

  const changeFontSize = (delta: number) => {
    let newSize = fontSize + delta;
    if (newSize < 80) newSize = 80;
    if (newSize > 150) newSize = 150;
    setFontSize(newSize);
    localStorage.setItem('dscience-fontSize', newSize.toString());
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleGrayscale = () => {
    const newVal = !isGrayscale;
    setIsGrayscale(newVal);
    localStorage.setItem('dscience-grayscale', newVal.toString());
  };

  const toggleContrast = () => {
    const newVal = !isHighContrast;
    setIsHighContrast(newVal);
    localStorage.setItem('dscience-contrast', newVal.toString());
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // Find main readable text (paragraphs and headings)
      const content = Array.from(document.querySelectorAll('h1, h2, h3, p, li'))
        .map(el => el.textContent)
        .join('. ');
      
      const utterance = new SpeechSynthesisUtterance(content);
      // Try to set language based on current lang
      utterance.lang = lang === 'UZ' ? 'uz-UZ' : lang === 'RU' ? 'ru-RU' : 'en-US';
      
      utterance.onend = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Stop speech when component unmounts
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const t = {
    title: lang === 'UZ' ? 'Maxsus imkoniyatlar' : lang === 'RU' ? 'Специальные возможности' : 'Accessibility',
    theme: lang === 'UZ' ? 'Qorong\'i mavzu' : lang === 'RU' ? 'Темная тема' : 'Dark mode',
    read: lang === 'UZ' ? 'O\'qishni boshlash' : lang === 'RU' ? 'Читать вслух' : 'Read aloud',
    grayscale: lang === 'UZ' ? 'Oq-qora rejim' : lang === 'RU' ? 'Черно-белый режим' : 'Grayscale mode',
    contrast: lang === 'UZ' ? 'Yuqori kontrast' : lang === 'RU' ? 'Высокий контраст' : 'High contrast'
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-2xl border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm dark:border-slate-700/70 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:bg-slate-800"
        title={t.title}
      >
        <Settings2 size={18} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-[-10px] sm:right-0 mt-2 w-[240px] sm:w-64 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-4 z-50 dark:bg-slate-900 dark:border-slate-800 dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] text-slate-700 dark:text-slate-200"
          >
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 dark:border-slate-800 pb-2">
              <span className="font-bold text-sm tracking-wide text-slate-900 dark:text-white">{t.title}</span>
              <Settings2 size={16} className="text-slate-400" />
            </div>

            <div className="space-y-3">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="w-full flex items-center justify-between py-2 px-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-3">
                  {theme === 'dark' ? <Sun size={18} className="text-blue-500" /> : <Moon size={18} />}
                  <span className="text-sm font-medium">{t.theme}</span>
                </div>
                <div className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${theme === 'dark' ? 'bg-blue-500' : 'bg-slate-200 dark:bg-slate-700'}`}>
                  <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${theme === 'dark' ? 'translate-x-4' : 'translate-x-0'}`} />
                </div>
              </button>

              {/* Font Size */}
              <div className="flex items-center justify-between py-2 px-3">
                <button 
                  onClick={() => changeFontSize(-10)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ZoomOut size={16} />
                </button>
                <span className="text-sm font-bold w-12 text-center">{fontSize}%</span>
                <button 
                  onClick={() => changeFontSize(10)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ZoomIn size={16} />
                </button>
              </div>

              {/* Text to Speech */}
              <button 
                onClick={toggleSpeech}
                className={`w-full flex items-center gap-3 py-2 px-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors ${isSpeaking ? 'text-blue-600 dark:text-blue-400' : ''}`}
              >
                <Volume2 size={18} className={isSpeaking ? "animate-pulse" : ""} />
                <span className="text-sm font-medium">{t.read}</span>
              </button>

              {/* Grayscale Toggle */}
              <button 
                onClick={toggleGrayscale}
                className="w-full flex items-center gap-3 py-2 px-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors"
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${isGrayscale ? 'bg-slate-400 border-slate-400' : 'border-slate-300 dark:border-slate-600'}`}>
                  {isGrayscale && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
                </div>
                <span className="text-sm font-medium">{t.grayscale}</span>
              </button>

              {/* High Contrast Toggle */}
              <button 
                onClick={toggleContrast}
                className="w-full flex items-center gap-3 py-2 px-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-colors"
              >
                <div className={`w-5 h-5 rounded bg-black dark:bg-white flex items-center justify-center border-2 ${isHighContrast ? 'border-blue-500' : 'border-transparent'}`}>
                  {isHighContrast && <Contrast size={12} className="text-white dark:text-black" />}
                </div>
                <span className="text-sm font-medium">{t.contrast}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
