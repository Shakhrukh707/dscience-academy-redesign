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
}

export const mockNews: NewsItem[] = [
  {
    id: "1",
    title: {
      UZ: "DScience Academy Tech Horizon sammitida eng yaxshi IT ta'lim mukofotini qo'lga kiritdi",
      RU: "DScience Academy получила награду за лучшее IT-образование на саммите Tech Horizon",
      EN: "DScience Academy wins Top IT Education Award at Tech Horizon Summit"
    },
    date: {
      day: "12",
      month: { UZ: "MAY", RU: "МАЙ", EN: "MAY" },
      full: { UZ: "12-may, 2026", RU: "12 мая, 2026", EN: "May 12, 2026" },
      weekday: { UZ: "SESH", RU: "ВТ", EN: "TUE" }
    },
    image: "/media/hackathon.jpg",
    categories: ["AWARDS", "EDUCATION", "TECH"],
    category: { UZ: "MUKOFOT", RU: "НАГРАДА", EN: "AWARD" },
    excerpt: {
      UZ: "Akademiyamiz IT ta'limga qo'shgan ulkan hissasi uchun tan olindi — amaliy, real portfolio yaratishga yo'naltirilgan yondashuvimiz yuqori baholandi.",
      RU: "Наша академия получила признание за выдающийся вклад в IT-образование, подчёркивающее наш фокус на практическом построении портфолио.",
      EN: "Our academy has been recognized for outstanding contributions to IT education, emphasizing our focus on practical, real-world portfolio building."
    },
    summary: {
      UZ: "Akademiyamiz IT ta'limga qo'shgan ulkan hissasi uchun tan olindi — amaliy, real portfolio yaratishga yo'naltirilgan yondashuvimiz yuqori baholandi.",
      RU: "Наша академия получила признание за выдающийся вклад в IT-образование, подчёркивающее наш фокус на практическом построении портфолио.",
      EN: "Our academy has been recognized for outstanding contributions to IT education, emphasizing our focus on practical, real-world portfolio building."
    },
    content: [
      {
        UZ: "Nufuzli Tech Horizon sammitida DScience Academy 'Eng yaxshi IT ta'lim' mukofoti bilan taqdirlandi. Bu mukofot ustozlarimizning tinimsiz fidoyiligi va shijoatli talabalarimizning mehnati e'tirofidir.",
        RU: "На престижном саммите Tech Horizon академия DScience была удостоена награды «Лучшее IT-образование». Эта честь подчёркивает неустанную преданность наших наставников и упорный труд наших амбициозных студентов.",
        EN: "The prestigious Tech Horizon Summit recently recognized DScience Academy with the 'Top IT Education Award'. This honor highlights the relentless dedication of our mentors and the hard work of our ambitious students."
      },
      {
        UZ: "O'tgan yil davomida biz o'quv dasturimizni, ayniqsa Data Science va Game Development yo'nalishlarida sezilarli kengaytirdik. Bu strategik qadam ajoyib natijalarga olib keldi — talabalarimiz bitirmasdan oldin ishlab chiqarishga tayyor loyihalar yaratmoqda.",
        RU: "В прошлом году мы активно расширяли учебную программу, особенно в области Data Science и GameDev. Этот стратегический рывок принёс потрясающие результаты — наши студенты создают проекты уровня production ещё до выпуска.",
        EN: "Over the past year, we have heavily invested in expanding our curriculum, particularly in the fields of Data Science and Game Development. This strategic push has yielded tremendous results, enabling our students to build production-ready projects before they even graduate."
      },
      {
        UZ: "Hakamlar hay'ati bizning 'amaliy ta'limga murosasiz yondashuvimiz' va 'talabalar portfoliolarining yuqori sifati'ni alohida ta'kidladi. Keyingi bosqichda biz sanoat hamkorliklari sonini ikki baravar oshirishni maqsad qildik.",
        RU: "Жюри особо отметило наш «бескомпромиссный подход к практическому образованию» и «высокий уровень студенческих портфолио». В дальнейшем мы планируем удвоить число индустриальных партнёрств.",
        EN: "The judging panel specifically noted our 'uncompromising approach to practical education' and the 'high caliber of student portfolios'. Moving forward, we aim to double down on our industry partnerships, ensuring our graduates always meet the latest market demands."
      }
    ],
    quote: {
      UZ: "Bu investitsiya texnologik ta'lim sohasidagi ulkan bozor imkoniyatlarini, ayniqsa Markaziy Osiyo mintaqasidagi salohiyatni aks ettiradi.",
      RU: "Эта инвестиция отражает значительные рыночные возможности в сфере технологического образования, особенно в Центральноазиатском регионе.",
      EN: "This investment is a reflection of the significant market opportunity for tech education, particularly in the Central Asian region."
    },
    author: "Kamronbek Rustamov",
    readTime: { UZ: "4 DAQ O'QISH", RU: "4 МИН ЧТЕНИЯ", EN: "4 MIN READ" }
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
