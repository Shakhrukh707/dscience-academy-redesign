import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, ChevronDown, Monitor, BookOpen, ShieldCheck } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { translations } from '../translations';
import { Language } from '../types';
import AccessibilityMenu from './AccessibilityMenu';

export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants: Record<string, string> = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20 dark:bg-[linear-gradient(135deg,#2563EB_0%,#3B82F6_100%)] dark:hover:bg-[linear-gradient(135deg,#3B82F6_0%,#60A5FA_100%)] dark:shadow-[0_22px_44px_-22px_rgba(37,99,235,0.75)]',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 dark:shadow-black/20',
    outline:
      'border-2 border-slate-100 text-slate-600 hover:border-blue-600 hover:text-blue-600 bg-transparent dark:border-slate-700/90 dark:bg-slate-950/20 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:text-blue-200',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-black transition-all ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const BrandIcon = ({ size = 'sm' }: { size?: 'sm' | 'lg' }) => {
  const [sourceIndex, setSourceIndex] = useState(0);
  const sources = ['/logo-mark.svg', '/logo-mark.png', './logo-mark.svg', './logo-mark.png'];
  const imageClass =
    size === 'lg'
      ? 'w-[210px] h-12 sm:w-[250px] sm:h-14 md:w-[320px] md:h-20'
      : 'w-[140px] h-8 sm:w-[170px] sm:h-10 md:w-[220px] md:h-14';
  const fallbackClass =
    size === 'lg'
      ? 'w-12 h-12 rounded-2xl text-2xl'
      : 'w-10 h-10 rounded-xl text-xl';

  if (sourceIndex >= sources.length) {
    return (
      <div className={`${fallbackClass} flex items-center justify-center bg-blue-600 font-black text-white`}>
        DS
      </div>
    );
  }

  return (
    <>
      <img
        src={sources[sourceIndex]}
        alt="DScience Academy"
        className={`${imageClass} object-contain select-none dark:hidden`}
        onError={() => setSourceIndex(prev => prev + 1)}
      />
      <img
        src="/logo-mark-white.png"
        alt="DScience Academy"
        className={`${imageClass} object-contain select-none hidden dark:block`}
      />
    </>
  );
};

export default function Navbar({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const handleNavClick = (path: string, hash?: string) => {
    setMobileMenuOpen(false);
    if (hash) {
      if (location.pathname !== '/') {
        // Pass the target hash in state so Home can scroll to it after mounting
        navigate('/', { state: { scrollTo: hash } });
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      // Removed instant window.scrollTo(0, 0) because AnimatePresence handles it via onExitComplete
    }
  };

  const navItems = [
    { label: lang === 'UZ' ? 'Yangiliklar' : lang === 'RU' ? 'Новости' : 'News', onClick: () => handleNavClick('/news') },
    { label: t.header.projects, onClick: () => handleNavClick('/projects') },
    { label: t.header.courses, onClick: () => handleNavClick('/', 'courses') },
  ];

  const dropdownItems = [
    { 
      label: 'LMS Platforma', 
      sub: lang === 'UZ' ? "O'quv platformasi" : lang === 'RU' ? 'Учебная платформа' : 'Learning Platform',
      icon: <Monitor size={16} />,
      colorClass: 'text-blue-600 dark:text-blue-400',
      bgClass: 'bg-blue-50 dark:bg-blue-900/30',
      onClick: () => window.open('https://lmsf.dscience.uz/login', '_blank')
    },
    { 
      label: 'Kutubxona', 
      sub: lang === 'UZ' ? 'Kitoblar va taqdimotlar' : lang === 'RU' ? 'Книги и презентации' : 'Books & Presentations',
      icon: <BookOpen size={16} />,
      colorClass: 'text-emerald-600 dark:text-emerald-400',
      bgClass: 'bg-emerald-50 dark:bg-emerald-900/30',
      onClick: () => window.open('https://dscience.uz/login', '_blank')
    },
    { 
      label: 'Sertifikatni tekshirish', 
      sub: lang === 'UZ' ? 'Haqqoniylikni tekshirish' : lang === 'RU' ? 'Проверка подлинности' : 'Verify Certificate',
      icon: <ShieldCheck size={16} />,
      colorClass: 'text-purple-600 dark:text-purple-400',
      bgClass: 'bg-purple-50 dark:bg-purple-900/30',
      onClick: () => window.open('https://dscience.uz/e-campus', '_blank')
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 sm:py-4 glass border-none' : 'py-4 sm:py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-3">
          <button className="flex items-center gap-3 group shrink-0" onClick={() => handleNavClick('/')}>
            <div className="group-hover:scale-[1.02] transition-transform">
              <BrandIcon />
            </div>
          </button>

          <nav className="hidden xl:flex items-center gap-8 2xl:gap-10">
            {navItems.map(item => (
              <button
                key={item.label}
                type="button"
                onClick={item.onClick}
                className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors whitespace-nowrap dark:text-slate-300/90 dark:hover:text-blue-200"
              >
                {item.label}
              </button>
            ))}

            <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button
                type="button"
                className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors whitespace-nowrap dark:text-slate-300/90 dark:hover:text-blue-200 flex items-center gap-1.5 py-4"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                E-Campus <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 w-64 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-xl overflow-hidden flex flex-col p-2"
                  >
                    {dropdownItems.map((item, i) => (
                      <button key={i} onClick={item.onClick} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left group">
                        <div className={`${item.bgClass} p-2 rounded-lg ${item.colorClass} group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{item.label}</span>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">{item.sub}</span>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
            <div className="hidden md:flex bg-slate-100 rounded-2xl p-1 border border-slate-200 dark:bg-slate-950/75 dark:border-slate-700/70 dark:shadow-[0_18px_38px_-24px_rgba(0,0,0,0.8)]">
              {(['UZ', 'RU', 'EN'] as Language[]).map(option => (
                <button
                  key={option}
                  onClick={() => setLang(option)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-black transition-all ${
                    lang === option
                      ? 'bg-white text-blue-600 shadow-sm dark:bg-slate-800/95 dark:text-blue-200 dark:shadow-[0_12px_26px_-18px_rgba(59,130,246,0.75)]'
                      : 'text-slate-500 dark:text-slate-500'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <AccessibilityMenu lang={lang} />

            <Button variant="outline" className="hidden sm:flex py-3 px-4 sm:px-6 text-[10px] sm:text-xs uppercase tracking-widest !rounded-xl whitespace-nowrap items-center gap-2" onClick={() => window.open('https://dscience.uz/login', '_blank')}>
              <User size={14} />
              {t.header.apply}
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden w-11 h-11 rounded-2xl border border-slate-200 bg-white text-slate-700 flex items-center justify-center shadow-sm dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-slate-900/70 backdrop-blur-xl px-4 py-4 sm:px-6 sm:py-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              className="mx-auto w-full max-w-xl rounded-[2rem] bg-white p-5 sm:p-6 shadow-3xl dark:bg-[linear-gradient(180deg,#0F172A_0%,#020617_100%)] dark:border dark:border-slate-800/80"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <BrandIcon />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-11 h-11 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center shrink-0 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex bg-slate-100 rounded-2xl p-1 border border-slate-200 mb-4 md:hidden dark:bg-slate-950/80 dark:border-slate-700/70">
                {(['UZ', 'RU', 'EN'] as Language[]).map(option => (
                  <button
                    key={option}
                    onClick={() => setLang(option)}
                    className={`flex-1 px-3 py-2 rounded-xl text-[10px] font-black transition-all ${
                      lang === option
                        ? 'bg-white text-blue-600 shadow-sm dark:bg-slate-800/95 dark:text-blue-200 dark:shadow-[0_12px_26px_-18px_rgba(59,130,246,0.75)]'
                        : 'text-slate-400 dark:text-slate-500'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="grid gap-2">
                {navItems.map(item => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={item.onClick}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-left text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-slate-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
                  >
                    {item.label}
                  </button>
                ))}

                <div className="w-full rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
                  <div className="px-3 pt-1 pb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                    E-Campus
                  </div>
                  <div className="grid gap-1">
                    {dropdownItems.map((item, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => { item.onClick(); setMobileMenuOpen(false); }}
                        className="flex items-center gap-3 w-full rounded-xl px-3 py-2.5 text-left text-sm font-bold text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        <div className={`${item.bgClass} p-1.5 rounded-lg ${item.colorClass}`}>
                          {item.icon}
                        </div>
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] !rounded-2xl flex items-center justify-center gap-2" onClick={() => { window.open('https://dscience.uz/login', '_blank'); setMobileMenuOpen(false); }}>
                <User size={18} />
                {t.header.apply}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
