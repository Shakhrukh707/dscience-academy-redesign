const fs = require('fs');

let content = fs.readFileSync('data/mockNews.ts', 'utf8');

// 1. Add fields to interface
content = content.replace(
  '  readTime: LocalizedText;\n}',
  '  readTime: LocalizedText;\n  views?: number;\n  gallery?: string[];\n}'
);

// 2. Add GameFest item
const gameFestItem = `  {
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
    author: 'DScience Academy',
    readTime: { UZ: '4 DAQIQA', RU: '4 МИНУТЫ', EN: '4 MIN READ' },
    views: 3120
  },`;

content = content.replace(
  'export const mockNews: NewsItem[] = [',
  'export const mockNews: NewsItem[] = [\n' + gameFestItem
);

// 3. Add random views to existing items securely
content = content.replace(/readTime: \{ UZ: '(\d+) DAQIQA', RU: '(\d+) МИНУТ\S?', EN: '(\d+) MIN READ' \}\n  \},/g, (match) => {
  const randomViews = Math.floor(Math.random() * (4500 - 800 + 1) + 800);
  return `${match.slice(0, -3)},\n    views: ${randomViews}\n  },`;
});

// Since the regex above might be brittle, let's do something simpler:
// find all instances of "readTime: { ... }" and insert "views: XXX" after it, if it's not the gamefest item
let parts = content.split('readTime: {');
for (let i = 1; i < parts.length; i++) {
  if (!parts[i].includes('views:')) {
    let subParts = parts[i].split('}');
    const randomViews = Math.floor(Math.random() * (4500 - 800 + 1) + 800);
    // Insert view count after the closing bracket of readTime object
    subParts[0] = subParts[0] + '},\n    views: ' + randomViews;
    parts[i] = subParts.join('');
  } else {
    // Already has views, re-assemble normally
    let subParts = parts[i].split('}');
    subParts[0] = subParts[0] + '}';
    parts[i] = subParts.join('');
  }
}
content = parts.join('readTime: {');

fs.writeFileSync('data/mockNews.ts', content);
console.log('Successfully updated mockNews.ts');
