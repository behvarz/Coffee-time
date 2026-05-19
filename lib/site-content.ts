export const languageCodes = ["am", "en", "ru"] as const;

export type LanguageCode = (typeof languageCodes)[number];

export const defaultLanguage: LanguageCode = "am";

export type HeroMoment = {
  text: string;
  start: number;
  end: number;
};

export type Product = {
  name: string;
  description: string;
  price: string;
  tastingNote: string;
};

export type ExperienceItem = {
  title: string;
  description: string;
};

export type InstagramShot = {
  title: string;
  caption: string;
  toneClassName: string;
};

type SiteContent = {
  nav: {
    home: string;
    collection: string;
    ritual: string;
    contact: string;
  };
  actions: {
    orderCoffee: string;
    enter: string;
    followRitual: string;
    from: string;
    menu: string;
    language: string;
    close: string;
  };
  hero: {
    moments: HeroMoment[];
    exploreCollection: string;
    scrollHint: string;
  };
  collection: {
    eyebrow: string;
    title: string;
    description: string;
    products: Product[];
  };
  ritual: {
    eyebrow: string;
    title: string;
    description: string;
    location: string;
    paragraphs: string[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: ExperienceItem[];
  };
  instagram: {
    eyebrow: string;
    title: string;
    description: string;
    shots: InstagramShot[];
  };
  finalCta: {
    title: string;
    subtitle: string;
  };
  footer: {
    description: string;
    rights: string;
  };
};

const toneClasses = [
  "from-[#2A1810] via-[#5C341D] to-[#120B08]",
  "from-[#5C341D] via-[#2A1810] to-[#120B08]",
  "from-[#120B08] via-[#5C341D] to-[#C88A3D]",
  "from-[#2A1810] via-[#120B08] to-[#5C341D]",
  "from-[#120B08] via-[#2A1810] to-[#C88A3D]",
  "from-[#5C341D] via-[#120B08] to-[#2A1810]",
];

export const siteContent: Record<LanguageCode, SiteContent> = {
  am: {
    nav: {
      home: "Գլխավոր",
      collection: "Տեսականի",
      ritual: "Ռիտուալ",
      contact: "Կոնտակտ",
    },
    actions: {
      orderCoffee: "Պատվիրել",
      enter: "Մուտք",
      followRitual: "Հետևել ռիտուալին",
      from: "Սկսած",
      menu: "Մենյու",
      language: "Լեզու",
      close: "Փակել",
    },
    hero: {
      moments: [
        { text: "Արթնացրու Ռիտուալը", start: 0.1, end: 0.25 },
        { text: "Ստեղծված Բույրից, Կրակից և Ժամանակից", start: 0.35, end: 0.5 },
        { text: "Յուրաքանչյուր Բաժակ Պատմություն Է Պահում", start: 0.6, end: 0.75 },
        { text: "Սուրճ, Որը Ստեղծված Է Կիսվելու Համար", start: 0.85, end: 1 },
      ],
      exploreCollection: "Բացահայտիր Տեսականին",
      scrollHint: "Սքրոլ արա՝ ռիտուալը բացահայտելու համար",
    },
    collection: {
      eyebrow: "Տեսականի",
      title: "Ստորագրային Տապակումներ Նուրբ Սուրճի Ռիտուալների Համար",
      description:
        "Պրեմիում սուրճերի ընտրված շարք՝ բազմաշերտ բույրով, թավշյա կառուցվածքով և հիշվող բնավորությամբ։",
      products: [
        {
          name: "Signature Espresso Blend",
          description:
            "Խորը կրեմա և մուգ կակաոյի մարմին՝ նպատակով սկսվող առավոտների համար։",
          price: "$ --",
          tastingNote: "Կակաո / Սև բալ / Մելաս",
        },
        {
          name: "Daily Ritual Roast",
          description:
            "Տաք և հավասարակշռված տապակում՝ կարամելային խորությամբ և մետաքսյա ավարտով։",
          price: "$ --",
          tastingNote: "Տոֆֆի / Պնդուկ / Կարմիր խնձոր",
        },
        {
          name: "Midnight Arabica",
          description:
            "Թավշյա հյուսվածք՝ ծաղկային շեշտով և նուրբ համեմունքային քաղցրությամբ։",
          price: "$ --",
          tastingNote: "Հասմիկ / Սալոր / Համեմված մեղր",
        },
      ],
    },
    ritual: {
      eyebrow: "Սուրճի Ռիտուալ",
      title: "Այնտեղ, Որտեղ Բույրը Դառնում Է Հիշողություն",
      description:
        "Կինեմատիկ հարգանքի տուրք դանդաղ առավոտներին, վարպետությամբ արված սուրճին և Երևանի կիսված սուրճի մշակույթին։",
      location: "Երևան, Հայաստան",
      paragraphs: [
        "Երևանում սուրճը երբեք չի շտապում։ Այն սկսվում է արևածագից առաջ բարձրացող բույրով, հանգիստ կրակով և չափված լցմամբ, որը առօրյան դարձնում է ռիտուալ։",
        "COFFEE TIME-ում յուրաքանչյուր հատիկ ընտրվում է բնավորության համար, տապակվում է խորության համար և պատրաստվում է այնպիսի ջերմության համար, որը մնում է վերջին կումից հետո էլ։",
        "Ընդհանուր սեղաններից մինչև տան դանդաղ առավոտներ՝ մեր արհեստը հարգում է քաղաքի սուրճի մշակույթը՝ նուրբ, առատաձեռն և մարդկանց միմյանց մոտեցնող։",
      ],
    },
    experience: {
      eyebrow: "Փորձառություն",
      title: "Ստեղծված Պրեմիում Ամենօրյա Սուրճի Պահերի Համար",
      items: [
        {
          title: "Խնամքով Ընտրված Հատիկներ",
          description:
            "Սեզոնային խմբաքանակներ՝ ընտրված հստակ ծագման, մաքուր կառուցվածքի և արտահայտիչ բույրի համար։",
        },
        {
          title: "Արհեստավոր Տապակում",
          description:
            "Փոքր խմբաքանակով տապակում՝ քաղցրության, խորության և հավասարակշռված բարդության համար։",
        },
        {
          title: "Պրեմիում Պատրաստման Ռիտուալ",
          description:
            "Ճշգրիտ մեթոդներ և նուրբ գործիքներ՝ բարձր մակարդակի ամենօրյա պատրաստման համար։",
        },
        {
          title: "Ստեղծված Կիսված Պահերի Համար",
          description:
            "Սուրճի փորձառություններ՝ ձևավորված զրույցների, հանդիպումների և հիշվող առավոտների համար։",
        },
      ],
    },
    instagram: {
      eyebrow: "Instagram Ցուցադրություն",
      title: "COFFEE TIME-ի Տեսողական Ռիտուալներ",
      description:
        "Ընտրված վիզուալ մթնոլորտ՝ ներշնչված մեր ջերմ սուրճի մշակույթով և արհեստավոր պահերով։",
      shots: [
        {
          title: "Առավոտյան Լցում",
          caption: "Առաջին լույս, տաք բաժակ, լուռ քաղաք։",
          toneClassName: toneClasses[0],
        },
        {
          title: "Էսպրեսսո Ռիտուալ",
          caption: "Խիտ կրեմա և ոսկեգույն ավարտ։",
          toneClassName: toneClasses[1],
        },
        {
          title: "Արհեստի Սեղան",
          caption: "Գործիքներ, հյուսվածք և վարպետություն։",
          toneClassName: toneClasses[2],
        },
        {
          title: "Երևանյան Տրամադրություն",
          caption: "Կիսված պատմություններ արհեստավոր սուրճի շուրջ։",
          toneClassName: toneClasses[3],
        },
        {
          title: "Տապակման Դետալ",
          caption: "Բուրավետ խորություն յուրաքանչյուր խմբաքանակում։",
          toneClassName: toneClasses[4],
        },
        {
          title: "Երեկոյան Սուրճ",
          caption: "Դանդաղ երեկոներ, թավշյա մարմին, ջերմ փայլ։",
          toneClassName: toneClasses[5],
        },
      ],
    },
    finalCta: {
      title: "Բերեք Ռիտուալը Տուն",
      subtitle: "Պրեմիում սուրճ՝ պատրաստված ջերմ պահերի և անմոռանալի առավոտների համար։",
    },
    footer: {
      description:
        "Պրեմիում տապակված սուրճի հատիկներ, էսպրեսսո, պատրաստման գործիքներ և արհեստավոր սուրճի փորձառություն Երևանում։",
      rights: "Բոլոր իրավունքները պաշտպանված են։",
    },
  },
  en: {
    nav: {
      home: "Home",
      collection: "Collection",
      ritual: "Ritual",
      contact: "Contact",
    },
    actions: {
      orderCoffee: "Order Now",
      enter: "Enter",
      followRitual: "Follow The Ritual",
      from: "From",
      menu: "Menu",
      language: "Language",
      close: "Close",
    },
    hero: {
      moments: [
        { text: "Awaken the Ritual", start: 0.1, end: 0.25 },
        { text: "Crafted From Aroma, Fire and Time", start: 0.35, end: 0.5 },
        { text: "Every Cup Holds a Story", start: 0.6, end: 0.75 },
        { text: "Coffee Meant To Be Shared", start: 0.85, end: 1 },
      ],
      exploreCollection: "Explore the Collection",
      scrollHint: "Scroll to begin the ritual",
    },
    collection: {
      eyebrow: "Collection",
      title: "Signature Roasts For Refined Coffee Rituals",
      description:
        "A curated line of premium coffee crafted for layered aroma, velvet texture, and unforgettable character.",
      products: [
        {
          name: "Signature Espresso Blend",
          description:
            "Bold crema and dark-cacao body shaped for mornings that begin with intention.",
          price: "$ --",
          tastingNote: "Cacao / Black Cherry / Molasses",
        },
        {
          name: "Daily Ritual Roast",
          description:
            "A warm, balanced roast with caramel depth and silky finish for everyday ceremony.",
          price: "$ --",
          tastingNote: "Toffee / Hazelnut / Red Apple",
        },
        {
          name: "Midnight Arabica",
          description:
            "Velvet texture with floral lift and spiced sweetness made for long evening conversations.",
          price: "$ --",
          tastingNote: "Jasmine / Plum / Spiced Honey",
        },
      ],
    },
    ritual: {
      eyebrow: "Coffee Ritual",
      title: "Where Aroma Becomes Memory",
      description:
        "A cinematic tribute to slow mornings, artisan craftsmanship, and shared coffee culture in Yerevan.",
      location: "Yerevan, Armenia",
      paragraphs: [
        "In Yerevan, coffee is never rushed. It begins with aroma rising before sunrise, a quiet flame, and a measured pour that turns routine into ritual.",
        "At COFFEE TIME, every bean is selected for character, roasted for depth, and brewed for warmth that lingers long after the final sip.",
        "From shared tables to slow mornings at home, our craft honors the city's coffee culture: elegant, generous, and made to bring people closer.",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Built For Premium Daily Coffee Moments",
      items: [
        {
          title: "Carefully Selected Beans",
          description:
            "Seasonal lots chosen for distinctive origin, clean structure, and expressive aroma.",
        },
        {
          title: "Artisan Roasting",
          description:
            "Small-batch roasting tuned for sweetness, depth, and balanced complexity.",
        },
        {
          title: "Premium Brewing Ritual",
          description:
            "Precision methods and refined tools designed for elevated daily preparation.",
        },
        {
          title: "Crafted For Shared Moments",
          description:
            "Coffee experiences shaped for conversations, gatherings, and memorable mornings.",
        },
      ],
    },
    instagram: {
      eyebrow: "Instagram Showcase",
      title: "Visual Rituals From COFFEE TIME",
      description:
        "A curated feed atmosphere inspired by our warm coffee culture and artisan moments.",
      shots: [
        {
          title: "Morning Pour",
          caption: "First light, warm cup, quiet city.",
          toneClassName: toneClasses[0],
        },
        {
          title: "Espresso Ritual",
          caption: "Dense crema and a golden finish.",
          toneClassName: toneClasses[1],
        },
        {
          title: "Craft Table",
          caption: "Tools, texture, and craftsmanship.",
          toneClassName: toneClasses[2],
        },
        {
          title: "Yerevan Mood",
          caption: "Shared stories over artisan cups.",
          toneClassName: toneClasses[3],
        },
        {
          title: "Roast Detail",
          caption: "Aromatic depth in every batch.",
          toneClassName: toneClasses[4],
        },
        {
          title: "Evening Coffee",
          caption: "Slow nights, velvet body, warm glow.",
          toneClassName: toneClasses[5],
        },
      ],
    },
    finalCta: {
      title: "Bring The Ritual Home",
      subtitle: "Premium coffee crafted for warm moments and unforgettable mornings.",
    },
    footer: {
      description:
        "Premium roasted coffee beans, espresso, brewing tools, and artisan coffee experience in Yerevan.",
      rights: "All rights reserved.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      collection: "Коллекция",
      ritual: "Ритуал",
      contact: "Контакт",
    },
    actions: {
      orderCoffee: "Заказать",
      enter: "Войти",
      followRitual: "Следовать ритуалу",
      from: "От",
      menu: "Меню",
      language: "Язык",
      close: "Закрыть",
    },
    hero: {
      moments: [
        { text: "Пробуди Ритуал", start: 0.1, end: 0.25 },
        { text: "Создано Из Аромата, Огня И Времени", start: 0.35, end: 0.5 },
        { text: "Каждая Чашка Хранит Историю", start: 0.6, end: 0.75 },
        { text: "Кофе, Которым Хочется Делиться", start: 0.85, end: 1 },
      ],
      exploreCollection: "Открой Коллекцию",
      scrollHint: "Прокрутите, чтобы начать ритуал",
    },
    collection: {
      eyebrow: "Коллекция",
      title: "Фирменная Обжарка Для Изящных Кофейных Ритуалов",
      description:
        "Отобранная линейка премиального кофе с многослойным ароматом, бархатной текстурой и запоминающимся характером.",
      products: [
        {
          name: "Signature Espresso Blend",
          description:
            "Плотная крема и темно-какао профиль для осознанного начала утра.",
          price: "$ --",
          tastingNote: "Какао / Черная вишня / Меласса",
        },
        {
          name: "Daily Ritual Roast",
          description:
            "Теплая, сбалансированная обжарка с карамельной глубиной и шелковистым финишем.",
          price: "$ --",
          tastingNote: "Тофи / Фундук / Красное яблоко",
        },
        {
          name: "Midnight Arabica",
          description:
            "Бархатная текстура с цветочным акцентом и пряной сладостью для долгих вечерних бесед.",
          price: "$ --",
          tastingNote: "Жасмин / Слива / Пряный мед",
        },
      ],
    },
    ritual: {
      eyebrow: "Кофейный Ритуал",
      title: "Там, Где Аромат Становится Памятью",
      description:
        "Кинематографичная история о медленных утраx, ремесленной обжарке и культуре совместного кофе в Ереване.",
      location: "Ереван, Армения",
      paragraphs: [
        "В Ереване кофе не терпит спешки. Все начинается с аромата до рассвета, тихого огня и точного пролива, превращающего привычку в ритуал.",
        "В COFFEE TIME каждое зерно отбирается за характер, обжаривается ради глубины и готовится для тепла, которое остается после последнего глотка.",
        "От общих столов до спокойных домашних утр — наше ремесло чтит кофейную культуру города: элегантную, щедрую и объединяющую людей.",
      ],
    },
    experience: {
      eyebrow: "Опыт",
      title: "Создано Для Премиальных Ежедневных Кофейных Моментов",
      items: [
        {
          title: "Тщательно Отобранные Зерна",
          description:
            "Сезонные лоты с выразительным происхождением, чистой структурой и ярким ароматом.",
        },
        {
          title: "Ремесленная Обжарка",
          description:
            "Малые партии обжарки, настроенные на сладость, глубину и сбалансированную сложность.",
        },
        {
          title: "Премиальный Ритуал Заваривания",
          description:
            "Точные методы и выверенные инструменты для изысканного ежедневного приготовления.",
        },
        {
          title: "Создано Для Совместных Моментов",
          description:
            "Кофейный опыт для разговоров, встреч и запоминающихся утренних часов.",
        },
      ],
    },
    instagram: {
      eyebrow: "Instagram Витрина",
      title: "Визуальные Ритуалы COFFEE TIME",
      description:
        "Кураторская визуальная лента, вдохновленная теплой кофейной культурой и ремесленными моментами.",
      shots: [
        {
          title: "Утренний Пролив",
          caption: "Первый свет, теплая чашка, тихий город.",
          toneClassName: toneClasses[0],
        },
        {
          title: "Эспрессо Ритуал",
          caption: "Плотная крема и золотистый финиш.",
          toneClassName: toneClasses[1],
        },
        {
          title: "Ремесленный Стол",
          caption: "Инструменты, фактура и мастерство.",
          toneClassName: toneClasses[2],
        },
        {
          title: "Настроение Еревана",
          caption: "Общие истории за ремесленным кофе.",
          toneClassName: toneClasses[3],
        },
        {
          title: "Деталь Обжарки",
          caption: "Ароматная глубина в каждой партии.",
          toneClassName: toneClasses[4],
        },
        {
          title: "Вечерний Кофе",
          caption: "Медленные вечера, бархатное тело, теплое сияние.",
          toneClassName: toneClasses[5],
        },
      ],
    },
    finalCta: {
      title: "Принесите Ритуал Домой",
      subtitle:
        "Премиальный кофе, созданный для теплых моментов и незабываемых утр.",
    },
    footer: {
      description:
        "Премиальные обжаренные зерна, эспрессо, инструменты для заваривания и ремесленный кофейный опыт в Ереване.",
      rights: "Все права защищены.",
    },
  },
};
