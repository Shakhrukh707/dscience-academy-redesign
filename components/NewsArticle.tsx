import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Twitter, Instagram, Facebook } from 'lucide-react';
import { mockNews } from '../data/mockNews';

export default function NewsArticle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = mockNews.find(n => n.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-900">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Article Not Found</h1>
          <button 
            onClick={() => navigate('/news')}
            className="text-blue-600 font-bold uppercase tracking-widest text-sm hover:underline"
          >
            Return to News
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white text-slate-900 pt-24 sm:pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Navigation */}
        <button 
          onClick={() => navigate('/news')}
          className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-slate-800 transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to News
        </button>

        {/* Header */}
        <header className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
            {article.title}
          </h1>
          <div className="flex flex-col items-center justify-center gap-1 text-sm font-bold tracking-wide">
            <span className="text-slate-900">by {article.author}</span>
            <span className="text-slate-400 font-medium text-xs tracking-widest uppercase">
              {article.readTime} | {article.date.full}
            </span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] sm:aspect-[16/9] overflow-hidden bg-slate-100 mb-16 relative">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Social Share (Desktop left sidebar, mobile top row) */}
          <div className="flex md:flex-col gap-4 shrink-0 md:sticky top-32 h-fit">
            <button className="w-10 h-10 border border-slate-200 flex items-center justify-center rounded-sm hover:bg-slate-50 transition-colors">
              <Twitter size={16} />
            </button>
            <button className="w-10 h-10 border border-slate-200 flex items-center justify-center rounded-sm hover:bg-slate-50 transition-colors">
              <Instagram size={16} />
            </button>
            <button className="w-10 h-10 border border-slate-200 flex items-center justify-center rounded-sm hover:bg-slate-50 transition-colors">
              <Facebook size={16} />
            </button>
          </div>

          {/* Text Content */}
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none flex-1 font-serif leading-relaxed">
            <p className="text-xl sm:text-2xl font-bold leading-snug mb-8 font-sans">
              {article.excerpt}
            </p>

            {article.content.map((paragraph, idx) => (
              <React.Fragment key={idx}>
                <p className="mb-6 text-slate-700 text-lg">
                  {paragraph}
                </p>
                
                {/* Insert quote in the middle of content */}
                {idx === 0 && article.quote && (
                  <blockquote className="my-10 pl-6 border-l-4 border-slate-900 bg-slate-50 py-6 pr-6 italic font-bold text-xl sm:text-2xl text-slate-900 font-sans shadow-sm">
                    "{article.quote}"
                  </blockquote>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
