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
    <div className="min-h-screen bg-[#F4F4F0] text-slate-900 pt-24 sm:pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Navigation */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-slate-800 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 sm:mb-12 border-b border-slate-300/60 pb-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase font-serif mb-4 md:mb-0">
            All Events
          </h1>
          <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-slate-600">
            Latest News & Updates
          </p>
        </div>

        {/* Search / Filter (Visual only for now) */}
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-slate-300/60 text-slate-400">
          <Search size={20} />
          <input 
            type="text" 
            placeholder="SEARCH FOR EVENT" 
            className="bg-transparent border-none outline-none text-slate-800 placeholder:text-slate-400 w-full uppercase tracking-widest text-sm font-medium"
          />
        </div>

        <div className="mb-12">
          <span className="bg-slate-900 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase">
            All Events
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
              className="group flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 py-8 sm:py-10 border-b border-slate-300/60 cursor-pointer relative"
            >
              {/* Date Block */}
              <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-0 shrink-0 md:w-20 lg:w-24">
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                  {news.date.day} {news.date.month}
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tighter leading-none mt-1">
                  {news.date.day}
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500 mt-1 hidden md:block">
                  {news.date.month}
                </span>
              </div>

              {/* Image Block */}
              <div className="w-full md:w-[280px] lg:w-[320px] aspect-video overflow-hidden shrink-0 relative bg-slate-200">
                <motion.img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Block */}
              <div className="flex flex-col justify-center flex-1 pr-8">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight mb-3 transition-colors group-hover:text-blue-600">
                  {news.title}
                </h2>
                
                <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-3 mb-6 font-medium">
                  {news.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {news.categories.map(cat => (
                    <span 
                      key={cat} 
                      className="px-3 py-1 border border-slate-300 text-[10px] font-bold tracking-widest uppercase text-slate-500"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-8 right-0 text-orange-500 opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 hidden sm:block">
                <ArrowUpRight size={32} strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
