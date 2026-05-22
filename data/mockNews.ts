import { Language } from '../types';

type LocalizedText = Record<Language, string>;

export interface NewsItem {
  id: string;
  title: LocalizedText;
  date: {
    day: string;
    month: LocalizedText;
    full: LocalizedText;
    weekday: LocalizedText;
  };
  image: string;
  categories: string[];
  category: LocalizedText;
  excerpt: LocalizedText;
  summary: LocalizedText;
  content: LocalizedText[];
  quote?: LocalizedText;
  author: string;
  readTime: LocalizedText;
  views?: number;
  gallery?: string[];
}

export const mockNews: NewsItem[] = [
  {
    id: 'gamefest-2026',
    title: {
      UZ: '“GameFest-2026” festivali yuqori saviyada davom etdi',
      RU: 'Фестиваль «GameFest-2026» продолжился на высоком уровне',
      EN: '"GameFest-2026" festival continued at a high level'
    },
    date: {
      day: '16',
      month: { UZ: 'MAY', RU: 'МАЯ', EN: 'MAY' },
      full: { UZ: '16-May, 2026', RU: '16 Мая 2026 года', EN: 'May 16, 2026' },
      weekday: { UZ: 'SHAN', RU: 'СБ', EN: 'SAT' }
    },
    image: '/news/1.jpg',
    gallery: [
      '/news/1.jpg', '/news/2.jpg', '/news/3.jpg', '/news/4.jpg', '/news/5.jpg',
      '/news/6.jpg', '/news/7.jpg', '/news/8.jpg', '/news/9.jpg', '/news/10.jpg'
    ],
    categories: ['GAMEDEV', 'EVENTS'],
    category: { UZ: 'TADBIR', RU: 'МЕРОПРИЯТИЕ', EN: 'EVENT' },
    excerpt: {
      UZ: 'Toshkent shahrida o‘tkazilgan “GameFest-2026” xalqaro festivalining ikkinchi kuni yuqori kayfiyat va kreativ muhit bilan yodda qoldi.',
      RU: 'Второй день международного фестиваля «GameFest-2026» в Ташкенте запомнился отличным настроением и креативной атмосферой.',
      EN: 'The second day of the international festival "GameFest-2026" in Tashkent was remembered for its great mood and creative atmosphere.'
    },
    summary: {
      UZ: 'Tadbirda yosh geymdevlar va xorijiy ekspertlar uchrashib, O‘zbekistonni gaming habiga aylantirish istiqbollarini muhokama qilishdi.',
      RU: 'На мероприятии встретились молодые разработчики игр и зарубежные эксперты для обсуждения перспектив превращения Узбекистана в гейминг-хаб.',
      EN: 'Young game developers and foreign experts met at the event to discuss the prospects of turning Uzbekistan into a gaming hub.'
    },
    content: [
      {
        UZ: 'Toshkent shahrida o‘tkazilgan “GameFest-2026” xalqaro festivalining ikkinchi kuni yuqori kayfiyat, kreativ muhit va nufuzli mehmonlar ishtiroki bilan yodda qoldi. Tadbirga Raqamli texnologiyalar vaziri Sherzod Shermatov tashrif buyurib, festival doirasida tashkil etilgan ekspo hududlar va startap loyihalar bilan yaqindan tanishdi.',
        RU: 'Второй день международного фестиваля «GameFest-2026», проходящего в Ташкенте, запомнился отличным настроением, креативной атмосферой и участием почетных гостей. Мероприятие посетил Министр цифровых технологий Шерзод Шерматов, который детально ознакомился с экспо-зонами и стартап-проектами, организованными в рамках фестиваля.',
        EN: 'The second day of the international festival "GameFest-2026" held in Tashkent was remembered for its great mood, creative atmosphere, and the participation of honorable guests. Minister of Digital Technologies Sherzod Shermatov visited the event and closely familiarized himself with the expo areas and startup projects organized as part of the festival.'
      },
      {
        UZ: 'Vazir festivalning Game Jam va GameDev hududlarida bo‘lib, 36 soatlik marafon davomida 90 ta jamoa tomonidan ishlab chiqilgan o‘yin prototiplari hamda mahalliy dasturchilarning innovatsion g‘oyalarini ko‘zdan kechirdi. Qayd etilganidek, ishtirokchilar tomonidan taqdim etilgan loyihalar milliy geymdev industriyasining salohiyati tobora ortib borayotganini namoyon etdi.',
        RU: 'Министр посетил зоны Game Jam и GameDev, где в ходе 36-часового марафона 90 команд разработали прототипы игр, а также ознакомился с инновационными идеями местных разработчиков. Как было отмечено, проекты, представленные участниками, продемонстрировали растущий потенциал национальной индустрии геймдева.',
        EN: 'The Minister visited the Game Jam and GameDev areas, where during a 36-hour marathon, 90 teams developed game prototypes, and he also reviewed the innovative ideas of local developers. As noted, the projects presented by the participants demonstrated the growing potential of the national game development industry.'
      },
      {
        UZ: 'Shuningdek, Creative Tech yo‘nalishida namoyish etilgan animatsiya va VFX ishlari ham alohida e’tibor markazida bo‘ldi. Yosh ijodkorlar tomonidan Blender, Unreal Engine hamda Cinema 4D platformalari asosida yaratilgan 3D ishlar va milliy animatsiya loyihalari yuqori baholandi.',
        RU: 'Также в центре внимания оказались работы по анимации и VFX, представленные в направлении Creative Tech. Высокую оценку получили 3D-работы и национальные анимационные проекты, созданные молодыми талантами на базе платформ Blender, Unreal Engine и Cinema 4D.',
        EN: 'Also, the animation and VFX works presented in the Creative Tech direction were in the center of attention. 3D works and national animation projects created by young talents based on Blender, Unreal Engine, and Cinema 4D platforms were highly appreciated.'
      },
      {
        UZ: 'Festival doirasida xalqaro ekspertlar ishtirokida qator uchrashuv va muhokamalar ham tashkil etildi. Xususan, Eduardo Pena, Mike Morris va boshqa soha mutaxassislari bilan O‘zbekistonni mintaqaviy kreativ va gaming xabga aylantirish istiqbollari muhokama qilindi.',
        RU: 'В рамках фестиваля состоялся ряд встреч и дискуссий с участием международных экспертов. В частности, с Эдуардо Пенья, Майком Моррисом и другими специалистами отрасли обсуждались перспективы превращения Узбекистана в региональный креативный и гейминг-хаб.',
        EN: 'As part of the festival, a number of meetings and discussions were organized with the participation of international experts. In particular, the prospects of turning Uzbekistan into a regional creative and gaming hub were discussed with Eduardo Pena, Mike Morris, and other industry specialists.'
      },
      {
        UZ: 'Tadbirning eng muhim qismlaridan biri — taqdirlash marosimi bo‘ldi. Unda eng yaxshi startaplar, Game Jam g‘oliblari hamda yosh multiplikatorlar tantanali ravishda taqdirlandi. Marosimda xalqaro venchur fondlari — Behold Ventures, United Ventures hamda Ludus VC vakillari ishtirok etdi.',
        RU: 'Одной из важнейших частей мероприятия стала церемония награждения. На ней в торжественной обстановке наградили лучшие стартапы, победителей Game Jam и молодых мультипликаторов. В церемонии приняли участие представители международных венчурных фондов — Behold Ventures, United Ventures и Ludus VC.',
        EN: 'One of the most important parts of the event was the award ceremony. The best startups, Game Jam winners, and young animators were solemnly awarded. Representatives of international venture funds — Behold Ventures, United Ventures, and Ludus VC participated in the ceremony.'
      },
      {
        UZ: 'Ta’kidlanganidek, festival doirasida yuzaga kelgan yangi hamkorliklar va investitsion qiziqishlar mahalliy startaplar uchun xalqaro bozorlarga chiqish imkoniyatlarini yanada kengaytiradi. “GameFest-2026” nafaqat texnologiya va ijodkorlik bayrami, balki O‘zbekistonda game development, animatsiya va kreativ industriyalarni yangi bosqichga olib chiquvchi muhim platforma sifatida e’tirof etildi.',
        RU: 'Как подчеркивалось, новые партнерские отношения и инвестиционные интересы, возникшие в рамках фестиваля, расширят возможности для выхода местных стартапов на международные рынки. «GameFest-2026» признан не только праздником технологий и творчества, но и важной платформой, выводящей индустрию разработки игр, анимации и креативные индустрии в Узбекистане на новый уровень.',
        EN: 'As emphasized, the new partnerships and investment interests that emerged during the festival will further expand the opportunities for local startups to enter international markets. "GameFest-2026" was recognized not only as a celebration of technology and creativity but also as an important platform that takes game development, animation, and creative industries in Uzbekistan to a new level.'
      }
    ],
    author: 'O‘quv markaz.',
    readTime: { UZ: '4 DAQIQA', RU: '4 МИНУТЫ', EN: '4 MIN READ' },
    views: 3120
  },
  {
    id: "1",
    title: {
      UZ: "\"Kelajak muhandislari\" HAKATON tanlovida 1-, 2-, 3-o'rinlar!",
      RU: "1, 2 и 3 места на ХАКАТОНЕ «Инженеры будущего»!",
      EN: "1st, 2nd, and 3rd Places at the 'Future Engineers' HACKATHON!"
    },
    date: {
      day: "20",
      month: { UZ: "APR", RU: "АПР", EN: "APR" },
      full: { UZ: "20-Aprel, 2025", RU: "20 Апреля 2025", EN: "April 20, 2025" },
      weekday: { UZ: "YAK", RU: "ВС", EN: "SUN" }
    },
    image: "/news/hakaton/photo_2025-04-20_23-02-22.jpg",
    gallery: [
      "/news/hakaton/photo_2025-04-20_23-02-22.jpg",
      "/news/hakaton/photo_2025-04-20_23-02-24.jpg",
      "/news/hakaton/photo_2025-04-20_23-02-26.jpg",
      "/news/hakaton/photo_2025-04-20_23-02-26 (2).jpg",
      "/news/hakaton/photo_2025-04-20_23-02-28.jpg",
      "/news/hakaton/photo_2025-04-20_23-02-29.jpg",
      "/news/hakaton/photo_2025-04-20_23-02-30.jpg",
      "/news/hakaton/photo_2025-04-20_23-08-14.jpg",
      "/news/hakaton/photo_2026-05-22_15-49-41.jpg"
    ],
    categories: ["HACKATHON", "ACHIEVEMENTS"],
    category: { UZ: "YUTUQ", RU: "ДОСТИЖЕНИЕ", EN: "ACHIEVEMENT" },
    excerpt: {
      UZ: "“Kelajak muhandislari” xalqaro festivalidagi HAKATON tanlovida “Mirzo Ulug‘bek vorislari” jamoalari barcha sovrinli o‘rinlarni egallashdi!",
      RU: "На ХАКАТОНЕ в рамках международного фестиваля «Инженеры будущего» команды «Наследники Мирзо Улугбека» заняли все призовые места!",
      EN: "At the HACKATHON of the 'Future Engineers' international festival, the 'Mirzo Ulugbek Heirs' teams took all the prize-winning places!"
    },
    summary: {
      UZ: "“Kelajak muhandislari” xalqaro festivalidagi HAKATON tanlovida “Mirzo Ulug‘bek vorislari” jamoalari barcha sovrinli o‘rinlarni egallashdi!",
      RU: "На ХАКАТОНЕ в рамках международного фестиваля «Инженеры будущего» команды «Наследники Мирзо Улугбека» заняли все призовые места!",
      EN: "At the HACKATHON of the 'Future Engineers' international festival, the 'Mirzo Ulugbek Heirs' teams took all the prize-winning places!"
    },
    content: [
      {
        UZ: "“Kelajak muhandislari” xalqaro festivalida o‘tkazilgan “Sanoat korxonalarining muammolariga qaratilgan HAKATON” tanlovida “Mirzo Ulug‘bek vorislari” Data Science o‘quv kursi talabalaridan tuzilgan jamoalar 1-, 2- va 3-o‘rinlarni egallab, festivalda munosib ishtirok etishdi!",
        RU: "На ХАКАТОНЕ, посвященном проблемам промышленных предприятий и проведенном в рамках международного фестиваля «Инженеры будущего», команды из числа студентов курса Data Science «Наследники Мирзо Улугбека» заняли 1, 2 и 3 места, достойно представив академию!",
        EN: "At the HACKATHON focused on the problems of industrial enterprises, held as part of the 'Future Engineers' international festival, teams made up of students from the 'Mirzo Ulugbek Heirs' Data Science course took 1st, 2nd, and 3rd places, participating worthily in the festival!"
      },
      {
        UZ: "🥇 1-o‘rin — “Vetwatch” jamoasi: Narzullayev Dilshod, Oʻktamov Diyorbek, Hotamov Adham, Xudoyberdiyev Xumoyunbek.\n\n🥈 2-o‘rin — “Tahlilchi” jamoasi: Quldoshev Otabek, Musurmonov Behruz, Xafizadinov Usnatdin, Hojiakbar Abdulhakimov.\n\n🥉 3-o‘rin — “Agro Helper” jamoasi: Nazirov A‘zamjon, Dexqonov Muxammadro‘zi, Jo‘raqulova Munisa.",
        RU: "🥇 1-е место — команда «Vetwatch»: Нарзуллаев Дилшод, Уктамов Диёрбек, Хотамов Адхам, Худойбердиев Хумоюнбек.\n\n🥈 2-е место — команда «Tahlilchi»: Кулдошев Отабек, Мусурмонов Бехруз, Хафизадинов Уснатдин, Хожиакбар Абдулхакимов.\n\n🥉 3-е место — команда «Agro Helper»: Назиров Аъзамжон, Дехконов Мухаммадрози, Журакулова Муниса.",
        EN: "🥇 1st place — 'Vetwatch' team: Narzullayev Dilshod, Oʻktamov Diyorbek, Hotamov Adham, Xudoyberdiyev Xumoyunbek.\n\n🥈 2nd place — 'Tahlilchi' team: Quldoshev Otabek, Musurmonov Behruz, Xafizadinov Usnatdin, Hojiakbar Abdulhakimov.\n\n🥉 3rd place — 'Agro Helper' team: Nazirov A‘zamjon, Dexqonov Muxammadro‘zi, Jo‘raqulova Munisa."
      },
      {
        UZ: "Ushbu yutuqlar — sizlarning mehnat, bilim va jamoaviy ishlash qobiliyatingiz mahsuli. “Mirzo Ulug‘bek vorislari” Data Science o‘quv kursi barchangizni chin qalbdan tabriklaydi! Siz bilan faxrlanamiz! Oldinda yana katta yutuqlar kutmoqda!",
        RU: "Эти достижения — результат вашего труда, знаний и умения работать в команде. Учебный курс Data Science «Наследники Мирзо Улугбека» от всей души поздравляет вас всех! Мы гордимся вами! Впереди вас ждут новые большие победы!",
        EN: "These achievements are the product of your hard work, knowledge, and teamwork skills. The 'Mirzo Ulugbek Heirs' Data Science training course sincerely congratulates you all! We are proud of you! Even greater achievements lie ahead!"
      }
    ],
    quote: {
      UZ: "Siz bilan faxrlanamiz! Oldinda yana katta yutuqlar kutmoqda!",
      RU: "Мы гордимся вами! Впереди вас ждут новые большие победы!",
      EN: "We are proud of you! Even greater achievements lie ahead!"
    },
    author: "O‘quv markaz.",
    readTime: { UZ: "3 DAQIQA", RU: "3 МИНУТЫ", EN: "3 MIN READ" }
  },
  {
    id: "2",
    title: {
      UZ: "160 nafar iqtidorli talaba uchun yangi davlat kvotalari ochildi",
      RU: "Открыты новые государственные квоты для 160 талантливых студентов",
      EN: "New State Quotas Opened for 160 Talented Students"
    },
    date: {
      day: "03",
      month: { UZ: "MAY", RU: "МАЙ", EN: "MAY" },
      full: { UZ: "3-may, 2026", RU: "3 мая, 2026", EN: "May 03, 2026" },
      weekday: { UZ: "YAK", RU: "ВС", EN: "SUN" }
    },
    image: "/media/summit.jpg",
    categories: ["GRANTS", "OPPORTUNITY"],
    category: { UZ: "GRANT", RU: "ГРАНТ", EN: "GRANT" },
    excerpt: {
      UZ: "Davlat universiteti talabalari uchun yangi hukumat granti doirasida mutlaqo bepul o'qish imkoniyati — maxsus imtiyozlar bilan.",
      RU: "Невероятная возможность для студентов государственных вузов учиться полностью бесплатно по новой правительственной грантовой программе со специальными привилегиями.",
      EN: "An incredible opportunity for state university students to study completely free of charge under a new government grant initiative with special privileges."
    },
    summary: {
      UZ: "Davlat universiteti talabalari uchun yangi hukumat granti doirasida mutlaqo bepul o'qish imkoniyati — maxsus imtiyozlar bilan.",
      RU: "Невероятная возможность для студентов государственных вузов учиться полностью бесплатно по новой правительственной грантовой программе со специальными привилегиями.",
      EN: "An incredible opportunity for state university students to study completely free of charge under a new government grant initiative with special privileges."
    },
    content: [
      {
        UZ: "Mamlakatning IT kadrlar salohiyatini oshirish bo'yicha tarixiy qaror qabul qilindi: hukumat davlat universitetlari talabalari uchun DScience Academy'da 160 ta to'liq moliyalashtirilgan kvota o'rnini ajratdi.",
        RU: "В знаковом решении по укреплению IT-кадров страны, правительство выделило 160 полностью финансируемых квотных мест для студентов государственных вузов в DScience Academy.",
        EN: "In a landmark decision to bolster the nation's IT workforce, the government has allocated 160 fully-funded quota spots for state university students to study at DScience Academy."
      },
      {
        UZ: "Bu o'rinlar uchun raqobat juda yuqori. Nomzodlar akademik yutuqlar, kuchli matematik poydevor va kamida IELTS 5.5 ball ko'rsatishlari shart. Maqsad — mamlakatning texnologik kelajagini boshqaradigan eng yorqin aqllarni topish va tarbiyalash.",
        RU: "Конкурс на эти места чрезвычайно высок. Кандидаты должны продемонстрировать академические достижения, сильную математическую базу и минимум IELTS 5.5. Цель — выявить и воспитать лучшие умы для технологического будущего страны.",
        EN: "These spots are highly competitive. Candidates must demonstrate academic excellence, strong mathematical foundations, and a minimum IELTS score of 5.5. The goal is to identify and nurture the brightest minds who will lead the country's technological future."
      },
      {
        UZ: "Kvota dasturiga qabul qilingan talabalar qiyoslanmas imtiyozlarga ega bo'ladi: oyiga 1,320,000 so'm stipendiya, zamonaviy noutbuk, kundalik issiq ovqat va akademik mobillik dasturlari. Bu tashabbus top-darajadagi iqtidorlar uchun moliyaviy to'siqlarni butunlay olib tashlaydi.",
        RU: "Студенты, принятые в квотную программу, получат беспрецедентные преимущества: ежемесячную стипендию 1 320 000 сум, современный ноутбук, ежедневное горячее питание и доступ к программам академической мобильности.",
        EN: "Students accepted into the quota program will receive unparalleled benefits: a monthly stipend of 1,320,000 UZS, a modern laptop, daily hot meals, and access to academic mobility programs. This initiative completely removes financial barriers for top-tier talent."
      }
    ],
    quote: {
      UZ: "Bizning vazifamiz — hech bir iqtidorli inson moliyaviy qiyinchiliklar tufayli orqada qolmasin. Agar sizda intilish bo'lsa, biz resurslarni taqdim etamiz.",
      RU: "Наша миссия — чтобы ни один талантливый человек не был ограничен финансовыми трудностями. Если у вас есть стремление, мы предоставим ресурсы.",
      EN: "Our mission is to ensure that no talented individual is held back by financial constraints. If you have the drive, we will provide the resources."
    },
    author: "Ministry of Digital Tech",
    readTime: { UZ: "3 DAQ O'QISH", RU: "3 МИН ЧТЕНИЯ", EN: "3 MIN READ" }
  },
  {
    id: "3",
    title: {
      UZ: "Unreal Engine 5 Masterclass: talabalar 48 soat ichida o'ynaladigan demo yaratdi",
      RU: "Мастеркласс Unreal Engine 5: студенты создали играбельные демо за 48 часов",
      EN: "Unreal Engine 5 Masterclass: Students Build Playable Demos in 48 Hours"
    },
    date: {
      day: "28",
      month: { UZ: "APR", RU: "АПР", EN: "APR" },
      full: { UZ: "28-aprel, 2026", RU: "28 апреля, 2026", EN: "April 28, 2026" },
      weekday: { UZ: "PAY", RU: "ПТ", EN: "FRI" }
    },
    image: "/media/summit2.jpg",
    categories: ["GAMEDEV", "HACKATHON"],
    category: { UZ: "HAKATON", RU: "ХАКАТОН", EN: "HACKATHON" },
    excerpt: {
      UZ: "Intensiv hafta oxiri hakatonimizda GameDev talabalari Unreal Engine 5 imkoniyatlarini sinab, ajoyib, to'liq o'ynaladigan o'yin prototiplarini yaratdi.",
      RU: "Во время нашего интенсивного хакатона выходного дня студенты GameDev раздвинули границы Unreal Engine 5, создав потрясающие, полностью играбельные прототипы игр.",
      EN: "During our intensive weekend hackathon, GameDev students pushed the limits of Unreal Engine 5 to create stunning, fully playable game prototypes."
    },
    summary: {
      UZ: "Intensiv hafta oxiri hakatonimizda GameDev talabalari Unreal Engine 5 imkoniyatlarini sinab, ajoyib, to'liq o'ynaladigan o'yin prototiplarini yaratdi.",
      RU: "Во время нашего интенсивного хакатона выходного дня студенты GameDev раздвинули границы Unreal Engine 5, создав потрясающие, полностью играбельные прототипы игр.",
      EN: "During our intensive weekend hackathon, GameDev students pushed the limits of Unreal Engine 5 to create stunning, fully playable game prototypes."
    },
    content: [
      {
        UZ: "DScience Academy'dagi '48 soatlik Game Jam' ijodkorlik va texnik mahoratning ajoyib namoyishi bo'ldi. Unreal Engine 5, energetik ichimliklar va sof qat'iyat bilan qurollangan GameDev kursantlarimizga noldan o'ynaladigan prototip yaratish vazifasi berildi.",
        RU: "Недавний «48-часовой Game Jam» в DScience Academy стал впечатляющей демонстрацией творчества и технического мастерства. Вооружённые Unreal Engine 5, энергетиками и чистой решимостью, наши студенты GameDev получили задание создать играбельный прототип с нуля.",
        EN: "The recent '48-Hour Game Jam' at DScience Academy was a spectacular display of creativity and technical prowess. Armed with Unreal Engine 5, energy drinks, and pure determination, our GameDev cohort was tasked with building a playable prototype from scratch."
      },
      {
        UZ: "Ustoz-mentorlar tunning har bir soatida mavjud bo'lib, talabalarga murakkab Blueprint mantiqi, yorug'lik optimizatsiyasi va asset integratsiyasi bo'yicha yo'l-yo'riq ko'rsatdi. Natijalar professional darajada bo'ldi — bir nechta jamoalar mahalliy indi-studiyalar qiziqishini uyg'otgan demolar ishlab chiqdi.",
        RU: "Менторы были доступны круглосуточно, помогая студентам с сложной логикой Blueprint, оптимизацией освещения и интеграцией ассетов. Результаты были не ниже профессионального уровня — несколько команд создали демо, которые привлекли внимание местных инди-студий.",
        EN: "Mentors were available around the clock, guiding students through complex Blueprint logic, lighting optimization, and asset integration. The results were nothing short of professional grade, with several teams producing demos that garnered interest from local indie studios."
      },
      {
        UZ: "Bu intensiv, amaliy yondashuv bizning ta'lim falsafamizning asosini tashkil etadi. Real ishlab chiqarish stsenariylarini simulyatsiya qilish orqali talabalar xususiyatlarni ustuvorlashtirish, jamoada samarali ishlash va aniq natijalar berishni o'rganadilar.",
        RU: "Этот интенсивный, практический подход — краеугольный камень нашей образовательной философии. Моделируя реальные рабочие сценарии (в здоровой, поддерживающей среде), студенты учатся расставлять приоритеты, эффективно работать в команде и достигать конкретных результатов.",
        EN: "This intense, hands-on approach is the cornerstone of our educational philosophy. By simulating real-world crunch scenarios (in a healthy, supportive environment), students learn to prioritize features, work efficiently in teams, and deliver tangible results."
      }
    ],
    quote: {
      UZ: "Ikki kun ichida bunday murakkab narsani yarata olaman deb o'ylamagan edim. Adrenalin va mentorlar yordami hamma narsani hal qildi.",
      RU: "Я никогда не думал, что смогу создать что-то настолько сложное всего за два дня. Адреналин и поддержка менторов решили всё.",
      EN: "I never thought I could build something this complex in just two days. The adrenaline and mentor support made all the difference."
    },
    author: "Timur Abdullaev",
    readTime: { UZ: "5 DAQ O'QISH", RU: "5 МИН ЧТЕНИЯ", EN: "5 MIN READ" }
  }
];
