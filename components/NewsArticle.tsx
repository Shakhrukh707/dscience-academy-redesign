import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Facebook, Eye } from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { mockNews } from '../data/mockNews';
import { Language } from '../types';

export default function NewsArticle({ lang }: { lang: Language }) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = mockNews.find(n => n.id === id);

  const [views, setViews] = React.useState(article?.views || 0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (article) {
      const storageKey = `views_${article.id}`;
      const stored = localStorage.getItem(storageKey);
      let currentViews = stored ? parseInt(stored, 10) : (article.views || 0);
      
      // Increment view count on mount
      currentViews += 1;
      localStorage.setItem(storageKey, currentViews.toString());
      setViews(currentViews);
    }
  }, [id, article]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">
            {lang === 'UZ' ? 'Maqola topilmadi' : lang === 'RU' ? 'Статья не найдена' : 'Article not found'}
          </h1>
          <button 
            onClick={() => navigate('/news')}
            className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm hover:underline"
          >
            {lang === 'UZ' ? 'Yangiliklarga qaytish' : lang === 'RU' ? 'Вернуться к новостям' : 'Back to news'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-slate-100 pt-32 sm:pt-40 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white">
            {article.title[lang]}
          </h1>
          <div className="flex flex-col items-center justify-center gap-1 text-sm font-bold tracking-wide">
            <span className="text-slate-900 dark:text-slate-200">
              {lang === 'UZ' ? 'Muallif' : lang === 'RU' ? 'Автор' : 'Author'}: {article.author}
            </span>
            <span className="text-slate-500 dark:text-slate-400 font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-2">
              {article.readTime[lang]} | {article.date.full[lang]}
              {views > 0 && (
                <>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <Eye size={14} /> {views.toLocaleString()}
                  </span>
                </>
              )}
            </span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] sm:aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-900 rounded-[2rem] shadow-2xl mb-16 relative">
          <img 
            src={article.image} 
            alt={article.title[lang]} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Social Share (Desktop left sidebar, mobile top row) */}
          <div className="flex md:flex-col gap-4 shrink-0 md:sticky top-32 h-fit">
            <button className="w-10 h-10 border border-slate-200 dark:border-slate-800 flex items-center justify-center rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Twitter size={18} />
            </button>
            <button className="w-10 h-10 border border-slate-200 dark:border-slate-800 flex items-center justify-center rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Instagram size={18} />
            </button>
            <button className="w-10 h-10 border border-slate-200 dark:border-slate-800 flex items-center justify-center rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Facebook size={18} />
            </button>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <p className="text-xl sm:text-2xl font-bold leading-snug mb-8 text-slate-800 dark:text-slate-200">
              {article.excerpt[lang]}
            </p>

            {article.content.map((paragraph, idx) => (
              <React.Fragment key={idx}>
                <p className="mb-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                  {paragraph[lang]}
                </p>
                
                {/* Insert quote in the middle of content */}
                {idx === 0 && article.quote && (
                  <blockquote className="my-10 pl-6 border-l-4 border-blue-600 dark:border-blue-500 bg-white dark:bg-slate-900/60 py-6 pr-6 italic font-bold text-xl sm:text-2xl text-slate-900 dark:text-white rounded-r-2xl shadow-sm">
                    "{article.quote[lang]}"
                  </blockquote>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        {article.gallery && article.gallery.length > 0 && (
          <div className="mt-16 sm:mt-24">
            <h3 className="text-2xl sm:text-3xl font-black mb-8 text-slate-900 dark:text-white text-center">
              {lang === 'UZ' ? 'Fotogalereya' : lang === 'RU' ? 'Фотогалерея' : 'Photo Gallery'}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {article.gallery.map((img, idx) => (
                <Zoom key={idx}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-md hover:shadow-xl transition-all cursor-zoom-in">
                    <img 
                      src={img} 
                      alt={`Gallery ${idx + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Zoom>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
