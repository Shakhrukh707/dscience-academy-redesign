import React from 'react';
import { motion } from 'framer-motion';
import { BrandIcon } from './Navbar';
import { Language } from '../types';
import { translations } from '../translations';

const revealViewport = { once: true, margin: '-60px' };
const revealEase = [0.22, 1, 0.36, 1];

export default function Footer({ lang }: { lang: Language }) {
  const t = translations[lang];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={revealViewport}
      transition={{ duration: 0.8, ease: revealEase }}
      className="py-16 sm:py-20 md:py-24 bg-white border-t border-slate-100 text-center dark:bg-[#040814] dark:border-slate-800/90"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.7, delay: 0.06, ease: revealEase }}
          className="flex items-center justify-center gap-4 mb-8 sm:mb-12"
        >
          <BrandIcon size="lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.7, delay: 0.12, ease: revealEase }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-12 mb-8 sm:mb-12 text-slate-400 font-black uppercase text-[10px] sm:text-xs tracking-[0.28em] sm:tracking-[0.4em] dark:text-slate-500"
        >
          <a href="https://www.instagram.com/muvm.uz?igsh=MW8wN2JhdGIzZ2V3aA==" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors dark:hover:text-blue-300">Instagram</a>
          <a href="https://t.me/muvdscienceuz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors dark:hover:text-blue-300">Telegram</a>
          <a href="https://www.linkedin.com/company/muvmuz/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors dark:hover:text-blue-300">Linkedin</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.7, delay: 0.16, ease: revealEase }}
          className="text-slate-300 font-bold uppercase text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-widest dark:text-slate-600"
        >
          {lang === 'UZ' 
            ? "© 2026 Tayyorlov o'quv kurslari markazi. Barcha huquqlar himoyalangan."
            : lang === 'RU'
            ? '© 2026 Центр подготовительных учебных курсов. Все права защищены.'
            : '© 2026 Preparatory Training Center. All rights reserved.'}
        </motion.div>
      </div>
    </motion.footer>
  );
}
