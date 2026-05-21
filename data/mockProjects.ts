import { Language } from '../types';

type LocalizedText = Record<Language, string>;

export interface ProjectItem {
  id: string;
  title: string;
  year: number;
  course: string;
  courseId: string;
  author: string;
  image: string;
  tags: string[];
  excerpt: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  technologies: string[];
}

export const mockProjects: ProjectItem[] = [
  {
    id: "medsmart-ai",
    title: "MedSmart AI",
    year: 2026,
    course: "Data Science",
    courseId: "ds",
    author: "Dziyodullayev",
    image: "/projects/2026/1-MedSmartAI.png",
    tags: ["Machine Learning", "NLP", "Healthcare"],
    excerpt: {
      UZ: "Tibbiyotda sun'iy intellekt orqali kasalliklarni oldindan bashorat qilish va proaktiv diagnostika tizimi.",
      RU: "Система проактивной диагностики и прогнозирования заболеваний в медицине с помощью искусственного интеллекта.",
      EN: "Proactive diagnostics and disease prediction system in medicine using artificial intelligence."
    },
    problem: {
      UZ: "An'anaviy tizimlar kasallikni faqat u boshlangandan keyingina aniqlaydi (aniqlik 65%). Bemor holatini doimiy monitoring qilish va xavflarni erta aniqlashning imkoni yo'q.",
      RU: "Традиционные системы выявляют болезнь только после её начала (точность 65%). Нет возможности постоянного мониторинга состояния пациента и раннего выявления рисков.",
      EN: "Traditional systems detect diseases only after they start (65% accuracy). Constant patient monitoring and early risk detection are impossible."
    },
    solution: {
      UZ: "Machine Learning (Random Forest, Apriori) algoritmlari yordamida yashirin kasalliklar xavfini ular paydo bo'lishidan oldin aniqlash. Shuningdek, NLP chatbot orqali bemor bilan aqlli muloqot qilib, dastlabki simptomlarni chuqur tahlil qilib, shifokorga yo'naltiruvchi AI yordamchi.",
      RU: "Использование алгоритмов машинного обучения (Random Forest, Apriori) для выявления риска скрытых заболеваний до их появления. Интеллектуальный AI-помощник общается с пациентом через NLP-чатбот, анализирует симптомы и направляет к врачу.",
      EN: "Using Machine Learning (Random Forest, Apriori) to detect hidden disease risks before they manifest. An AI assistant uses an NLP chatbot to interact with patients, analyze early symptoms, and route them to doctors."
    },
    technologies: ["Random Forest", "Apriori", "NLP", "Python", "Data Analysis"]
  },
  {
    id: "aegis-na",
    title: "Aegis NA",
    year: 2026,
    course: "Data Science",
    courseId: "ds",
    author: "Data Team",
    image: "/projects/2026/2.-Aegis-NA.png",
    tags: ["Cybersecurity", "Analytics"],
    excerpt: {
      UZ: "Ma'lumotlar xavfsizligini ta'minlash uchun sun'iy intellektga asoslangan tahlil tizimi.",
      RU: "Аналитическая система на базе ИИ для обеспечения безопасности данных.",
      EN: "AI-powered analytics system for ensuring data security."
    },
    problem: {
      UZ: "Tarmoq hujumlarini real vaqtda aniqlash va ularning oldini olish.",
      RU: "Обнаружение и предотвращение сетевых атак в реальном времени.",
      EN: "Detecting and preventing network attacks in real-time."
    },
    solution: {
      UZ: "Katta ma'lumotlarni tahlil qilish orqali anomaliyalarni topadigan AI algoritmlari.",
      RU: "Алгоритмы ИИ, находящие аномалии через анализ больших данных.",
      EN: "AI algorithms finding anomalies through big data analysis."
    },
    technologies: ["Machine Learning", "Network Analysis", "Python"]
  },
  {
    id: "puretalent",
    title: "PureTalent",
    year: 2026,
    course: "Data Science",
    courseId: "ds",
    author: "HR Analytics Team",
    image: "/projects/2026/3. PureTalent.png",
    tags: ["HR Tech", "Predictive AI"],
    excerpt: {
      UZ: "HR mutaxassislari uchun kadrlarni tanlash va baholashni avtomatlashtirish platformasi.",
      RU: "Платформа автоматизации подбора и оценки кадров для HR-специалистов.",
      EN: "Platform for automating candidate selection and evaluation for HR professionals."
    },
    problem: {
      UZ: "Katta miqdordagi rezyumelarni qo'lda ko'rib chiqish va mos nomzodlarni topish qiyinligi.",
      RU: "Сложность ручной обработки большого количества резюме и поиска подходящих кандидатов.",
      EN: "Difficulty in manually processing large volumes of resumes and finding suitable candidates."
    },
    solution: {
      UZ: "NLP va ML yordamida rezyumelarni avtomatik tahlil qilish va eng mos nomzodlarni tavsiya etish.",
      RU: "Автоматический анализ резюме с помощью NLP и ML и рекомендация наиболее подходящих кандидатов.",
      EN: "Automatic resume analysis using NLP and ML to recommend the most suitable candidates."
    },
    technologies: ["NLP", "Classification", "React", "Python"]
  },
  {
    id: "scholarmap",
    title: "ScholarMap",
    year: 2026,
    course: "Data Science",
    courseId: "ds",
    author: "EduTech Group",
    image: "/projects/2026/4. ScholarMap.png",
    tags: ["Education", "Recommendation"],
    excerpt: {
      UZ: "Talabalar uchun o'quv dasturlari va grantlarni izlashni aqlli tarzda osonlashtiruvchi xarita.",
      RU: "Умная карта, упрощающая поиск учебных программ и грантов для студентов.",
      EN: "Smart map simplifying the search for educational programs and grants for students."
    },
    problem: {
      UZ: "Kerakli ma'lumotlarni turli xil manbalardan qidirishda vaqt yo'qotish.",
      RU: "Потеря времени при поиске необходимой информации из разных источников.",
      EN: "Time lost searching for necessary information across various sources."
    },
    solution: {
      UZ: "Foydalanuvchi profiliga asoslangan holda shaxsiy tavsiyalar beruvchi AI tizim.",
      RU: "Система ИИ, дающая персональные рекомендации на основе профиля пользователя.",
      EN: "An AI system providing personalized recommendations based on the user's profile."
    },
    technologies: ["Recommendation Systems", "Web Scraping", "Data Viz"]
  },
  {
    id: "game-dev-project",
    title: "Unreal Fantasy",
    year: 2026,
    course: "GameDev",
    courseId: "game",
    author: "Game Studio Beta",
    image: "/projects/2026/5. Game.png",
    tags: ["Unreal Engine", "RPG", "Game Design"],
    excerpt: {
      UZ: "Ochiq dunyoga ega 3D RPG o'yini prototipi. Murakkab jang tizimi va AI dushmanlar bilan.",
      RU: "Прототип 3D RPG игры с открытым миром. Со сложной боевой системой и ИИ врагами.",
      EN: "Prototype of a 3D open-world RPG with a complex combat system and AI enemies."
    },
    problem: {
      UZ: "Mahalliy bozorda yuqori sifatli RPG o'yinlar yetishmovchiligi.",
      RU: "Нехватка высококачественных RPG-игр на местном рынке.",
      EN: "Shortage of high-quality RPG games in the local market."
    },
    solution: {
      UZ: "Unreal Engine 5 yordamida fotorealistik grafikaga va qiziqarli mexanikalarga ega o'yin yaratish.",
      RU: "Создание игры с фотореалистичной графикой и интересными механиками на Unreal Engine 5.",
      EN: "Creating a game with photorealistic graphics and engaging mechanics using Unreal Engine 5."
    },
    technologies: ["Unreal Engine 5", "Blueprints", "C++", "3D Animation"]
  },
  {
    id: "taxassist-ai",
    title: "TaxassistAI",
    year: 2026,
    course: "Data Science",
    courseId: "ds",
    author: "FinTech Squad",
    image: "/projects/2026/6. TaxassistAI.png",
    tags: ["Finance", "Generative AI"],
    excerpt: {
      UZ: "Soliq hisobotlarini avtomatlashtirish va moliyaviy maslahat beruvchi aqlli yordamchi.",
      RU: "Умный помощник для автоматизации налоговых отчетов и финансового консалтинга.",
      EN: "Smart assistant for automating tax reports and providing financial consulting."
    },
    problem: {
      UZ: "Soliq qonunchiligini tushunish va hujjatlarni to'g'ri to'ldirishdagi murakkabliklar.",
      RU: "Сложности в понимании налогового законодательства и правильном заполнении документов.",
      EN: "Difficulties in understanding tax legislation and correctly filling out documents."
    },
    solution: {
      UZ: "Qonunchilik bazasi bilan o'qitilgan LLM modeli yordamida soliqlarni hisoblab beruvchi AI.",
      RU: "ИИ, рассчитывающий налоги с помощью LLM-модели, обученной на законодательной базе.",
      EN: "An AI calculating taxes using an LLM model trained on the legislative base."
    },
    technologies: ["LLM", "RAG", "Python", "Data Parsing"]
  },
  {
    id: "qaqajon",
    title: "Qaqajon App",
    year: 2026,
    course: "GameDev",
    courseId: "game",
    author: "Mobile Devs",
    image: "/projects/2026/7. Qaqajon.png",
    tags: ["Mobile", "EdTech", "Kids"],
    excerpt: {
      UZ: "Bolalar uchun interaktiv va qiziqarli ta'lim o'yini.",
      RU: "Интерактивная и увлекательная обучающая игра для детей.",
      EN: "An interactive and engaging educational game for children."
    },
    problem: {
      UZ: "Kichik yoshdagi bolalarni o'qishga qiziqtirish uchun sifatli mahalliy kontentning kamligi.",
      RU: "Недостаток качественного местного контента для привлечения детей к учебе.",
      EN: "Lack of quality local content to interest young children in learning."
    },
    solution: {
      UZ: "O'yin mexanikalarini (Gamification) ta'lim jarayoniga integratsiya qilish.",
      RU: "Интеграция игровых механик (Gamification) в образовательный процесс.",
      EN: "Integration of game mechanics (Gamification) into the educational process."
    },
    technologies: ["Unity", "C#", "Mobile Development"]
  },
  {
    id: "safetalk",
    title: "SafeTalk",
    year: 2026,
    course: "Data Science",
    courseId: "ds",
    author: "CyberEthics",
    image: "/projects/2026/8. SafeTalk.png",
    tags: ["NLP", "Moderation", "Social"],
    excerpt: {
      UZ: "Ijtimoiy tarmoqlardagi kiberbulling va toksik nutqni aniqlab blokka tushiruvchi AI tizim.",
      RU: "ИИ-система для обнаружения и блокировки кибербуллинга и токсичной речи в соцсетях.",
      EN: "AI system to detect and block cyberbullying and toxic speech on social networks."
    },
    problem: {
      UZ: "Internetda haqoratomuz so'zlarni avtomatik tarzda aniqlashning qiyinligi, ayniqsa mahalliy tillarda.",
      RU: "Сложность автоматического распознавания оскорблений в интернете, особенно на местных языках.",
      EN: "Difficulty in automatically detecting offensive words on the internet, especially in local languages."
    },
    solution: {
      UZ: "O'zbek tili uchun maxsus o'qitilgan BERT modeli yordamida matn sentimentini tahlil qilish.",
      RU: "Анализ тональности текста с помощью специально обученной модели BERT для узбекского языка.",
      EN: "Text sentiment analysis using a specially trained BERT model for the Uzbek language."
    },
    technologies: ["Transformers", "BERT", "Text Classification"]
  },
  {
    id: "eduflow",
    title: "EduFlow",
    year: 2026,
    course: "Data Science",
    courseId: "ds",
    author: "EduFlow Team",
    image: "/projects/2026/9. EduFlow.png",
    tags: ["Education", "Analytics"],
    excerpt: {
      UZ: "O'quvchilarning o'zlashtirish dinamikasini kuzatish va kelajakdagi natijalarini bashorat qilish tizimi.",
      RU: "Система отслеживания динамики успеваемости и прогнозирования будущих результатов учеников.",
      EN: "System for tracking learning dynamics and predicting future student results."
    },
    problem: {
      UZ: "O'qituvchilarga har bir o'quvchining potensialini aniqlashda ma'lumotlarning yetishmasligi.",
      RU: "Нехватка данных у учителей для выявления потенциала каждого ученика.",
      EN: "Lack of data for teachers to identify the potential of each student."
    },
    solution: {
      UZ: "Mashinali o'qitish modellari orqali talabalar reytingini bashorat qilish va zaif tomonlarini ko'rsatish.",
      RU: "Прогнозирование рейтинга студентов и выявление слабых мест с помощью моделей машинного обучения.",
      EN: "Predicting student rankings and highlighting weak areas through machine learning models."
    },
    technologies: ["Regression Analysis", "Dashboards", "SQL"]
  },
  {
    id: "neuroanalyst",
    title: "NeuroAnalyst",
    year: 2026,
    course: "Data Science",
    courseId: "ds",
    author: "AI Lab",
    image: "/projects/2026/10. NeuroAnalyst.png",
    tags: ["Computer Vision", "Medical"],
    excerpt: {
      UZ: "Tibbiy tasvirlarni (MRT, Rentgen) tahlil qilib, o'smalarni yuqori aniqlikda topadigan AI.",
      RU: "ИИ, анализирующий медицинские изображения (МРТ, рентген) для обнаружения опухолей с высокой точностью.",
      EN: "An AI that analyzes medical images (MRI, X-ray) to detect tumors with high accuracy."
    },
    problem: {
      UZ: "Tasvirlar diagnostikasida inson omili sababli xatoliklarga yo'l qo'yilishi.",
      RU: "Ошибки в диагностике по изображениям из-за человеческого фактора.",
      EN: "Errors in imaging diagnostics due to the human factor."
    },
    solution: {
      UZ: "Deep Learning (CNN) yordamida patologiyalarni avtomatik segmentatsiya qilish va shifokorga yordam berish.",
      RU: "Автоматическая сегментация патологий с помощью Deep Learning (CNN) для помощи врачам.",
      EN: "Automatic segmentation of pathologies using Deep Learning (CNN) to assist doctors."
    },
    technologies: ["Computer Vision", "CNN", "PyTorch", "Medical AI"]
  }
];
