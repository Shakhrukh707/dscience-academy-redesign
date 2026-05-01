
import { TranslationSet, Language } from './types';

export const translations: Record<Language, TranslationSet> = {
  RU: {
    header: { courses: "Курсы", why: "Почему мы", how: "Обучение", apply: "Личный кабинет", login: "Войти", logout: "Выйти" },
    hero: { title: "Стань специалистом в Data Science и AI", subtitle: "Практическое обучение, сертификат и карьерный рост в топовых компаниях.", cta: "Начать обучение" },
    why: { title: "Почему выбирают нас?", subtitle: "Мы даём не просто уроки, а среду, практику и понятный путь к сильному результату.", practice: "Реальные проекты и практика", practiceDesc: "Не только теория. Во время обучения студенты участвуют в престижных хакатонах, собирают готовое портфолио и выходят с реальными результатами.", mentors: "Сильные тьюторы", mentorsDesc: "Занятия ведут практикующие специалисты с международным опытом, участием в крупных проектах и активной работой в IT-индустрии.", infrastructure: "Современная инфраструктура", infrastructureDesc: "Комфортные аудитории, мощные компьютеры и профессиональная среда, созданная для обучения, роста и нетворкинга.", career: "Помощь в карьере", careerDesc: "Лучшим выпускникам помогаем с поиском работы, составлением сильного резюме и прохождением собеседований в компаниях-партнёрах." },
    courses: {
      title: "Наши направления", flagshipBadge: "Основное направление", ds: "Data Science", dsDesc: "Глубокое погружение в анализ данных, машинное обучение и искусственный интеллект.", da: "Animatsiya", daDesc: "Искусство оживления персонажей и объектов в 2D и 3D пространстве.", threeD: "3D modeling", threeDDesc: "Профессиональное создание трехмерных моделей для игр и архитектуры.", ue: "O‘yin dizayni va geymdev asoslari", ueDesc: "Путь от идеи до первого прототипа. Изучение механик и психологии игроков.", vfx: "VFX Compositing", vfxDesc: "Создание впечатляющих визуальных эффектов для кино и рекламы.", fx: "FX simulation", fxDesc: "Магия частиц: симуляция огня, воды, взрывов и разрушений.", unreal: "Unreal Engine", unrealDesc: "Разработка высокотехнологичных игр на топовом движке мира.", c4d: "Raqamli vizual san’at (Cinema 4D)", c4dDesc: "Моушн-дизайн и создание сложного цифрового искусства.", more: "Подробнее",
      modalLabels: { program: "Программа курса", tools: "Инструменты", result: "Результат обучения", cta: "Записаться на курс", spots: "* Группы до 15 человек" },
      details: {
        ds: { duration: "9 месяцев", intensity: "3 раза в неделю", level: "Middle с нуля", program: ["1-этап: Программирование и базы данных (Python, SQL)", "2-этап: Основы математики и статистики", "3-этап: Machine Learning (Машинное обучение)", "4-этап: Deep Learning и нейросети", "5-этап: Подготовка к карьере и реальные проекты"], tools: ["Python", "Pandas", "PyTorch", "TensorFlow", "PostgreSQL", "Jupyter"], result: "Портфолио из 5 реальных кейсов и диплом специалиста." },
        anim: { duration: "7 месяцев", intensity: "2 раза в неделю", level: "Начальный", program: ["12 принципов анимации", "Анатомия движения", "Липсинк и мимика", "Актерское мастерство", "Финальный рил"], tools: ["Maya", "Adobe Animate", "Toon Boom"], result: "Собственный шоурил аниматора." },
        '3d': { duration: "6 месяцев", intensity: "3 раза в неделю", level: "С нуля", program: ["Hard Surface моделирование", "Скульпптинг персонажей", "Ретопология и UV", "Текстурирование", "Рендеринг"], tools: ["ZBrush", "Blender", "Substance Painter", "Marmoset Toolbag"], result: "Набор игровых ассетов и фотореалистичных моделей." },
        game: { duration: "8 месяцев", intensity: "3 раза в неделю", level: "Любой", program: ["Нарративный дизайн", "Левел-дизайн", "Балансировка", "Монетизация", "Издание игр"], tools: ["Unity", "Unreal Engine", "Miro", "Figma"], result: "Проект собственной игры от идеи до документации." },
        vfx: { duration: "9 месяцев", intensity: "3 раза в неделю", level: "Средний", program: ["Ротоскопинг", "Кеинг", "Трэкинг", "Клинап", "Цветокоррекция", "3D интеграция"], tools: ["Nuke", "Mocha Pro", "DaVinci Resolve"], result: "Профессиональные кадры для кино-портфолио." },
        fx: { duration: "10 месяцев", intensity: "4 раза в неделю", level: "Продвинутый", program: ["Симуляция дыма и огня", "Разрушения (RBD)", "Динамика жидкостей", "Vellum", "Шейдинг и рендер"], tools: ["Houdini", "Mantra", "Karma"], result: "Сложные симуляции уровня голливудских блокбастеров." },
        unreal: { duration: "8 месяцев", intensity: "3 раза в неделю", level: "С нуля", program: ["Blueprints", "Материалы и шейдеры", "Система Niagara", "Окружение и свет", "Оптимизация под мобилки"], tools: ["Unreal Engine 5", "Quixel Bridge", "C++"], result: "Игра на Unreal Engine 5 с продвинутой графикой." },
        c4d: { duration: "6 месяцев", intensity: "2 раза в неделю", level: "Начальный", program: ["Mograph основы", "Динамика объектов", "Освещение сцены", "Абстрактное искусство", "Пост-обработка"], tools: ["Cinema 4D", "Redshift", "Octane Render"], result: "Стильный моушн-ролик для социальных сетей." }
      }
    },
    how: { title: "Как проходит обучение", step1: "Заявка", step1Desc: "Оставляешь заявку на сайте.", step2: "Портфолио", step2Desc: "Студент отправляет своё портфолио для первичного анализа.", step3: "Конкурс", step3Desc: "Отбор лучших кандидатов на основе работ и потенциала.", step4: "Практика", step4Desc: "Интенсивное обучение и работа над реальными кейсами.", step5: "Карьера", step5Desc: "Получаешь сертификат и приглашение в топовые компании." },
    benefits: { title: "Ваши преимущества", scholarship: "Стипендия для лучших", food: "Бесплатное питание", computers: "Современные компьютеры", mentoring: "Личная поддержка" },
    reviews: { title: "Отзывы студентов" },
    footer: { contacts: "Контакты", follow: "Мы в соцсетях", rights: "Все права защищены" },
    form: {
      title: "Кабинет абитуриента", lastName: "Фамилия", firstName: "Имя", middleName: "Отчество", telegram: "Telegram username (@example)", email: "Электронная почта", passport: "Паспорт (серия и номер)", phone: "Телефон", course: "Направление", submit: "Зарегистрироваться", success: "Успешно!", credsSent: "Данные для входа отправлены на вашу почту.", selectPlaceholder: "Выберите курс", phoneError: "Введите корректный номер (+998XXXXXXXXX)",
      offerTitle: "Публичная оферта", offerAgree: "Принять и отправить", offerDecline: "Отмена", offerText: "Настоящая оферта является официальным предложением Академии DScience. Регистрируясь на данном портале, вы соглашаетесь с правилами внутреннего распорядка, политикой конфиденциальности и условиями предоставления образовательных услуг. Вы подтверждаете, что предоставленные данные являются достоверными. Академия обязуется обеспечить конфиденциальность ваших данных и предоставить доступ к учебным материалам после успешного прохождения отбора."
    },
    dashboard: {
      welcome: "Добро пожаловать!", status: "Статус", personalInfo: "Профиль", phase2Title: "Загрузка портфолио", phase2Desc: "Загрузите PDF файл. Вы можете добавлять новые версии, они будут сохранены в истории.", uploadBtn: "Загрузить PDF", uploadMore: "Добавить файл", uploadSuccess: "Файл добавлен!", regDone: "Регистрация", portWaiting: "Ожидание портфолио", reviewPending: "На проверке", notifications: "Уведомления", markAsRead: "Прочитано", history: "История файлов", noNotifs: "Уведомлений нет",
      successModalTitle: "Поздравляем!",
      successModalDesc: "Ваше портфолио успешно загружено. Документы находятся на рассмотрении. Вы можете обновлять файлы до сентября, после чего загрузка будет закрыта. Все новости конкурса будут доступны в личном кабинете и в нашем Telegram канале.",
      telegramJoin: "Вступить в Telegram канал",
      step3Title: "3-шаг: Сообщество",
      sampleBtn: "Образец (PDF)",
      combinedReminder: "Все документы собираются и отправляются одним файлом.",
      documentList: [
        "Копия документа, удостоверяющего личность;",
        "Справка из вуза со всеми академическими показателями за 2 года (транскрипт);",
        "Справка об отсутствии академической задолженности;",
        "Научная деятельность (статьи, учебники, ПО, изобретения и т.д.);",
        "Мотивационное письмо (эссе не менее 2 страниц формата А4);",
        "Копии документов об уровне владения иностранными языками (при наличии);",
        "Международный IT-сертификат (при наличии);",
        "Сертификаты владения языком (CEFR, IELTS, TOEFL);",
        "Список опубликованных научных работ;",
        "1 статья и 1 презентация, подготовленные в рамках конкурса;",
        "Рекомендация от специалиста или лица с ученой степенью;",
        "Общая рекомендация от профессоров/преподавателей;",
        "Портфолио творческих работ за время обучения в вузе."
      ],
      academicInfo: {
        uni: "Выберите ВУЗ",
        faculty: "Выберите факультет",
        spec: "Выберите специальность",
        uniPlaceholder: "ВУЗ",
        facultyPlaceholder: "Факультет",
        specPlaceholder: "Специальность"
      }
    },
    login: { title: "Вход", id: "ID абитуриента", pass: "Пароль", btn: "Войти", error: "Ошибка входа" },
    chatbot: {
      title: "DScience AI Ментор",
      placeholder: "Задайте вопрос...",
      welcomeMsg: "Привет! Я AI Ментор Академии DScience. Чем я могу помочь вам сегодня?",
      adminNav: "Вопросы ИИ",
      noLogs: "Истории вопросов пока нет"
    }
  },
  UZ: {
    header: { courses: "Kurslar", why: "Nega biz", how: "O'qitish", apply: "Shaxsiy kabinet", login: "Kirish", logout: "Chiqish" },
    hero: { title: "Data Science va AI mutaxassisi bo'ling", subtitle: "Amaliy ta'lim, sertifikat va yetakchi kompaniyalarda martaba o'sishi.", cta: "O'qishni boshlash" },
    why: { title: "Nima uchun biz?", subtitle: "Biz o'quvchini shunchaki kursga emas, real tajriba, kuchli muhit va karyera startiga olib chiqamiz.", practice: "Real loyihalar va amaliyot", practiceDesc: "Faqat quruq teoriya emas. O'quvchilarimiz o'qish davomidayoq nufuzli xakatonlarda qatnashib, tayyor portfolio va real natijalar bilan chiqishadi.", mentors: "Kuchli tyutorlar", mentorsDesc: "Darslar xalqaro tajribaga ega, yirik loyihalarda qatnashgan va IT-sanoatida faol ishlayotgan amaliyotchi mutaxassislar tomonidan olib boriladi.", infrastructure: "Zamonaviy infratuzilma", infrastructureDesc: "Qulay darsxonalari, kuchli kompyuterlar va o'qish hamda netvorking uchun yaratilgan haqiqiy professional muhit.", career: "Karyerada yordam", careerDesc: "Eng yaxshi bitiruvchilarga ish topishda, professional rezyume tuzishda va hamkor kompaniyalarda suhbatdan o'tishda amaliy yordam beramiz." },
    courses: {
      title: "Bizning yo'nalishlar", flagshipBadge: "Asosiy yo'nalish", ds: "Data Science", dsDesc: "Ma'lumotlar tahlili, mashinali o'rganish va sun'iy intellektga chuqur sho'ng'ish.", da: "Animatsiya", daDesc: "2D va 3D fazoda qahramonlar va ob'ektlarni jonlantirish san'ati.", threeD: "3D modeling", threeDDesc: "O'yinlar va arxitektura uchun uch o'lchamli modellarni professional yaratish.", ue: "O‘yin dizayni va geymdev asoslari", ueDesc: "G'oyadan birinchi prototipgacha bo'lgan yo'l. Mexanika va o'yinchilar psixologiyasini o'rganish.", vfx: "VFX Compositing", vfxDesc: "Kino va reklama uchun ta'sirchan vizual effektlar yaratish.", fx: "FX simulation", fxDesc: "Zarralar sehri: olov, suv, portlashlar va vayronagarchiliklarni simulyatsiya qilish.", unreal: "Unreal Engine", unrealDesc: "Dunyoning eng yaxshi dvigatelida yuqori texnologiyali o'yinlar ishlab chiqish.", c4d: "Raqamli vizual san’at (Cinema 4D)", c4dDesc: "Moshn-dizayn va murakkab raqamli san'atni yaratish.", more: "Batafsil",
      modalLabels: { program: "Kurs dasturi", tools: "Uskunalar", result: "O'qish natijasi", cta: "Kursga yozilish", spots: "* Guruhlar 15 kishigacha" },
      details: {
        ds: { duration: "9 oy", intensity: "Haftada 3 marta", level: "Noldan Middle", program: ["1-bosqich: Dasturlash va ma'lumotlar bazasi (Python, SQL)", "2-bosqich: Matematika va statistika asoslari", "3-bosqich: Machine Learning (Mashinali o'rganish)", "4-bosqich: Deep Learning va Neyrotarmoqlar", "5-bosqich: Karyeraga tayyorgarlik va Real loyihalar"], tools: ["Python", "Pandas", "PyTorch", "TensorFlow", "PostgreSQL", "Jupyter"], result: "5 ta real loyihadan iborat portfoliyo va mutaxassis diplomi." },
        anim: { duration: "7 oy", intensity: "Haftada 2 marta", level: "Boshlang'ich", program: ["Animatsiyaning 12 tamoyili", "Harakat anatomiyasi", "Lipsink va mimika", "Aktyorlik mahorati", "Yakuniy ril"], tools: ["Maya", "Adobe Animate", "Toon Boom"], result: "Shaxsiy animator shourili." },
        '3d': { duration: "6 oy", intensity: "Haftada 3 marta", level: "Noldan", program: ["Hard Surface modellashtirish", "Qahramonlar skulptingi", "Retopologiya va UV", "Teksturalash", "Rendering"], tools: ["ZBrush", "Blender", "Substance Painter", "Marmoset Toolbag"], result: "O'yin aktivlari va fotorealistik modellar to'plami." },
        game: { duration: "8 months", intensity: "Haftada 3 marta", level: "Ixtiyoriy", program: ["Narrativ dizayn", "Level-dizayn", "Balanslashtirish", "Monetizatsiya", "O'yinlarni nashr etish"], tools: ["Unity", "Unreal Engine", "Miro", "Figma"], result: "G'oyadan hujjatlargacha bo'lgan shaxsiy o'yin loyihasi." },
        vfx: { duration: "9 oy", intensity: "Haftada 3 marta", level: "O'rta", program: ["Rotoskopiya", "Keying", "Treking", "Klinap", "Rang tuzatish", "3D integratsiya"], tools: ["Nuke", "Mocha Pro", "DaVinci Resolve"], result: "Kino portfoliyosi uchun professional kadrlar." },
        fx: { duration: "10 oy", intensity: "Haftada 4 marta", level: "Yuqori", program: ["Tutun va olov simulyatsiyasi", "Vayronagarchiliklar (RBD)", "Suyuqliklar dinamikasi", "Vellum", "Sheyding va render"], tools: ["Houdini", "Mantra", "Karma"], result: "Gollivud blokbasterlari darajasidagi murakkab simulyatsiyalar." },
        unreal: { duration: "8 oy", intensity: "Haftada 3 marta", level: "Noldan", program: ["Blueprints", "Materiallar va sheyderlar", "Niagara tizimi", "Atrof-muhit va yorug'lik", "Mobil optimallashtirish"], tools: ["Unreal Engine 5", "Quixel Bridge", "C++"], result: "Zamonaviy grafikali Unreal Engine 5 o'yini." },
        c4d: { duration: "6 oy", intensity: "Haftada 2 marta", level: "Boshlang'ich", program: ["Mograph asoslari", "Obyektlar dinamikasi", "Sahna yoritilishi", "Abstrakt san'at", "Post-ishlov berish"], tools: ["Cinema 4D", "Redshift", "Octane Render"], result: "Ijtimoiy tarmoqlar uchun zamonaviy moshn-video." }
      }
    },
    how: { title: "O'qish qanday o'tadi", step1: "Ariza", step1Desc: "Saytda ariza qoldirasiz.", step2: "Portfoliyo", step2Desc: "Talaba o'z portfoliyosini tahlil qilish uchun yuboradi.", step3: "Tanlov", step3Desc: "Ishlar va salohiyat asosida eng yaxshi nomzodlarni saralash.", step4: "Amaliyot", step4Desc: "Kurator bilan intensiv o'qitish va real keyslar ustida ishlash.", step5: "Karyera", step5Desc: "Sertifikat va eng yaxshi kompaniyalarga taklifnoma olasiz." },
    benefits: { title: "Sizning afzalliklaringiz", scholarship: "Eng yaxshilar uchun stipendiya", food: "Bepul tushlik", computers: "Zamonaviy kompyuterlar", mentoring: "Shaxsiy yordam" },
    reviews: { title: "Talabalar fikrlari" },
    footer: { contacts: "Kontaktlar", follow: "Biz ijtimoiy tarmoqlarda", rights: "Barcha huquqlar himoyalangan" },
    form: {
      title: "Abiturient kabineti", lastName: "Familiya", firstName: "Ism", middleName: "Otasining ismi", telegram: "Telegram username (@example)", email: "Elektron pochta", passport: "Pasport (seriya va raqam)", phone: "Telefon", course: "Yo'nalish", submit: "Ro'yxatdan o'tish", success: "Muvaffaqiyatli!", credsSent: "Kirish ma'lumotlari pochtangizga yuborildi.", selectPlaceholder: "Kursni tanlang", phoneError: "Telefon raqamini to'g'ri kiriting (+998XXXXXXXXX)",
      offerTitle: "Ommaviy oferta", offerAgree: "Roziman va yuborish", offerDecline: "Bekor qilish", offerText: "Ushbu oferta DScience akademiyasining rasmiy taklifi hisoblanadi. Portalda ro'yxatdan o'tish orqali siz ichki tartib-qoidalar, maxfiylik siyosati va ta'lim xizmatlarini ko'rsatish shartlariga rozilik bildirasiz. Taqdim etilgan ma'lumotlarning to'g'riligini tasdiqlaysiz. Akademiya sizning ma'lumotlaringiz maxfiyligini ta'minlashga va saralashdan muvaffaqiyatli o'tganingizdan so'ng o'quv materiallariga kirish huquqini berishga majburiyat oladi."
    },
    dashboard: {
      welcome: "Xush kelibsiz!", status: "Holat", personalInfo: "Profil", phase2Title: "Portfoliyo yuklash", phase2Desc: "PDF faylni yuklang. Yangi versiyalarni qo'shishingiz mumkin, bastion tarixda saqlanadi.", uploadBtn: "PDF yuklash", uploadMore: "Fayl qo'shish", uploadSuccess: "Fayl qo'shildi!", regDone: "Ro'yxatdan o'tildi", portWaiting: "Portfoliyo kutilmoqda", reviewPending: "Tekshiruvda", notifications: "Xabarlar", markAsRead: "O'qib chiqdim", history: "Fayllar tarixi", noNotifs: "Xabarlar yo'q",
      successModalTitle: "Tabriklaymiz!",
      successModalDesc: "Portfoliyongiz muvaffaqiyatli yuklandi. Hujjatlar ko'rib chiqilmoqda. Siz fayllarni sentyabrgacha yangilashingiz mumkin, shundan so'ng yuklash to'xtatiladi. Tanlov bo'yicha barcha yangiliklar shaxsiy kabinet va bizning Telegram kanalimizda e'lon qilinadi.",
      telegramJoin: "Telegram kanalga a'zo bo'lish",
      step3Title: "3-qadam: Hamjamiyat",
      sampleBtn: "Namuna (PDF)",
      combinedReminder: "Barcha hujjatlarni umumlashtirib bitta faylga yi'gib yuboriladi.",
      documentList: [
        "Shaxsni tasdiqlovchi hujjat nusxasi;",
        "OTM tomonidan berilgan, 2 yillik barcha akademik ko‘rsatkichlar qayd etilgan ma’lumotnoma (transkript);",
        "Akademik qarzdorlik mavjud emasligi to‘g‘risidagi ma’lumotnoma;",
        "Ilmiy faoliyat (maqola, darslik, dasturiy ta’minot, ixtiro va h.k);",
        "Motivatsion xat (Data Science haqida esse, hajmi 2 betdan kam bo'lmagan, A4 formati);",
        "Xorijiy tillarni bilish darajasini tasdiqlovchi hujjatlar (agar mavjud bo‘lsa);",
        "Xalqaro IT sertifikat (agar mavjud bo‘lsa);",
        "CEFR, IELTS, TOEFL kabi til bilish sertifikatlari;",
        "Nashr etilgan ilmiy ishlari ro‘yxati (nusxalari ilova qilinadi);",
        "Tanlov doirasida tayyorlangan 1 ta maqola, 1 ta taqdimot;",
        "Sohadagi mutaxassis tomonidan berilgan tavsiyanoma (qiziqishlar haqida);",
        "Professor-o‘qituvchilar tomonidan berilgan tavsiyanoma (umumiy);",
        "Portfolio (OTMda o'qish davridagi guvohnoma, patent va shu kabilar)."
      ],
      academicInfo: {
        uni: "OTMni tanlang",
        faculty: "Fakultetni tanlang",
        spec: "Mutaxassislikni tanlang",
        uniPlaceholder: "OTM",
        facultyPlaceholder: "Fakultet",
        specPlaceholder: "Mutaxassislik"
      }
    },
    login: { title: "Kirish", id: "Abiturient ID", pass: "Parol", btn: "Kirish", error: "Kirishda xatolik" },
    chatbot: {
      title: "DScience AI Mentor",
      placeholder: "Savol bering...",
      welcomeMsg: "Salom! Men DScience akademiyasining AI Mentoriman. Sizga qanday yordam bera olaman?",
      adminNav: "AI Savollar",
      noLogs: "Hozircha savollar tarixi mavjud emas"
    }
  },
  EN: {
    header: { courses: "Courses", why: "Why Us", how: "Learning", apply: "Student Portal", login: "Login", logout: "Logout" },
    hero: { title: "Become a Specialist in Data Science & AI", subtitle: "Hands-on training, certification, and career growth in top companies.", cta: "Start Learning" },
    why: { title: "Why choose us?", subtitle: "We do more than teach courses. We build a practical environment that leads students toward real outcomes and confident career growth.", practice: "Real projects and practice", practiceDesc: "Not just dry theory. Our students join respected hackathons during the program and graduate with a ready portfolio and visible results.", mentors: "Strong tutors", mentorsDesc: "Classes are led by practicing specialists with international exposure, major project experience, and active roles inside the IT industry.", infrastructure: "Modern infrastructure", infrastructureDesc: "Comfortable classrooms, powerful computers, and a professional environment created for focused study and meaningful networking.", career: "Career support", careerDesc: "We help top graduates with job search, resume building, and interview preparation with partner companies." },
    courses: {
      title: "Our Programs", flagshipBadge: "Main Track", ds: "Data Science", dsDesc: "A deep dive into data analysis, machine learning, and artificial intelligence.", da: "Animatsiya", daDesc: "The art of bringing characters and objects to life in 2D and 3D space.", threeD: "3D modeling", threeDDesc: "Professional creation of three-dimensional models for games and architecture.", ue: "O‘yin dizayni va geymdev asoslari", ueDesc: "The path from idea to first prototype. Studying mechanics and player psychology.", vfx: "VFX Compositing", vfxDesc: "Creation of impressive visual effects for cinema and commercials.", fx: "FX simulation", fxDesc: "Particle magic: simulation of fire, water, explosions, and destruction.", unreal: "Unreal Engine", unrealDesc: "Development of high-tech games on the world's leading engine.", c4d: "Raqamli vizual san’at (Cinema 4D)", c4dDesc: "Motion design and creation of complex digital art in Cinema 4D.", more: "Learn More",
      modalLabels: { program: "Course Program", tools: "Tools & Stack", result: "Learning Outcome", cta: "Enroll on Course", spots: "* Small groups up to 15" },
      details: {
        ds: { duration: "9 months", intensity: "3 times a week", level: "Zero to Middle", program: ["Stage 1: Programming & Databases (Python, SQL)", "Stage 2: Mathematics & Statistics Fundamentals", "Stage 3: Machine Learning", "Stage 4: Deep Learning & Neural Networks", "Stage 5: Career Preparation & Real Projects"], tools: ["Python", "Pandas", "PyTorch", "TensorFlow", "PostgreSQL", "Jupyter"], result: "Portfolio of 5 real cases and a specialist diploma." },
        anim: { duration: "7 months", intensity: "2 times a week", level: "Beginner", program: ["12 Principles of Animation", "Anatomy of Movement", "Lipsync and Facial Expression", "Acting Skills", "Final Showreel"], tools: ["Maya", "Adobe Animate", "Toon Boom"], result: "Personal animator showreel." },
        '3d': { duration: "6 months", intensity: "3 times a week", level: "From Zero", program: ["Hard Surface Modeling", "Character Sculpting", "Retopology and UV", "Texturing", "Rendering"], tools: ["ZBrush", "Blender", "Substance Painter", "Marmoset Toolbag"], result: "Set of game assets and photorealistic models." },
        game: { duration: "8 months", intensity: "3 times a week", level: "Any", program: ["Narrative Design", "Level Design", "Balancing", "Monetization", "Game Publishing"], tools: ["Unity", "Unreal Engine", "Miro", "Figma"], result: "Personal game project from idea to documentation." },
        vfx: { duration: "9 months", intensity: "3 times a week", level: "Intermediate", program: ["Rotoscoping", "Keying", "Tracking", "Cleanup", "Color Correction", "3D Integration"], tools: ["Nuke", "Mocha Pro", "DaVinci Resolve"], result: "Professional shots for film portfolio." },
        fx: { duration: "10 months", intensity: "4 times a week", level: "Advanced", program: ["Smoke and Fire Simulation", "Destruction (RBD)", "Fluid Dynamics", "Vellum", "Shading and Rendering"], tools: ["Houdini", "Mantra", "Karma"], result: "Complex simulations at Hollywood blockbuster level." },
        unreal: { duration: "8 months", intensity: "3 times a week", level: "From Zero", program: ["Blueprints", "Materials and Shaders", "Niagara System", "Environment and Light", "Mobile Optimization"], tools: ["Unreal Engine 5", "Quixel Bridge", "C++"], result: "Unreal Engine 5 game with advanced graphics." },
        c4d: { duration: "6 months", intensity: "2 times a week", level: "Beginner", program: ["Mograph Basics", "Object Dynamics", "Scene Lighting", "Abstract Art", "Post-processing"], tools: ["Cinema 4D", "Redshift", "Octane Render"], result: "Stylish motion video for social media." }
      }
    },
    how: { title: "How It Works", step1: "Apply", step1Desc: "Fill out the application form on our site.", step2: "Portfolio", step2Desc: "Submit your portfolio for initial review.", step3: "Competition", step3Desc: "Selection of best candidates based on their work and potential.", step4: "Practice", step4Desc: "Intensive training and working on real-world cases.", step5: "Career", step5Desc: "Get certified and receive offers from top IT companies." },
    benefits: { title: "Your Benefits", scholarship: "Scholarship for top students", food: "Free meals provided", computers: "High-end computers", mentoring: "Personal mentor support" },
    reviews: { title: "Student Success Stories" },
    footer: { contacts: "Contacts", follow: "Social Media", rights: "All rights reserved" },
    form: {
      title: "Applicant Portal", lastName: "Last Name", firstName: "First Name", middleName: "Middle Name", telegram: "Telegram (@example)", email: "Email", passport: "Passport (Series & Number)", phone: "Phone", course: "Program", submit: "Register", success: "Success!", credsSent: "Login details sent to your email.", selectPlaceholder: "Select course", phoneError: "Invalid phone number (+998XXXXXXXXX)",
      offerTitle: "Public Offer", offerAgree: "Agree and Submit", offerDecline: "Cancel", offerText: "This offer is an official proposal from DScience Academy. By registering on this portal, you agree to the internal rules, privacy policy, and terms of educational services. You confirm that the data provided is accurate. The Academy undertakes to ensure the confidentiality of your data and provide access to educational materials after successful selection."
    },
    dashboard: {
      welcome: "Welcome!", status: "Status", personalInfo: "Profile", phase2Title: "Portfolio Upload", phase2Desc: "Upload your PDF. You can add new versions; they will be saved in history.", uploadBtn: "Upload PDF", uploadMore: "Add file", uploadSuccess: "File added!", regDone: "Registered", portWaiting: "Waiting for Portfolio", reviewPending: "In Review", notifications: "Notifications", markAsRead: "Mark as Read", history: "File History", noNotifs: "No notifications",
      successModalTitle: "Congratulations!",
      successModalDesc: "Your portfolio has been successfully uploaded. Documents are currently under review. You can update files until September, after which the upload will be closed. All competition updates will be available in your dashboard and our Telegram channel.",
      telegramJoin: "Join Telegram Channel",
      step3Title: "Step 3: Community",
      sampleBtn: "Sample (PDF)",
      combinedReminder: "All documents must be combined and sent as a single file.",
      documentList: [
        "Copy of identity document;",
        "Certificate from the university with all academic results for 2 years (transcript);",
        "Certificate of absence of academic debt;",
        "Scientific activity (articles, textbooks, software, inventions, etc.);",
        "Motivational letter (essay at least 2 pages A4 format);",
        "Copies of documents on foreign language proficiency (if available);",
        "International IT certificate (if available);",
        "Language proficiency certificates (CEFR, IELTS, TOEFL);",
        "List of published scientific works;",
        "1 article and 1 presentation prepared for the contest;",
        "Recommendation from a specialist or academic staff member;",
        "General recommendation from professors/teachers;",
        "Portfolio of creative works (patents, certificates, etc.)."
      ],
      academicInfo: {
        uni: "Select University",
        faculty: "Select Faculty",
        spec: "Select Specialization",
        uniPlaceholder: "University",
        facultyPlaceholder: "Faculty",
        specPlaceholder: "Specialization"
      }
    },
    login: { title: "Login", id: "Applicant ID", pass: "Password", btn: "Sign In", error: "Login failed" },
    chatbot: {
      title: "DScience AI Mentor",
      placeholder: "Ask a question...",
      welcomeMsg: "Hello! I am the official AI Mentor of DScience Academy. How can I help you today?",
      adminNav: "AI Insights",
      noLogs: "No question history yet"
    }
  }
};
