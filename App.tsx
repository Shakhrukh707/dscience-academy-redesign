import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Banknote,
  Brain,
  Box,
  CheckCircle,
  ChevronRight,
  Clock,
  Cpu,
  CreditCard,
  Database,
  Flame,
  Gamepad2,
  Globe,
  GraduationCap,
  Layers,
  Laptop,
  Menu,
  Minus,
  Monitor,
  Palette,
  Plus,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Terminal,
  Trophy,
  UserCheck,
  Utensils,
  X,
  Zap,
} from 'lucide-react';
import { translations } from './translations';
import { Language } from './types';

type CourseId = 'ds' | 'anim' | '3d' | 'game' | 'vfx' | 'fx' | 'unreal' | 'c4d';

type CourseCard = {
  id: CourseId;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  featured?: boolean;
};

type TestimonialCard = {
  quote: string;
  name: string;
  track?: string;
  outcome?: string;
  role?: string;
  avatarClass?: string;
  featured?: boolean;
};

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
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

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const BrandIcon = ({ size = 'sm' }: { size?: 'sm' | 'lg' }) => {
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
      <div className={`${fallbackClass} bg-blue-600 flex items-center justify-center text-white font-black shrink-0`}>
        D
      </div>
    );
  }

  return (
    <img
      src={sources[sourceIndex]}
      alt="DScience logo"
      className={`${imageClass} object-contain object-left shrink-0`}
      onError={() => setSourceIndex(current => current + 1)}
    />
  );
};

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const words = ["O'rganing", 'Yarating', "O'sing"];
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex(current => {
        if (current >= words.length - 1) {
          window.clearInterval(interval);
          return current;
        }

        return current + 1;
      });
    }, 900);

    return () => window.clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    let frameId = 0;
    let timeoutId = 0;
    const duration = 2700;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      const nextProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        timeoutId = window.setTimeout(() => {
          onCompleteRef.current();
        }, 400);
        return;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#F8FAFC]"
      exit={{ opacity: 0, scale: 1.015, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_34%),linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_52%,#EFF6FF_100%)]" />
      <div className="absolute -top-24 right-[-10%] h-[320px] w-[320px] rounded-full bg-blue-200/30 blur-[90px] sm:h-[420px] sm:w-[420px]" />
      <div className="absolute -bottom-16 left-[-6%] h-[240px] w-[240px] rounded-full bg-sky-100/70 blur-[80px] sm:h-[320px] sm:w-[320px]" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="loader-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900/80 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-8 right-6 sm:right-8 md:bottom-12 md:right-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="loader-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-slate-900 tabular-nums leading-none">
          {Math.round(progress).toString().padStart(3, '0')}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-200/80 overflow-hidden">
        <motion.div
          className="h-full origin-left bg-[linear-gradient(90deg,#89AACC_0%,#4E85BF_100%)]"
          style={{ boxShadow: '0 0 12px rgba(78, 133, 191, 0.35)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.1, ease: 'linear' }}
        />
      </div>
    </motion.div>
  );
};

const AnimatedHeroBackground = () => {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#21346e]" />

      {!videoFailed && (
        <video
          className={`absolute inset-0 h-full w-full object-cover object-[64%_center] sm:object-center transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
          onError={() => {
            setVideoReady(false);
            setVideoFailed(true);
          }}
        >
          <source src="/hero-video2.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.56)_0%,rgba(248,250,252,0.34)_28%,rgba(248,250,252,0.54)_62%,rgba(248,250,252,0.88)_100%)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(248,250,252,0.5)_28%,rgba(248,250,252,0.66)_62%,rgba(248,250,252,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(147,197,253,0.18),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.96),rgba(255,255,255,0)_65%)]" />
      <div className="absolute inset-x-0 bottom-[-8%] h-[36%] opacity-45 [background-image:linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_top,rgba(0,0,0,0.86),transparent_80%)] [-webkit-mask-image:linear-gradient(to_top,rgba(0,0,0,0.86),transparent_80%)]" />
      <div className="absolute left-[8%] top-[20%] h-24 w-24 rounded-full bg-blue-200/40 blur-[55px] sm:h-32 sm:w-32 md:h-40 md:w-40" />
      <div className="absolute right-[10%] top-[42%] h-20 w-20 rounded-full bg-sky-200/40 blur-[48px] sm:h-28 sm:w-28 md:h-32 md:w-32" />
      <div className="absolute right-[-4%] top-[12%] h-[320px] w-[320px] rounded-full border border-blue-100/70 sm:h-[420px] sm:w-[420px] md:h-[540px] md:w-[540px]" />
      <div className="absolute right-[4%] top-[20%] h-[220px] w-[220px] rounded-full border border-sky-100/70 sm:h-[280px] sm:w-[280px] md:h-[360px] md:w-[360px]" />
    </div>
  );
};

const revealEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const revealViewport = { once: true, amount: 0.18 };

const AccordionItem = ({ question, answer, isOpen, onClick, badge }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void, badge?: string }) => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 sm:py-8 text-left focus:outline-none group"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pr-4">
          <span className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors dark:text-slate-100 dark:group-hover:text-blue-400">
            {question}
          </span>
          {badge && (
            <span className="shrink-0 inline-flex items-center rounded-full bg-blue-100/80 px-3 py-1 text-[10px] sm:text-xs font-black uppercase tracking-widest text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              {badge}
            </span>
          )}
        </div>
        <div className={`shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-slate-900/50 dark:text-slate-500 dark:group-hover:bg-slate-800'}`}>
          <Plus size={24} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pr-12 sm:pr-16 text-base sm:text-lg text-slate-500 leading-relaxed font-medium dark:text-slate-400">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Data Science kursida o'qish tartibi qanday?",
      answer: (
        <div className="space-y-4">
          <p>Data Science yo'nalishida ikki xil ta'lim shakli mavjud:</p>
          <ul className="space-y-3 ml-2">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-black mt-1 text-xl">•</span>
              <span><strong className="text-slate-700 dark:text-slate-300">Kvota asosida (160 ta o'rin):</strong> Davlat granti asosida mutlaqo bepul o'qish va maxsus imtiyozlarga ega bo'lish imkoniyati.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-black mt-1 text-xl">•</span>
              <span><strong className="text-slate-700 dark:text-slate-300">Kontrakt asosida:</strong> Kursda o'qishni xohlovchilar uchun sinovlarsiz, to'lov asosida ta'lim olish shakli.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "Kvota asosida qabul qilinish uchun qanday talablar bor?",
      badge: "Grant",
      answer: (
        <div className="space-y-6">
          <p>Kvota asosida 160 ta o'rindan biriga ega bo'lish uchun nomzodlar quyidagi barcha talablarga javob berishi lozim:</p>
          
          <div>
            <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3 dark:text-slate-200"><span className="text-xl">📚</span> Asosiy akademik talablar:</h4>
            <ul className="space-y-2 ml-7 list-disc marker:text-slate-300">
              <li>Davlat oliy ta’lim muassasalari talabasi bo'lishi;</li>
              <li>Joriy yil 2-bosqichni tugatib, 3-bosqichga o‘tgan bo'lishi;</li>
              <li>Akademik qarzdorligi bo‘lmasligi;</li>
              <li>Matematika va informatika fanlarini mukammal o‘zlashtirgan bo'lishi.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3 dark:text-slate-200"><span className="text-xl">💻</span> Texnik va til ko'nikmalari:</h4>
            <ul className="space-y-2 ml-7 list-disc marker:text-slate-300">
              <li>Ingliz tilini bilish darajasi (IELTS 5.5-6.5);</li>
              <li>Web, Android, IOS kabi dasturiy ta’minot yozish ko‘nikmalariga ega bo'lishi;</li>
              <li>IQ test natijasi yuqori bo'lishi;</li>
              <li>Xalqaro IT sertifikatga ega bo'lishi.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3 dark:text-slate-200"><span className="text-xl">🌟</span> Faollik va shaxsiy sifatlar:</h4>
            <ul className="space-y-2 ml-7 list-disc marker:text-slate-300">
              <li>OTM ijtimoiy hayotida faol ishtirok etuvchi (tavsiyanoma asosida);</li>
              <li>Ilmiy faolligi yuqori (maqola, darslik, dasturiy ta’minot, ixtiro egasi);</li>
              <li>Muloqotga kirisha oladigan va jamoa bilan ishlash qobiliyatiga ega bo'lishi;</li>
              <li>Izlanuvchan va tirishqoq (qo‘yilgan muammoni yechish uchun ilmiy yondashadigan va boshlangan ishni oxiriga yetkazadigan).</li>
            </ul>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-sm mt-4 dark:bg-slate-900/40 dark:border-slate-800/80">
            <span className="font-bold text-slate-700 dark:text-slate-300">Eslatma:</span> Kontrakt asosida o'qish uchun bu talablar shart emas.
          </div>
        </div>
      )
    },
    {
      question: "Kvota asosida o'qiydigan talabalarga qanday imtiyozlar beriladi?",
      badge: "Imtiyozlar",
      answer: (
        <div className="space-y-6">
          <p>Kvota doirasida qabul qilingan talabalar uchun quyidagi <strong className="text-blue-600 dark:text-blue-400">BONUS</strong> imkoniyatlar yaratilgan:</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-5 rounded-3xl border border-blue-100/50 bg-blue-50/50 transition-colors hover:bg-blue-50 dark:border-blue-900/30 dark:bg-blue-900/10 dark:hover:bg-blue-900/20">
              <div className="text-3xl mt-0.5">💰</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Stipendiya</h4>
                <p className="text-sm mt-1 text-slate-500 dark:text-slate-400">Har oy 1 320 000 so'm rag'batlantirish</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-3xl border border-blue-100/50 bg-blue-50/50 transition-colors hover:bg-blue-50 dark:border-blue-900/30 dark:bg-blue-900/10 dark:hover:bg-blue-900/20">
              <div className="text-3xl mt-0.5">💻</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Noutbuk</h4>
                <p className="text-sm mt-1 text-slate-500 dark:text-slate-400">O'qish davomida foydalanish uchun zamonaviy noutbuk</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-3xl border border-blue-100/50 bg-blue-50/50 transition-colors hover:bg-blue-50 dark:border-blue-900/30 dark:bg-blue-900/10 dark:hover:bg-blue-900/20">
              <div className="text-3xl mt-0.5">🍲</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Issiq ovqat</h4>
                <p className="text-sm mt-1 text-slate-500 dark:text-slate-400">Har kuni bir mahallik bepul issiq tushlik</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-3xl border border-blue-100/50 bg-blue-50/50 transition-colors hover:bg-blue-50 dark:border-blue-900/30 dark:bg-blue-900/10 dark:hover:bg-blue-900/20">
              <div className="text-3xl mt-0.5">🎓</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100">Akademik mobillik</h4>
                <p className="text-sm mt-1 text-slate-500 dark:text-slate-400">Toshkentdagi yetakchi OTMlarda tajriba almashish</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-[#F8FAFC] dark:bg-[#030712]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={revealViewport}
          transition={{ duration: 0.75, ease: revealEase }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.95] dark:text-white">
            Ko'p beriladigan <span className="gradient-text">savollar</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.8, delay: 0.1, ease: revealEase }}
          className="mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              badge={faq.badge}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageVisible, setIsPageVisible] = useState(false);
  const [lang, setLang] = useState<Language>('UZ');
  const [activeCourseId, setActiveCourseId] = useState<CourseId | null>(null);
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [admissionType, setAdmissionType] = useState<'kvota' | 'kontrakt' | null>(null);
  const [showRequirements, setShowRequirements] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(2);
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isLoading ? 'hidden' : '';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLoading]);

  useEffect(() => {
    let timeoutId = 0;

    if (isLoading) {
      setIsPageVisible(false);
    } else {
      timeoutId = window.setTimeout(() => {
        setIsPageVisible(true);
      }, 140);
    }

    return () => window.clearTimeout(timeoutId);
  }, [isLoading]);

  const programs = useMemo<CourseCard[]>(
    () => [
      {
        id: 'ds',
        title: t.courses.ds,
        desc: t.courses.dsDesc,
        icon: <Database size={48} />,
        color: 'from-blue-600 to-indigo-700',
        featured: true,
      },
      { id: 'anim', title: t.courses.da, desc: t.courses.daDesc, icon: <Palette size={32} />, color: 'from-purple-600 to-pink-600' },
      { id: '3d', title: t.courses.threeD, desc: t.courses.threeDDesc, icon: <Box size={32} />, color: 'from-emerald-600 to-teal-700' },
      { id: 'game', title: t.courses.ue, desc: t.courses.ueDesc, icon: <Gamepad2 size={32} />, color: 'from-orange-600 to-red-700' },
      { id: 'vfx', title: t.courses.vfx, desc: t.courses.vfxDesc, icon: <Monitor size={32} />, color: 'from-slate-700 to-slate-900' },
      { id: 'fx', title: t.courses.fx, desc: t.courses.fxDesc, icon: <Zap size={32} />, color: 'from-amber-500 to-orange-600' },
      { id: 'unreal', title: t.courses.unreal, desc: t.courses.unrealDesc, icon: <Terminal size={32} />, color: 'from-blue-500 to-cyan-600' },
      { id: 'c4d', title: t.courses.c4d, desc: t.courses.c4dDesc, icon: <Box size={32} />, color: 'from-rose-600 to-purple-700' },
    ],
    [t]
  );

  const activeCourse = activeCourseId ? programs.find(course => course.id === activeCourseId) : null;
  const activeCourseData = activeCourseId ? t.courses.details[activeCourseId] : null;

  const reviewContent = useMemo(() => {
    if (lang === 'RU') {
      return {
        intro: 'Истории студентов, которые пришли за навыками и вышли с сильным портфолио, уверенностью и понятной траекторией роста.',
        highlights: ['Практика с первого месяца', 'Портфолио под реальные задачи', 'Поддержка менторов'],
        testimonials: [
          {
            quote: 'Я пришёл без сильной базы, а через несколько месяцев уже делал собственные аналитические кейсы и уверенно презентовал их.',
            name: 'Shahzod Tursunov',
            track: 'Data Science',
            outcome: 'Портфолио из реальных кейсов',
          },
          {
            quote: 'Больше всего понравилось, что нас не учили абстрактно. Каждая тема сразу закреплялась практикой и конкретным результатом.',
            name: 'Madina Iskandarova',
            track: '3D Modeling',
            outcome: 'Первый коммерческий шоурил',
          },
          {
            quote: 'У академии очень сильная атмосфера. Чувствуешь, что тебя ведут к профессии, а не просто дают набор уроков.',
            name: 'Jasur Karimov',
            track: 'GameDev',
            outcome: 'Чёткий карьерный вектор',
          },
        ] satisfies TestimonialCard[],
      };
    }

    if (lang === 'EN') {
      return {
        intro: 'Stories from students who came for skills and left with stronger portfolios, clearer direction, and real confidence in their craft.',
        highlights: ['Hands-on from month one', 'Portfolio for real-world work', 'Mentor support throughout'],
        testimonials: [
          {
            quote: 'I joined with a weak base, but in a few months I was already building my own analytics cases and presenting them with confidence.',
            name: 'Shahzod Tursunov',
            track: 'Data Science',
            outcome: 'Portfolio built on real cases',
          },
          {
            quote: 'What I loved most was the practical rhythm. Every topic quickly turned into visible work instead of staying theoretical.',
            name: 'Madina Iskandarova',
            track: '3D Modeling',
            outcome: 'First commercial showreel',
          },
          {
            quote: 'The academy has a strong atmosphere. You feel guided toward a profession, not just pushed through a set of lessons.',
            name: 'Jasur Karimov',
            track: 'GameDev',
            outcome: 'Clear career direction',
          },
        ] satisfies TestimonialCard[],
      };
    }

    return {
      intro: 'Bu yerda o\'quvchilar nafaqat kursni tugatadi, balki kuchli portfolio, amaliy ko\'nikma va o\'z yo\'nalishiga ishonch bilan chiqadi.',
      highlights: ['Birinchi oydan amaliyot', 'Real portfolio yig\'ish', 'Mentorlar yordami'],
      testimonials: [
        {
          quote: 'Men kursga kelganimda bazam kuchli emas edi, lekin bir necha oy ichida o\'zimning data-case larimni tayyorlab, himoya qila oldim.',
          name: 'Shahzod Tursunov',
          track: 'Data Science',
          outcome: 'Real кейслардан portfolio',
        },
        {
          quote: 'Eng yoqqan tomoni nazariya havoda qolmadi. Har bir mavzu amaliy ish va ko\'rinadigan natija bilan mustahkamlandi.',
          name: 'Madina Iskandarova',
          track: '3D Modeling',
          outcome: 'Birinchi tijoriy showreel',
        },
        {
          quote: 'Akademiyada atmosfera juda kuchli. Oddiy dars emas, seni kasbga olib kirayotganini sezib turasan.',
          name: 'Jasur Karimov',
          track: 'GameDev',
          outcome: 'Aniq karyera yo\'nalishi',
        },
      ] satisfies TestimonialCard[],
    };
  }, [lang]);

  const testimonialsContent = useMemo(() => {
    if (lang === 'RU') {
      return {
        titleLead: 'Отзывы',
        titleAccent: 'учеников',
        subtitle: 'Короткие истории студентов, которые пришли за навыками и начали уверенно строить свой путь в индустрии.',
        items: [
          {
            quote: 'Курс помог мне собрать сильную базу и начать работать с реальными data-кейсами уже во время обучения.',
            name: 'Azizbek Rahmonov',
            role: 'Направление Data Science',
            avatarClass: 'from-sky-400 via-cyan-300 to-blue-500',
          },
          {
            quote: 'Самое сильное в академии, что каждая тема сразу превращалась в практику и ощутимый результат в портфолио.',
            name: 'Madina Yoqubova',
            role: 'Направление Motion Design',
            avatarClass: 'from-rose-200 via-pink-200 to-orange-200',
          },
          {
            quote: 'Здесь чувствуешь не просто уроки, а настоящую среду, где тебя ведут к профессии и сильному результату.',
            name: 'Javohir Hasanov',
            role: 'Направление GameDev',
            avatarClass: 'from-stone-200 via-zinc-100 to-neutral-200',
          },
          {
            quote: 'Менторы всегда на связи и помогают разобраться даже в самых сложных концепциях машинного обучения.',
            name: 'Dildora Alimova',
            role: 'Направление Data Science',
            avatarClass: 'from-violet-400 via-purple-300 to-indigo-500',
          },
          {
            quote: 'Курс Unreal Engine перевернул мое представление о создании игр. Теперь я уверенно разрабатываю собственные проекты.',
            name: 'Timur Abdullaev',
            role: 'Направление GameDev',
            avatarClass: 'from-emerald-400 via-teal-300 to-green-500',
          },
        ] satisfies TestimonialCard[],
      };
    }

    if (lang === 'EN') {
      return {
        titleLead: 'Student',
        titleAccent: 'Testimonials',
        subtitle: 'Short stories from students who came for skills and left with stronger portfolios, clearer direction, and real confidence.',
        items: [
          {
            quote: 'The course gave me a strong base and helped me start working on real data cases while I was still studying.',
            name: 'Azizbek Rahmonov',
            role: 'Data Science Track',
            avatarClass: 'from-sky-400 via-cyan-300 to-blue-500',
          },
          {
            quote: 'What I loved most was the practical rhythm. Every topic quickly turned into visible work and a stronger portfolio.',
            name: 'Madina Yoqubova',
            role: 'Motion Design Track',
            avatarClass: 'from-rose-200 via-pink-200 to-orange-200',
          },
          {
            quote: 'It feels like a real professional environment where you are guided toward a career, not just a set of lessons.',
            name: 'Javohir Hasanov',
            role: 'GameDev Track',
            avatarClass: 'from-stone-200 via-zinc-100 to-neutral-200',
          },
          {
            quote: 'The mentors are always available and help break down even the most complex machine learning concepts.',
            name: 'Dildora Alimova',
            role: 'Data Science Track',
            avatarClass: 'from-violet-400 via-purple-300 to-indigo-500',
          },
          {
            quote: 'The Unreal Engine course changed how I view game creation. Now I confidently build my own projects.',
            name: 'Timur Abdullaev',
            role: 'GameDev Track',
            avatarClass: 'from-emerald-400 via-teal-300 to-green-500',
          },
        ] satisfies TestimonialCard[],
      };
    }

    return {
      titleLead: "O'quvchilar",
      titleAccent: 'fikri',
      subtitle: "Bu yerda o'quvchilar nafaqat kursni tugatadi, balki amaliy ko'nikma, kuchli portfolio va o'z yo'nalishiga ishonch bilan chiqadi.",
      items: [
        {
          quote: "Kurs menga kuchli baza berdi va o'qishning o'zidayoq real data-case lar bilan ishlashni boshlashimga yordam berdi.",
          name: 'Azizbek Rahmonov',
          role: "Data Science yo'nalishi",
          avatarClass: 'from-sky-400 via-cyan-300 to-blue-500',
        },
        {
          quote: "Eng yoqqan tomoni shuki, har bir mavzu darrov amaliy ishga aylanib, portfolio uchun sezilarli natija berdi.",
          name: 'Madina Yoqubova',
          role: "Motion Design yo'nalishi",
          avatarClass: 'from-rose-200 via-pink-200 to-orange-200',
        },
        {
          quote: "Akademiyada oddiy dars emas, haqiqiy professional muhit bor. Senga kasb tomon aniq yo'l ko'rsatib boriladi.",
          name: 'Javohir Hasanov',
          role: "GameDev yo'nalishi",
          avatarClass: 'from-stone-200 via-zinc-100 to-neutral-200',
        },
        {
          quote: "Mentorlar doim aloqada va eng qiyin mashinani o'rganish tushunchalarini ham oson tushuntirib berishadi.",
          name: 'Dildora Alimova',
          role: "Data Science yo'nalishi",
          avatarClass: 'from-violet-400 via-purple-300 to-indigo-500',
        },
        {
          quote: "Unreal Engine kursi o'yin yaratishga bo'lgan qarashimni o'zgartirdi. Endi men o'z proyektlarimni ishonch bilan yaratyapman.",
          name: 'Timur Abdullaev',
          role: "GameDev yo'nalishi",
          avatarClass: 'from-emerald-400 via-teal-300 to-green-500',
        },
      ] satisfies TestimonialCard[],
    };
  }, [lang]);

  const partnerLogos = [
    {
      src: '/partners/1.%20RQT.svg',
      alt: 'RQT',
    },
    {
      src: '/partners/2.%20edu%2B.svg',
      alt: 'Edu+',
    },
    {
      src: '/partners/3.%20fond%2B.svg',
      alt: 'Fond+',
    },
    {
      src: '/partners/4.%20iut%20logo.svg',
      alt: 'IUT',
    },
    {
      src: '/partners/5.%20Science%20Innovation.svg',
      alt: 'Science Innovation',
    },
    {
      src: '/partners/6.%20MAAB%20innovation%20logo.svg',
      alt: 'MAAB Innovation',
    },
  ];

  const whyUsCards = useMemo(
    () => [
      {
        title: t.why.practice,
        description: t.why.practiceDesc,
        icon: <Rocket size={30} />,
      },
      {
        title: t.why.mentors,
        description: t.why.mentorsDesc,
        icon: <Brain size={30} />,
      },
      {
        title: t.why.infrastructure,
        description: t.why.infrastructureDesc,
        icon: <Monitor size={30} />,
      },
      {
        title: t.why.career,
        description: t.why.careerDesc,
        icon: <Target size={30} />,
      },
    ],
    [t]
  );

  const heroTitleLines = useMemo(() => {
    if (lang === 'UZ') {
      const [first, ...rest] = t.hero.title.split(" mutaxassisi ");
      return rest.length ? [first, `mutaxassisi ${rest.join(" mutaxassisi ")}`] : [t.hero.title];
    }

    if (lang === 'EN') {
      const [first, ...rest] = t.hero.title.split(' in ');
      return rest.length ? [first, `in ${rest.join(' in ')}`] : [t.hero.title];
    }

    const parts = t.hero.title.split(' Data Science');
    return parts.length > 1 ? [parts[0].trim(), `Data Science${parts.slice(1).join(' Data Science')}`] : [t.hero.title];
  }, [lang, t.hero.title]);

  const navItems = [
    { label: t.header.courses, onClick: () => scrollTo('courses') },
    { label: 'E-campus', onClick: () => window.open('https://dscience.uz/e-campus', '_blank') },
    { label: 'Platforma', onClick: () => window.open('https://lmsf.dscience.uz/login', '_blank') },
    { label: 'Kutubxona', onClick: () => window.open('https://dscience.uz/login', '_blank') },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div
        className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-600 dark:bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.14),transparent_30%),linear-gradient(180deg,#030712_0%,#020617_58%,#050816_100%)] dark:text-slate-100 dark:selection:bg-blue-500/30 dark:selection:text-blue-100"
        style={{
          opacity: isPageVisible ? 1 : 0,
          filter: isPageVisible ? 'none' : 'blur(14px)',
          transform: isPageVisible ? 'none' : 'translateY(24px) scale(0.985)',
          transition:
            'opacity 0.8s ease-out, filter 0.95s ease-out, transform 0.95s cubic-bezier(0.22, 1, 0.36, 1)',
          willChange: isPageVisible ? 'auto' : 'opacity, filter, transform',
        }}
      >
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 sm:py-4 glass border-none' : 'py-4 sm:py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-3">
          <button className="flex items-center gap-3 group shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
                className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors whitespace-nowrap dark:text-slate-300/90 dark:hover:text-blue-200"
              >
                {item.label}
              </button>
            ))}
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
                      : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <Button className="py-3 px-4 sm:px-6 text-[10px] sm:text-xs uppercase tracking-widest !rounded-xl whitespace-nowrap" onClick={() => scrollTo('apply')}>
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

              <div className="grid gap-3">
                {navItems.map(item => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      item.onClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-slate-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <Button className="w-full mt-4 py-4 text-xs sm:text-sm uppercase tracking-[0.2em] !rounded-2xl" onClick={() => { scrollTo('apply'); setMobileMenuOpen(false); }}>
                {t.header.apply}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="relative min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 overflow-hidden">
          <AnimatedHeroBackground />

          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-white/80 bg-white/70 backdrop-blur-md text-blue-600 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.16em] sm:tracking-[0.2em] mb-8 sm:mb-10 shadow-[0_20px_50px_-30px_rgba(37,99,235,0.35)] dark:border-blue-300/10 dark:bg-slate-950/45 dark:text-blue-100 dark:shadow-[0_24px_60px_-34px_rgba(37,99,235,0.72)]"
            >
              <Sparkles size={14} />
              Tayyorlov o'quv kurslari
            </motion.div>

            <h1 className="text-[2.45rem] sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.96] sm:leading-[0.92] mb-8 sm:mb-12 text-slate-900 dark:text-white">
              {heroTitleLines.map((line, lineIndex) => (
                <span key={lineIndex} className="block py-[0.12em] sm:py-[0.14em]">
                  <motion.span
                    initial={{ opacity: 0, y: 42, filter: 'blur(12px)' }}
                    animate={isPageVisible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 42, filter: 'blur(12px)' }}
                    transition={{ duration: 0.85, delay: 0.28 + lineIndex * 0.18, ease: revealEase }}
                    className="block will-change-transform"
                  >
                    {line.split(' ').map((word, wordIndex) => (
                      <span key={`${lineIndex}-${wordIndex}`} className={word.match(/Data|Science|IT/) ? 'gradient-text' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
              animate={isPageVisible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 18, filter: 'blur(8px)' }}
              transition={{ duration: 0.78, delay: 0.7, ease: revealEase }}
              className="text-slate-500 text-[11px] sm:text-lg md:text-xl lg:text-[1.35rem] max-w-none mx-auto mb-10 sm:mb-16 font-medium leading-relaxed whitespace-normal lg:whitespace-nowrap dark:text-slate-300"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6"
            >
              <Button className="w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl !rounded-3xl shadow-2xl shadow-blue-600/30" onClick={() => scrollTo('apply')}>
                {t.hero.cta} <ChevronRight size={24} />
              </Button>

              <Button variant="outline" className="w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl !rounded-3xl" onClick={() => scrollTo('courses')}>
                {t.header.courses}
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="courses" className="py-20 sm:py-24 md:py-32 bg-[#F8FAFC] dark:bg-[linear-gradient(180deg,#020617_0%,#050816_100%)]">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={revealViewport}
              transition={{ duration: 0.75, ease: revealEase }}
              className="max-w-3xl mb-14 sm:mb-20 md:mb-24"
            >
              <motion.h2
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={revealViewport}
                transition={{ duration: 0.7, ease: revealEase }}
                className="text-4xl sm:text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-6 sm:mb-8 dark:text-white"
              >
                {t.courses.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{ duration: 0.7, delay: 0.06, ease: revealEase }}
                className="text-slate-400 text-base sm:text-xl md:text-2xl font-medium leading-relaxed dark:text-slate-400"
              >
                Har bir yo'nalish bozor talablariga mos ravishda noldan professional darajagacha ishlab chiqilgan.
              </motion.p>
            </motion.div>

            <LayoutGroup>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-8">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.id}
                    layoutId={`card-${program.id}`}
                    initial={{ opacity: 0, y: 44, filter: 'blur(12px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.8, delay: index * 0.06, ease: revealEase }}
                    whileHover={{ y: -10, scale: 1.01 }}
                    onClick={() => {
                      if (program.id === 'ds') {
                        setShowPricingModal(true);
                      } else {
                        setActiveCourseId(program.id);
                      }
                    }}
                    className={`p-7 sm:p-10 md:p-14 rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[4rem] flex flex-col justify-between min-h-[360px] sm:min-h-[420px] md:min-h-[500px] cursor-pointer transition-all relative overflow-hidden group ${
                      program.featured
                        ? 'md:col-span-8 bg-blue-600 text-white shadow-3xl shadow-blue-600/30 dark:bg-[linear-gradient(135deg,#2563EB_0%,#1D4ED8_40%,#312E81_100%)] dark:shadow-[0_34px_90px_-34px_rgba(37,99,235,0.65)]'
                        : 'md:col-span-4 bg-white border border-slate-100 shadow-2xl shadow-slate-200/40 hover:border-blue-200 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.98))] dark:border-slate-800/90 dark:shadow-[0_30px_90px_-40px_rgba(0,0,0,0.75)] dark:hover:border-blue-400/35'
                    }`}
                  >
                    {program.featured && (
                      <div className="absolute top-0 right-0 p-8 sm:p-12 md:p-16 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                        <Database size={180} className="sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px]" />
                      </div>
                    )}

                    <div className="relative z-10">
                      <motion.div
                        layoutId={`icon-${program.id}`}
                        className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-[1.6rem] sm:rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center mb-8 sm:mb-10 md:mb-14 ${
                          program.featured
                            ? 'bg-white text-blue-600 shadow-3xl shadow-white/20'
                            : 'bg-slate-50 text-blue-600 border border-slate-100 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 dark:bg-slate-950/85 dark:border-white/5 dark:text-blue-300'
                        }`}
                      >
                        {program.icon}
                      </motion.div>

                      {program.featured && (
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.28em] sm:tracking-[0.4em] text-blue-100 mb-4 sm:mb-6 block">
                          {t.courses.flagshipBadge}
                        </span>
                      )}

                      <motion.h3
                        layoutId={`title-${program.id}`}
                        className={`font-black mb-8 leading-none ${
                          program.featured ? 'text-4xl sm:text-5xl md:text-8xl tracking-tighter' : 'text-2xl sm:text-3xl md:text-4xl tracking-tight'
                        }`}
                      >
                        {program.title}
                      </motion.h3>

                      <p
                        className={`text-base sm:text-lg md:text-xl leading-relaxed font-medium ${
                          program.featured ? 'text-blue-50 max-w-lg' : 'text-slate-400 dark:text-slate-400'
                        }`}
                      >
                        {program.desc}
                      </p>
                    </div>

                    <div className="relative z-10 pt-8 sm:pt-10 md:pt-14 flex items-center justify-between gap-4">
                      <Button
                        variant={program.featured ? 'secondary' : 'outline'}
                        className={`py-3 sm:py-4 px-6 sm:px-10 text-xs sm:text-sm !rounded-2xl ${
                          program.featured ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-2xl dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100' : ''
                        }`}
                      >
                        {t.courses.more} <ArrowUpRight size={18} />
                      </Button>

                      <div
                        className={`${
                          program.featured ? 'text-blue-200 dark:text-blue-100' : 'text-slate-200 dark:text-slate-700'
                        } group-hover:text-blue-600 dark:group-hover:text-blue-300 group-hover:translate-x-2 transition-all duration-500 shrink-0`}
                      >
                        <ChevronRight size={36} className="sm:w-12 sm:h-12" strokeWidth={3} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </LayoutGroup>
          </div>
        </section>

        <section id="why" className="pb-20 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={revealViewport}
              transition={{ duration: 0.75, ease: revealEase }}
              className="max-w-3xl mb-12 sm:mb-16 md:mb-20"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-600 shadow-[0_18px_40px_-28px_rgba(37,99,235,0.26)]">
                <Sparkles size={14} />
                {t.header.why}
              </div>

              <h2 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.95]">
                {t.why.title}
              </h2>

              <p className="mt-5 text-slate-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                {t.why.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-7">
              {whyUsCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 32, filter: 'blur(12px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{ duration: 0.78, delay: index * 0.07, ease: revealEase }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group rounded-[2.2rem] border border-slate-100 bg-white p-7 sm:p-8 md:p-9 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.18)] transition-all duration-500 hover:border-blue-200 hover:shadow-[0_30px_75px_-40px_rgba(37,99,235,0.18)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-slate-100 bg-slate-50 text-blue-600 shadow-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
                    {card.icon}
                  </div>

                  <h3 className="mt-7 text-2xl sm:text-[1.75rem] font-black tracking-tight text-slate-900 leading-tight">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
                    {card.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-10 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={revealViewport}
              transition={{ duration: 0.75, ease: revealEase }}
              className="px-0 py-4 sm:py-6"
            >
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-500">
                  <Sparkles size={14} className="text-blue-600" />
                  Hamkorlarimiz
                </div>

                <p className="mt-5 text-slate-400 text-sm sm:text-base md:text-lg font-medium">
                  Biz bilan birga ishlayotgan va ta'lim yo'nalishlarini qo'llab-quvvatlayotgan tashkilotlar
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6 lg:gap-6">
                {partnerLogos.map((logo, index) => (
                  <motion.div
                    key={logo.alt}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={revealViewport}
                    transition={{ duration: 0.65, delay: index * 0.06, ease: revealEase }}
                    className="group flex min-h-[104px] sm:min-h-[120px] items-center justify-center rounded-[1.8rem] border border-slate-100 bg-white px-5 py-4 shadow-[0_24px_60px_-46px_rgba(15,23,42,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_28px_65px_-42px_rgba(37,99,235,0.18)]"
                  >
                    <div className="flex h-[4.4rem] sm:h-[4.9rem] w-full max-w-[164px] items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-full w-full object-contain opacity-85 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="apply" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 32, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={revealViewport}
              transition={{ duration: 0.85, ease: revealEase }}
              className="text-center mb-14 sm:mb-16 md:mb-20"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-600 shadow-[0_18px_40px_-28px_rgba(37,99,235,0.4)]">
                <Sparkles size={14} />
                Fikrlar
              </div>

              <h2 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.95]">
                {testimonialsContent.titleLead}{' '}
                <span className="gradient-text">{testimonialsContent.titleAccent}</span>
              </h2>

              <p className="mt-5 max-w-3xl mx-auto text-slate-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                {testimonialsContent.subtitle}
              </p>
            </motion.div>

            <div className="relative w-full max-w-[100vw] overflow-hidden pt-20 pb-16">
              <div className="mx-auto w-[85vw] sm:w-[400px] md:w-[460px]">
                <div 
                  className="flex items-stretch transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonialsContent.items.map((item, index) => {
                    const isActive = index === activeTestimonial;
                    return (
                      <div key={`${item.name}-${index}`} className="w-full shrink-0 px-3 transition-transform duration-700">
                        <article 
                          className={`relative h-full rounded-[2.2rem] px-6 pb-8 pt-20 sm:px-8 sm:pb-10 sm:pt-24 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_30px_80px_-38px_rgba(15,23,42,0.15)] ${
                            isActive 
                              ? 'bg-[linear-gradient(180deg,#2563EB_0%,#356DFF_100%)] text-white shadow-[0_30px_80px_-38px_rgba(37,99,235,0.5)] scale-100' 
                              : 'bg-white border border-slate-100 text-slate-900 scale-90 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.98))] dark:border-slate-800'
                          }`}
                        >
                          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                            <div className={`flex h-28 w-28 items-center justify-center rounded-full border transition-colors duration-700 sm:h-32 sm:w-32 ${isActive ? 'border-blue-200/50 bg-white shadow-[0_20px_45px_-28px_rgba(15,23,42,0.35)]' : 'border-blue-100 bg-white shadow-[0_20px_45px_-28px_rgba(15,23,42,0.2)] dark:border-slate-700 dark:bg-slate-900'}`}>
                              <div className={`flex h-[82%] w-[82%] items-center justify-center rounded-full bg-gradient-to-br ${item.avatarClass} text-slate-900 text-2xl sm:text-3xl font-black tracking-tight transition-all duration-700`}>
                                {item.name.split(' ').map(part => part[0]).join('').slice(0, 2)}
                              </div>
                            </div>
                          </div>

                          <div className={`flex items-center justify-center gap-1 transition-colors duration-700 ${isActive ? 'text-yellow-400' : 'text-blue-600 dark:text-blue-500'}`}>
                            {Array.from({ length: 5 }).map((_, starIndex) => (
                              <Star key={starIndex} size={20} fill="currentColor" />
                            ))}
                          </div>

                          <h3 className={`mt-6 text-2xl sm:text-[2rem] font-black tracking-tight transition-colors duration-700 ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                            {item.name}
                          </h3>

                          <p className={`mt-2 text-sm sm:text-base font-medium transition-colors duration-700 ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                            {item.role}
                          </p>

                          <div className={`mt-5 text-6xl leading-none font-black transition-colors duration-700 ${isActive ? 'text-white/95' : 'text-blue-600 dark:text-blue-500'}`}>
                            “
                          </div>

                          <p className={`mt-3 text-sm sm:text-base leading-8 font-medium transition-colors duration-700 ${isActive ? 'text-white/85' : 'text-slate-500 dark:text-slate-400'}`}>
                            {item.quote}
                          </p>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-12 flex items-center justify-center gap-6">
                <button 
                  onClick={() => setActiveTestimonial(Math.max(0, activeTestimonial - 1))}
                  disabled={activeTestimonial === 0}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                >
                  <ChevronRight size={24} className="rotate-180" />
                </button>
                <div className="flex gap-2.5">
                  {testimonialsContent.items.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-2.5 rounded-full transition-all duration-500 ${idx === activeTestimonial ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300 dark:bg-slate-700'}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => setActiveTestimonial(Math.min(testimonialsContent.items.length - 1, activeTestimonial + 1))}
                  disabled={activeTestimonial === testimonialsContent.items.length - 1}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-white dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <FaqSection />
      </main>

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
            © 2026 Tayyorlov o‘quv kurslari markazi. Barcha huquqlar himoyalangan.
          </motion.div>
        </div>
      </motion.footer>

      <AnimatePresence>
        {activeCourse && activeCourseData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4 md:p-8"
            onClick={() => { setActiveCourseId(null); setAdmissionType(null); }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              className="bg-white rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] w-full max-w-5xl max-h-[90vh] overflow-hidden relative shadow-3xl flex flex-col dark:bg-[linear-gradient(180deg,#0B1120_0%,#020617_100%)] dark:border dark:border-slate-800/90"
              onClick={e => e.stopPropagation()}
            >
              <div className={`p-6 sm:p-8 md:p-12 bg-gradient-to-br ${activeCourse.color} text-white relative`}>
                <button onClick={() => { setActiveCourseId(null); setAdmissionType(null); }} className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 p-2.5 sm:p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all">
                  <X size={24} />
                </button>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-6 md:gap-8 pr-10 sm:pr-12 md:pr-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-3xl flex items-center justify-center shrink-0">
                    {activeCourse.icon}
                  </div>

                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-3 sm:mb-4">{activeCourse.title}</h2>
                    <p className="text-white/80 font-medium text-base sm:text-lg max-w-xl">{activeCourse.desc}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-12 dark:bg-slate-950">
                <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12">
                  <div className="lg:col-span-8 space-y-8 sm:space-y-10 md:space-y-12">
                    <div className="flex flex-wrap gap-4">
                      <div className="px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-3 dark:bg-slate-900 dark:border-slate-800">
                        <Clock className="text-blue-600" size={20} />
                        <span className="font-black text-slate-900 uppercase tracking-widest text-[10px] dark:text-white">{activeCourseData.duration}</span>
                      </div>
                      <div className="px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-3 dark:bg-slate-900 dark:border-slate-800">
                        <Award className="text-blue-600" size={20} />
                        <span className="font-black text-slate-900 uppercase tracking-widest text-[10px] dark:text-white">{activeCourseData.level}</span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-3 dark:text-white">
                        <Layers size={24} className="text-blue-600" /> {t.courses.modalLabels.program}
                      </h3>

                      <div className="grid gap-3">
                        {activeCourseData.program.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-white transition-all group dark:bg-slate-900 dark:hover:bg-slate-900 dark:hover:border-blue-400/30">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-black text-xs text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all dark:bg-slate-950 dark:border-slate-700">
                              {idx + 1}
                            </div>
                            <span className="font-bold text-sm sm:text-base text-slate-700 dark:text-slate-200">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-8 sm:space-y-10">
                    <div className="space-y-6">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-3 dark:text-white">
                        <Cpu size={24} className="text-blue-600" /> {t.courses.modalLabels.tools}
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {activeCourseData.tools.map((tool, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg font-bold text-[10px] text-slate-500 uppercase tracking-widest dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 bg-blue-50/50 border border-blue-100 rounded-[1.8rem] sm:rounded-3xl text-slate-900 shadow-sm relative overflow-hidden dark:bg-slate-900/50 dark:border-slate-800 dark:text-white">
                      <div className="absolute -top-6 -right-6 p-6 opacity-5 text-blue-600">
                        <Target size={120} />
                      </div>
                      <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4 dark:text-blue-400">{t.courses.modalLabels.result}</h3>
                      <p className="font-bold text-base sm:text-lg leading-relaxed relative z-10">{activeCourseData.result}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 md:p-12 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/60">
                <div className="flex items-center gap-4">
                  {activeCourseId === 'ds' && (
                    <button 
                      onClick={() => {
                        setActiveCourseId(null);
                        setAdmissionType(null);
                        setShowPricingModal(true);
                      }}
                      className="flex items-center gap-2 px-6 py-3.5 text-slate-500 hover:text-blue-600 font-bold transition-all bg-white border border-slate-200 rounded-2xl hover:border-blue-200 hover:bg-blue-50 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-800/80 dark:text-slate-400"
                    >
                      <ArrowLeft size={18} /> Orqaga
                    </button>
                  )}
                </div>

                <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-3">
                  <Button
                    onClick={() => {
                      if (activeCourseId === 'ds' && admissionType === 'kvota') {
                        window.location.href = 'https://dscience.uz/qabul/2026';
                        return;
                      }
                      setActiveCourseId(null);
                      setAdmissionType(null);
                      setTimeout(() => scrollTo('apply'), 250);
                    }}
                    className="w-full md:w-auto px-8 sm:px-16 py-5 sm:py-6 text-base sm:text-xl !rounded-3xl shadow-2xl shadow-blue-600/30"
                  >
                    {activeCourseId === 'ds' ? (admissionType === 'kvota' ? 'Kvotaga ariza topshirish' : 'Kontraktga yozilish') : t.courses.modalLabels.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showRequirements && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-slate-900/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-4"
            onClick={() => setShowRequirements(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 relative shadow-3xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setShowRequirements(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors bg-slate-100 dark:bg-slate-800 rounded-full">
                <X size={20} />
              </button>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-6 pr-8">Kvota talablari</h3>
              
              <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2"><span className="text-lg">📚</span> Asosiy akademik talablar:</h4>
                  <ul className="space-y-1 ml-7 text-sm text-slate-500 dark:text-slate-400 list-disc">
                    <li>Davlat OTM talabasi bo'lishi;</li>
                    <li>2-bosqichni tugatib, 3-bosqichga o‘tgan bo'lishi;</li>
                    <li>Akademik qarzdorligi bo‘lmasligi;</li>
                    <li>Matematika va informatikani mukammal bilishi.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2"><span className="text-lg">💻</span> Texnik va til ko'nikmalari:</h4>
                  <ul className="space-y-1 ml-7 text-sm text-slate-500 dark:text-slate-400 list-disc">
                    <li>IELTS 5.5-6.5;</li>
                    <li>Dasturiy ta’minot yozish ko‘nikmalari;</li>
                    <li>IQ test natijasi yuqori bo'lishi;</li>
                    <li>Xalqaro IT sertifikatga ega bo'lishi.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2"><span className="text-lg">🌟</span> Faollik va shaxsiy sifatlar:</h4>
                  <ul className="space-y-1 ml-7 text-sm text-slate-500 dark:text-slate-400 list-disc">
                    <li>OTM ijtimoiy hayotida faol ishtirok etuvchi;</li>
                    <li>Ilmiy faolligi yuqori;</li>
                    <li>Jamoa bilan ishlash qobiliyati;</li>
                    <li>Izlanuvchan va tirishqoq.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPricingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-slate-900/80 backdrop-blur-xl overflow-y-auto flex justify-center items-start sm:items-center p-4 sm:p-6"
            onClick={() => setShowPricingModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              className="w-full max-w-3xl relative my-12"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setShowPricingModal(false)} className="absolute -top-12 right-0 sm:-right-4 p-2 text-white hover:text-blue-300 transition-colors bg-white/10 hover:bg-white/20 rounded-full">
                <X size={24} />
              </button>

              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Ta'lim shaklini tanlang</h2>
                <p className="text-blue-200 text-lg sm:text-xl font-medium max-w-2xl mx-auto">Data Science kursida o'qish uchun o'zingizga mos ta'lim shaklini tanlang.</p>
              </div>

              <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 sm:gap-8 overflow-visible">
                <div className="relative group pt-10 max-w-[380px] w-full mx-auto md:mx-0 overflow-visible">
                  {/* Hover banner - slides up smoothly */}
                  <div className="absolute top-10 left-3 right-3 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-bold text-sm text-center py-2.5 rounded-t-2xl z-[1] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100">
                    Eng mashhur
                  </div>

                  <div className="bg-white rounded-3xl px-7 py-8 sm:px-8 sm:py-10 border border-gray-200 shadow-md relative z-[2] flex flex-col h-full dark:bg-slate-900 dark:border-slate-700 transition-all duration-500 ease-out group-hover:shadow-xl group-hover:border-blue-300 dark:group-hover:border-blue-500">
                    {/* Icon + Title */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2.5 mb-3">
                        <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">Kvota</h3>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Davlat granti doirasida bepul o'qish imkoniyati.</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-[2.75rem] sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Bepul</span>
                    </div>

                    {/* CTA Button - solid dark pill */}
                    <div className="mt-auto">
                      <button
                        onClick={() => {
                          setShowPricingModal(false);
                          setAdmissionType('kvota');
                          setActiveCourseId('ds');
                        }}
                        className="w-full py-3.5 rounded-full bg-[#1C2B7F] text-white font-bold text-base transition-all duration-300 hover:bg-[#263399] hover:shadow-lg hover:shadow-blue-900/30 mb-8"
                      >
                        Tanlash
                      </button>

                      {/* Divider */}
                      <div className="border-t border-gray-100 dark:border-slate-800 mb-6" />

                      {/* Features list */}
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Afzalliklari:</h4>
                      <ul className="space-y-3.5">
                        <li className="flex items-start gap-3">
                          <Globe className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400 text-sm">Akademik mobillik</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Banknote className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400 text-sm">Har oylik stipendiya – 1 320 000 so'm</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Utensils className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400 text-sm">Bepul issiq ovqat</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Laptop className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400 text-sm">Noutbuk bilan ta'minlash</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Kontrakt Card */}
                <div className="relative group pt-10 max-w-[380px] w-full mx-auto md:mx-0 overflow-visible">
                  {/* Hover banner - slides up smoothly */}
                  <div className="absolute top-10 left-3 right-3 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-bold text-sm text-center py-2.5 rounded-t-2xl z-[1] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 translate-y-0 group-hover:-translate-y-8 group-hover:opacity-100">
                    Barcha uchun
                  </div>

                  <div className="bg-white rounded-3xl px-7 py-8 sm:px-8 sm:py-10 border border-gray-200 shadow-md relative z-[2] flex flex-col h-full dark:bg-slate-900 dark:border-slate-700 transition-all duration-500 ease-out group-hover:shadow-xl group-hover:border-purple-300 dark:group-hover:border-purple-500">
                    {/* Icon + Title */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2.5 mb-3">
                        <Flame className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">Kontrakt</h3>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Barcha xohlovchilar uchun sinovlarsiz kafolatlangan ta'lim.</p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-[2.75rem] sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Bo'lib to'lash</span>
                    </div>

                    {/* CTA Button - outline pill */}
                    <div className="mt-auto">
                      <button
                        onClick={() => {
                          setShowPricingModal(false);
                          setAdmissionType('kontrakt');
                          setActiveCourseId('ds');
                        }}
                        className="w-full py-3.5 rounded-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-slate-900 dark:text-white font-bold text-base transition-all duration-300 hover:bg-[#1C2B7F] hover:border-[#1C2B7F] hover:text-white hover:shadow-lg hover:shadow-blue-900/30 mb-8"
                      >
                        Tanlash
                      </button>

                      {/* Divider */}
                      <div className="border-t border-gray-100 dark:border-slate-800 mb-6" />

                      {/* Features list */}
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4">Afzalliklari:</h4>
                      <ul className="space-y-3.5">
                        <li className="flex items-start gap-3">
                          <UserCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400 text-sm">Barcha xohlovchilar uchun ochiq</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400 text-sm">IELTS yoki IQ test talab qilinmaydi</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400 text-sm">O'qishga qabul kafolatlangan</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-400 text-sm">Moslashuvchan to'lov grafigi</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </>
  );
}
