import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Language } from '../types';

export default function NewsList({ lang }: { lang: Language }) {
  const navigate = useNavigate();

  const getViews = (newsId: string, defaultViews?: number) => {
    const stored = localStorage.getItem(`views_${newsId}`);
    return stored ? parseInt(stored, 10) : (defaultViews || 0);
  };
  const [newsList, setNewsList] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => {
        setNewsList(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch news:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 dark:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.14),transparent_30%),linear-gradient(180deg,#030712_0%,#020617_58%,#050816_100%)] dark:text-slate-100 pt-32 sm:pt-40 pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 sm:mb-12 border-b border-slate-200 dark:border-slate-800 pb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4 md:mb-0 gradient-text pb-2">
            {lang === 'UZ' ? 'Yangiliklar' : lang === 'RU' ? 'Новости' : 'News'}
          </h1>
          <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400">
            {lang === 'UZ' ? 'Markaz hayoti' : lang === 'RU' ? 'Жизнь центра' : 'Center Life'}
          </p>
        </div>

        {/* Search / Filter */}
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800 text-slate-400 focus-within:text-blue-600 transition-colors">
          <Search size={20} />
          <input 
            type="text" 
            placeholder={lang === 'UZ' ? 'YANGILIKLARNI QIDIRISH' : lang === 'RU' ? 'ПОИСК НОВОСТЕЙ' : 'SEARCH NEWS'} 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 w-full uppercase tracking-widest text-sm font-medium"
          />
        </div>

        <div className="mb-12">
          <span className="bg-blue-600 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-full shadow-lg shadow-blue-600/30">
            {lang === 'UZ' ? 'Barcha yangiliklar' : lang === 'RU' ? 'Все новости' : 'All news'}
          </span>
        </div>

        {/* News List */}
        <div className="flex flex-col">
          {loading ? (
            <div className="py-12 text-center text-slate-500 font-medium">
              {lang === 'UZ' ? 'Yuklanmoqda...' : lang === 'RU' ? 'Загрузка...' : 'Loading...'}
            </div>
          ) : newsList.filter(news => news.title[lang].toLowerCase().includes(searchQuery.toLowerCase())).length === 0 ? (
            <div className="py-12 text-center text-slate-500 font-medium">
              {lang === 'UZ' ? 'Hech narsa topilmadi...' : lang === 'RU' ? 'Ничего не найдено...' : 'Nothing found...'}
            </div>
          ) : (
            newsList
              .filter(news => news.title[lang].toLowerCase().includes(searchQuery.toLowerCase()))
              .map((news, index) => (
                <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => navigate(`/news/${news.id}`)}
              className="group flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 py-8 sm:py-10 border-b border-slate-200 dark:border-slate-800 cursor-pointer relative"
            >
              {/* Date Block */}
              <div className="flex flex-col items-center justify-center shrink-0 w-16 sm:w-20 lg:w-24 border-r border-slate-200 dark:border-slate-800/50 pr-4 sm:pr-6 md:pr-0 md:border-r-0 md:pb-0">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                  {news.date.weekday[lang]}
                </span>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none my-1 text-slate-900 dark:text-white">
                  {news.date.day}
                </span>
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mt-1">
                  {news.date.month[lang]}
                </span>
              </div>

              {/* Image Block */}
              <div className="w-full md:w-[280px] lg:w-[320px] aspect-video overflow-hidden shrink-0 relative bg-slate-100 dark:bg-slate-900 rounded-2xl">
                <motion.img
                  src={news.image}
                  alt={news.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Block */}
              <div className="flex flex-col justify-center flex-1 pr-8">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-3 transition-colors text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {news.title[lang]}
                </h2>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed line-clamp-2 mb-6 font-medium">
                  {news.summary[lang]}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {news.categories.map(cat => (
                    <span 
                      key={cat} 
                      className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 text-[10px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-900/50"
                    >
                      {cat}
                    </span>
                  ))}
                  {getViews(news.id, news.views) > 0 && (
                    <span className="px-3 py-1 ml-auto rounded-full border border-transparent text-[10px] font-bold tracking-widest uppercase text-slate-400 flex items-center gap-1.5">
                      <Eye size={12} /> {getViews(news.id, news.views).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-8 right-0 text-blue-600 dark:text-blue-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2 hidden sm:block">
                <ArrowUpRight size={32} strokeWidth={2} />
              </div>
            </motion.div>
          )))}
        </div>

      </div>
    </div>
  );
}
