import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockNews } from '../data/mockNews';

export default function NewsList() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 dark:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.14),transparent_30%),linear-gradient(180deg,#030712_0%,#020617_58%,#050816_100%)] dark:text-slate-100 pt-24 sm:pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Navigation */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Bosh sahifaga qaytish
        </button>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 sm:mb-12 border-b border-slate-200 dark:border-slate-800 pb-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-4 md:mb-0 text-slate-900 dark:text-white">
            Yangiliklar
          </h1>
          <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400">
            Akademiya hayoti
          </p>
        </div>

        {/* Search / Filter (Visual only for now) */}
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800 text-slate-400">
          <Search size={20} />
          <input 
            type="text" 
            placeholder="YANGILIKLARNI QIDIRISH" 
            className="bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 w-full uppercase tracking-widest text-sm font-medium"
          />
        </div>

        <div className="mb-12">
          <span className="bg-blue-600 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-full shadow-lg shadow-blue-600/30">
            Barcha yangiliklar
          </span>
        </div>

        {/* News List */}
        <div className="flex flex-col">
          {mockNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => navigate(`/news/${news.id}`)}
              className="group flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 py-8 sm:py-10 border-b border-slate-200 dark:border-slate-800 cursor-pointer relative"
            >
              {/* Date Block */}
              <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-0 shrink-0 md:w-20 lg:w-24">
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                  {news.date.day} {news.date.month}
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mt-1 text-slate-900 dark:text-white">
                  {news.date.day}
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mt-1 hidden md:block">
                  {news.date.month}
                </span>
              </div>

              {/* Image Block */}
              <div className="w-full md:w-[280px] lg:w-[320px] aspect-video overflow-hidden shrink-0 relative bg-slate-100 dark:bg-slate-900 rounded-2xl">
                <motion.img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Block */}
              <div className="flex flex-col justify-center flex-1 pr-8">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-3 transition-colors text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {news.title}
                </h2>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed line-clamp-2 mb-6 font-medium">
                  {news.excerpt}
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
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-8 right-0 text-blue-600 dark:text-blue-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2 hidden sm:block">
                <ArrowUpRight size={32} strokeWidth={2} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
