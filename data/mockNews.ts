export interface NewsItem {
  id: string;
  title: string;
  date: {
    day: string;
    month: string;
    full: string;
    weekday: string;
  };
  image: string;
  categories: string[];
  excerpt: string;
  content: string[];
  quote?: string;
  author: string;
  readTime: string;
}

export const mockNews: NewsItem[] = [
  {
    id: "1",
    title: "DScience Academy wins Top IT Education Award at Tech Horizon Summit",
    date: {
      day: "12",
      month: "MAY",
      full: "May 12, 2026",
      weekday: "SESH"
    },
    image: "/media/hackathon.jpg",
    categories: ["AWARDS", "EDUCATION", "TECH"],
    excerpt: "Our academy has been recognized for outstanding contributions to IT education, emphasizing our focus on practical, real-world portfolio building.",
    content: [
      "The prestigious Tech Horizon Summit recently recognized DScience Academy with the 'Top IT Education Award'. This honor highlights the relentless dedication of our mentors and the hard work of our ambitious students.",
      "Over the past year, we have heavily invested in expanding our curriculum, particularly in the fields of Data Science and Game Development. This strategic push has yielded tremendous results, enabling our students to build production-ready projects before they even graduate.",
      "The judging panel specifically noted our 'uncompromising approach to practical education' and the 'high caliber of student portfolios'. Moving forward, we aim to double down on our industry partnerships, ensuring our graduates always meet the latest market demands."
    ],
    quote: "This investment is a reflection of the significant market opportunity for tech education, particularly in the Central Asian region.",
    author: "Kamronbek Rustamov",
    readTime: "4 MIN READ"
  },
  {
    id: "2",
    title: "New State Quotas Opened for 160 Talented Students",
    date: {
      day: "03",
      month: "MAY",
      full: "May 03, 2026",
      weekday: "YAK"
    },
    image: "/media/summit.jpg",
    categories: ["GRANTS", "OPPORTUNITY"],
    excerpt: "An incredible opportunity for state university students to study completely free of charge under a new government grant initiative with special privileges.",
    content: [
      "In a landmark decision to bolster the nation's IT workforce, the government has allocated 160 fully-funded quota spots for state university students to study at DScience Academy.",
      "These spots are highly competitive. Candidates must demonstrate academic excellence, strong mathematical foundations, and a minimum IELTS score of 5.5. The goal is to identify and nurture the brightest minds who will lead the country's technological future.",
      "Students accepted into the quota program will receive unparalleled benefits: a monthly stipend of 1,320,000 UZS, a modern laptop, daily hot meals, and access to academic mobility programs. This initiative completely removes financial barriers for top-tier talent."
    ],
    quote: "Our mission is to ensure that no talented individual is held back by financial constraints. If you have the drive, we will provide the resources.",
    author: "Ministry of Digital Tech",
    readTime: "3 MIN READ"
  },
  {
    id: "3",
    title: "Unreal Engine 5 Masterclass: Students Build Playable Demos in 48 Hours",
    date: {
      day: "28",
      month: "APR",
      full: "April 28, 2026",
      weekday: "PAY"
    },
    image: "/media/summit2.jpg",
    categories: ["GAMEDEV", "HACKATHON"],
    excerpt: "During our intensive weekend hackathon, GameDev students pushed the limits of Unreal Engine 5 to create stunning, fully playable game prototypes.",
    content: [
      "The recent '48-Hour Game Jam' at DScience Academy was a spectacular display of creativity and technical prowess. Armed with Unreal Engine 5, energy drinks, and pure determination, our GameDev cohort was tasked with building a playable prototype from scratch.",
      "Mentors were available around the clock, guiding students through complex Blueprint logic, lighting optimization, and asset integration. The results were nothing short of professional grade, with several teams producing demos that garnered interest from local indie studios.",
      "This intense, hands-on approach is the cornerstone of our educational philosophy. By simulating real-world crunch scenarios (in a healthy, supportive environment), students learn to prioritize features, work efficiently in teams, and deliver tangible results."
    ],
    quote: "I never thought I could build something this complex in just two days. The adrenaline and mentor support made all the difference.",
    author: "Timur Abdullaev",
    readTime: "5 MIN READ"
  }
];
