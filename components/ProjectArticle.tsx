import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, BookOpen, Calendar, Tag, Lightbulb, Target } from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { mockProjects } from '../data/mockProjects';
import { Language } from '../types';

export default function ProjectArticle({ lang }: { lang: Language }) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = mockProjects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] dark:bg-[#030712] text-slate-900 dark:text-white">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">
            {lang === 'UZ' ? 'Loyiha topilmadi' : lang === 'RU' ? 'Проект не найден' : 'Project not found'}
          </h1>
          <button 
            onClick={() => navigate('/projects')}
            className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm hover:underline"
          >
            {lang === 'UZ' ? 'Loyihalarga qaytish' : lang === 'RU' ? 'Вернуться к проектам' : 'Back to projects'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#F8FAFC] dark:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.14),transparent_30%),linear-gradient(180deg,#030712_0%,#020617_58%,#050816_100%)] text-slate-900 dark:text-slate-100 pt-32 sm:pt-40 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={18} strokeWidth={3} />
          {lang === 'UZ' ? 'Barcha loyihalar' : lang === 'RU' ? 'Все проекты' : 'All projects'}
        </button>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Poster/Image */}
          <div className="lg:w-1/2 shrink-0">
            <div className="sticky top-32 w-full bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden border border-slate-200 dark:border-slate-800 p-2 sm:p-4 cursor-zoom-in">
              <Zoom zoomMargin={20}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto rounded-[2rem] object-contain mx-auto"
                  style={{ maxHeight: 'calc(100vh - 200px)' }}
                />
              </Zoom>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-black tracking-widest uppercase border border-blue-200 dark:border-blue-800/50">
                {project.course}
              </span>
              <span className="px-4 py-1.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-black tracking-widest uppercase border border-slate-300 dark:border-slate-700">
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8 text-slate-900 dark:text-white">
              {project.title}
            </h1>
            
            <div className="grid grid-cols-2 gap-6 mb-12 py-8 border-y border-slate-200 dark:border-slate-800">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5 mb-1">
                  <User size={14} />
                  {lang === 'UZ' ? 'Muallif / Jamoa' : lang === 'RU' ? 'Автор / Команда' : 'Author / Team'}
                </span>
                <span className="text-lg font-black text-slate-800 dark:text-slate-200">{project.author}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5 mb-1">
                  <Calendar size={14} />
                  {lang === 'UZ' ? 'Yil' : lang === 'RU' ? 'Год' : 'Year'}
                </span>
                <span className="text-lg font-black text-slate-800 dark:text-slate-200">{project.year}</span>
              </div>
            </div>

            {/* Problem Section */}
            <div className="mb-10">
              <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-black mb-4 text-slate-900 dark:text-white">
                <div className="w-10 h-10 rounded-2xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                  <Target size={20} strokeWidth={2.5} />
                </div>
                {lang === 'UZ' ? 'Muammo' : lang === 'RU' ? 'Проблема' : 'Problem'}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium pl-14">
                {project.problem[lang]}
              </p>
            </div>

            {/* Solution Section */}
            <div className="mb-12">
              <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-black mb-4 text-slate-900 dark:text-white">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Lightbulb size={20} strokeWidth={2.5} />
                </div>
                {lang === 'UZ' ? 'Yechim' : lang === 'RU' ? 'Решение' : 'Solution'}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium pl-14">
                {project.solution[lang]}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="flex items-center gap-3 text-lg sm:text-xl font-black mb-6 text-slate-900 dark:text-white">
                <Tag size={20} className="text-blue-600 dark:text-blue-500" />
                {lang === 'UZ' ? 'Texnologiyalar va stek' : lang === 'RU' ? 'Технологии и стек' : 'Technologies & Stack'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold tracking-widest text-slate-700 dark:text-slate-200 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </article>
  );
}
