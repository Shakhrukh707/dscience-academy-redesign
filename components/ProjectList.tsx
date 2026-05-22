import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockProjects } from '../data/mockProjects';
import { Language } from '../types';

export default function ProjectList({ lang }: { lang: Language }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedCourse, setSelectedCourse] = useState<string | 'all'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(mockProjects.map(p => p.year)));
    return ['all', ...uniqueYears.sort((a, b) => b - a)];
  }, []);

  const courses = useMemo(() => {
    const uniqueCourses = Array.from(new Set(mockProjects.map(p => p.course)));
    return ['all', ...uniqueCourses];
  }, []);

  const filteredProjects = useMemo(() => {
    return mockProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            project.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear = selectedYear === 'all' || project.year === selectedYear;
      const matchesCourse = selectedCourse === 'all' || project.course === selectedCourse;
      
      return matchesSearch && matchesYear && matchesCourse;
    });
  }, [searchQuery, selectedYear, selectedCourse]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 dark:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.14),transparent_30%),linear-gradient(180deg,#030712_0%,#020617_58%,#050816_100%)] dark:text-slate-100 pt-32 sm:pt-40 pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 sm:mb-12 border-b border-slate-200 dark:border-slate-800 pb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-4 md:mb-0 gradient-text pb-2">
            {lang === 'UZ' ? 'Talabalar Loyihalari' : lang === 'RU' ? 'Студенческие Проекты' : 'Student Projects'}
          </h1>
          <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400">
            {lang === 'UZ' ? 'Portfolio galereyasi' : lang === 'RU' ? 'Галерея портфолио' : 'Portfolio Gallery'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 flex items-center gap-3 pb-2 border-b border-slate-200 dark:border-slate-800 text-slate-400 focus-within:text-blue-600 transition-colors">
            <Search size={20} />
            <input 
              type="text" 
              placeholder={lang === 'UZ' ? 'LOYIHANI QIDIRISH (NOMI, TEG YOKI MUALLIF)' : lang === 'RU' ? 'ПОИСК ПРОЕКТА (НАЗВАНИЕ, ТЕГ ИЛИ АВТОР)' : 'SEARCH PROJECT (TITLE, TAG OR AUTHOR)'} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 w-full uppercase tracking-widest text-xs sm:text-sm font-medium"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-slate-400 shrink-0" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="bg-transparent border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2 text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 transition-colors w-full sm:w-auto"
              >
                {years.map(year => (
                  <option key={year} value={year} className="bg-white dark:bg-slate-900">
                    {year === 'all' ? (lang === 'UZ' ? 'Barcha yillar' : lang === 'RU' ? 'Все годы' : 'All years') : year}
                  </option>
                ))}
              </select>
            </div>

            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="bg-transparent border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2 text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300 outline-none focus:border-blue-500 transition-colors w-full sm:w-auto"
            >
              {courses.map(course => (
                <option key={course} value={course} className="bg-white dark:bg-slate-900">
                  {course === 'all' ? (lang === 'UZ' ? "Barcha yo'nalishlar" : lang === 'RU' ? 'Все направления' : 'All courses') : course}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center text-slate-500 font-medium text-lg">
            {lang === 'UZ' ? 'Hech qanday loyiha topilmadi...' : lang === 'RU' ? 'Проекты не найдены...' : 'No projects found...'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="group flex flex-col bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 relative"
                >
                  {/* Image */}
                  <div className="w-full aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm">
                        {project.course}
                      </span>
                      <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm">
                        {project.year}
                      </span>
                    </div>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h2 className="text-2xl font-black tracking-tight leading-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {project.title}
                      </h2>
                      <div className="text-blue-600 dark:text-blue-500 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 shrink-0">
                        <ArrowUpRight size={24} strokeWidth={2.5} />
                      </div>
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6 font-medium">
                      {project.excerpt[lang]}
                    </p>

                    <div className="mt-auto">
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                        {lang === 'UZ' ? 'Muallif: ' : lang === 'RU' ? 'Автор: ' : 'Author: '} 
                        <span className="text-slate-700 dark:text-slate-300">{project.author}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                          <span 
                            key={tag} 
                            className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-[10px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 text-[10px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
