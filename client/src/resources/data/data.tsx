import { Category } from '../../utils/enums';

interface Translation {
  sv: string;
  en: string;
}

interface Link {
  url: string;
  label: Translation;
}

export interface ProjectProps {
  id: number;
  title: Translation;
  text: Translation;
  category: Translation;
  images: string[];
  slug: string;
  links: Link[];
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: { sv: 'Arkivet', en: 'Arkivet' },
    text: {
      sv: 'Arkivet är en enkel webbapplikation byggd med React och stylad med styled-components. I appen hittar du gamla artiklar och bilder från Iggesunds IKs spel mellan 1999 och 2014.',
      en: 'Arkivet is a simple web application built with React and styled with styled-components. In the app you can find old articles and images from Iggesunds IKs games between 1999 to 2014.',
    },
    category: Category.Project,
    images: [
      '/images/arkivet-1.jpg',
      '/images/arkivet-2.jpg',
      '/images/arkivet-3.jpg',
    ],
    slug: 'arkivet',
    links: [
      {
        url: 'https://gitlab.com/emilhallberg/arkivet',
        label: { sv: 'Se källkod på GitLab', en: 'View source code on GitLab' },
      },
    ],
  },
  {
    id: 2,
    title: { sv: 'Suphanan', en: 'Suphanan' },
    text: {
      sv: 'Suphanan är en personlig webbplats byggd med React och stylad med styled-components. Webbplatsen är designad av Suphanan Chaphutsa och utvecklad av mig. Syftet är att hon ska visa vem hon är som person och hennes passioner i livet.',
      en: "Suphanan is a personal website built with React and styled with styled-components. The website is designed by Suphanan Chaphutsa and developed by me. It's purpose is for her to show who she is as a person and her passions in life.",
    },
    category: Category.Project,
    images: [
      '/images/suphanan-1.jpg',
      '/images/suphanan-2.jpg',
      '/images/suphanan-3.jpg',
    ],
    slug: 'suphanan',
    links: [
      {
        url: 'https://suphanan.com',
        label: { sv: 'Besök suphanan.com', en: 'Visit suphanan.com' },
      },
      {
        url: 'https://gitlab.com/emilhallberg/suphanan',
        label: { sv: 'Se källkod på GitLab', en: 'View source code on GitLab' },
      },
    ],
  },
  {
    id: 4,
    title: { sv: 'Brawl Gaming', en: 'Brawl Gaming' },
    text: {
      sv: 'Source Empire är ett mjukvaruutvecklande företag som fokuserar på spelindustrin. Deras flaggskeppsprodukt heter Brawl Gaming. Som är en stationär klient som låter spelare satsa pengar på sin egen prestation och spela mot andra människor över hela världen.\n För att marknadsföra Brawl Gaming-plattformen behövde Source Empire designa och utveckla en webbplats som stödde kontoregistrering och hantering via Source Empire API.\n Emil gick med en liten grupp människor för att designa och utveckla hemsidan. I en Google Sprint utarbetade teamet en design, skapade en modell och testade den på potentiella användare. Efter att ha upprepat designen implementerade teamet mock-upen med hjälp av React.js och stilade komponenter. Emil var ansvarig för att skapa och sätta upp projektet, inklusive språkstöd via i18next, och definiera vägarna med hjälp av React Router. Han implementerade också flera återanvändbara komponenter som knappar, ingångar och layout.',
      en: 'Source Empire is a software developing company, which focus on the gaming industry. Their flagship product is called Brawl Gaming. Which is a desktop client that lets gamers bet money on their own performance and play against other people worldwide.\n To advertise the Brawl Gaming platform, Source Empire needed to design and develop a website, which supported account registration and managing via the Source Empire API.\n Emil joined a small group of people to design and develop the website. In a Google Sprint, the team drafted a design, created a mock-up, and tested it on potential users. After iterating the design, the team implemented the mock-up using React.js and styled-components. Emil was responsible for creating and setting up the project, including language support via i18next, and defining the paths using React Router. He also implemented several reusable components such as buttons, inputs, and layout.',
    },
    images: [
      '/images/brawl-gaming-1.jpg',
      '/images/brawl-gaming-2.jpg',
      '/images/brawl-gaming-3.jpg',
    ],
    category: Category.University,
    slug: 'brawl-gaming',
    links: [
      {
        url: 'https://brawlgaming.com',
        label: { sv: 'Besök brawlgaming.com', en: 'Visit brawlgaming.com' },
      },
    ],
  },
  {
    id: 5,
    title: {
      sv: 'Compliant Kubernetes Dashboard',
      en: 'Compliant Kubernetes Dashboard',
    },
    text: {
      sv: 'Elastisys är ett företag som hjälper till att förvandla även de mest säkerhetsinriktade organisationerna till förstklassiga molnbaserade mjukvaruutvecklare och -operatörer. Deras produkt Compliant Kubernetes (CK8s) är en containerplattform av Elastisys byggd för stark säkerhet och full livscykelöverensstämmelse med ISO-27001, GDPR och PCI-DSS. Ck8s är en certifierad Kubernetes-distribution; med andra ord en egensinnig paketering och konfigurering av Kubernetes tillsammans med andra projekt.\n Baserat på feedback från kunder behövde Elastisys skapa en webbapplikation för den molnbaserade CK8s-produkten. Webbapplikationen kräver all funktionalitet som förväntas från den officiella Kubernetes-plattformen, men stöder också alla ytterligare funktioner och integration som CK8s erbjuder.\n Efter att ha utforskat möjligheter för att skapa webbapplikationen deltog Emil i ett team som frontendutvecklare som skulle transformera en befintlig Kubernetes Dashboard (k8sdash) för att passa den Compliant Kubernetes-plattformen. Genom att göra om det grafiska användargränssnittet så att det passar Elastisys grafiska profil. Och även genom att implementera nya funktioner och integrationer mot molnbaserade teknologier som Falco, Opa och Kibana resulterade arbetet i mycket värde för företaget och dess kund, särskilt under försäljningsprocessen.',
      en: 'Elastisys is a company that help transform even the most security-minded organizations into first-class cloud-native software developers and operators. Their product Compliant Kubernetes (CK8s) is a container platform by Elastisys built for strong security and full lifecycle compliance with ISO-27001, GDPR and PCI-DSS. Ck8s is a certified Kubernetes distribution; in other words, an opinionated packaging and configuring Kubernetes together with other projects.\n Based on customer feedback, Elastisys needed to create a web application for the cloud-based CK8s product. The web application requires all the functionality which are expected from the official Kubernetes platform, but also support all the additional features and integration that the CK8s offers.\n After exploring opportunities for creating the web application, Emil took part in a team as a Frontend Developer that would transform an existing Kubernetes Dashboard (k8sdash) to suit the Compliant Kubernetes platform. By redesigning the GUI to fit the graphical profile of Elastisys. And also by implementing new features and integrations against cloud-native technologies such as Falco, Opa, and Kibana the work resulted in much value for the company and its customer, especially during the sales process.',
    },
    category: Category.Work,
    images: [
      '/images/elastisys-1.jpg',
      '/images/elastisys-2.jpg',
      '/images/elastisys-3.jpg',
    ],
    slug: 'compliant-kubernetes-dashboard',
    links: [
      {
        url: 'https://elastisys.com',
        label: { sv: 'Besök elastisys.com', en: 'Visit elastisys.com' },
      },
      {
        url: 'https://fowlit.com/work/compliant-kubernetes-dashboard',
        label: { sv: 'Läs mer på fowlit.com', en: 'Read more on fowlit.com' },
      },
    ],
  },
  {
    id: 6,
    title: {
      sv: 'Ibex',
      en: 'Ibex',
    },
    text: {
      sv: 'Camp Igge är en plats för idrott, rekreation och kultur och drivs av föreningen Iggesunds IK. Camp Igge erbjuder mat, boende, konferensmöjligheter, sport och underhållning i samma område inom en radie av 200 meter. De erbjuder också skräddarsydda träningslägerpaket som tillhandahåller alla nödvändigheter och krav.\n För att sköta alla aktiviteter och evenemang, såsom uthyrning av fotbollsplaner, friidrottsytor, omklädningsrum, konferensrum, husvagns- och tältplatser använder Camp Igge olika system och applikationer. För att hålla koll på alla sina bokningar behövde de ett nytt system som hanterar alla aktiviteter och evenemang i samma system.\n Emil tog ledningen för design och frontendutveckling, och tillsammans med sin kollega orkestrerade de hela systemarkitekturen, valde den tekniska stacken och skapade en GUI-mock-up. Resultatet blev en webbapplikation som heter Ibex. Ibex är ett internt bokningssystem och kryssar i alla rutor som behövs för verksamheten. Den integreras även med bokföringsprogramvaran Björn Lundén (BL) för att hantera kunder och skapa fakturor. Ibex består av nio moduler: Camping, Ytor, Konferens, Omklädningsrum, Artiklar, Produkter, Ekonomi, Statistik och Användarhantering. För att hantera alla uthyrningsbara produkter har Ibex ett varukorgssystem. Därför kan Ibex enkelt skapa en gemensam bokning för alla olika produkter, vilket ger verksamheten en bra överblick och sammanfattning av de bokade artiklarna.',
      en: 'Camp Igge is a place for sport, recreation and culture and is operated by the association of Iggesunds IK. Camp Igge offer food, accommodation, conference facilities, sports and entertainment in the same area within a radius of 200 meters. They also offer tailor-made training camp packages which provide all necessities and requirements.\n To handle all activities and events, such as renting out football pitches, athletics areas, changing rooms, conference rooms, caravan and tent sites, Camp Igge uses various systems and applications. To keep track of all their bookings, they needed a new system that handles all the activities and events in the same system.\n Emil took the lead on design and Frontend Development, and together with his colleague, they orchestrated the complete system architecture, chose the technical stack, and created a GUI mock-up. The result was a web application called Ibex. Ibex is an internal booking system and ticks all the boxes needed for the business. It also integrates with the accounting software Björn Lundén (BL) to manage customers and create invoices. Ibex consists of nine modules: Camping, Areas, Conference, Changing rooms, Articles, Products, Finance, Statistics and User management. To manage all the leasable products, Ibex has a shopping cart system. Therefore, Ibex can easily create a joint booking for all the different products, which gives the business a good overview and summary of the booked items.',
    },
    slug: 'ibex',
    category: Category.Work,
    images: ['/images/ibex-1.jpg', '/images/ibex-2.jpg', '/images/ibex-3.jpg'],
    links: [
      {
        url: 'https://campigge.se',
        label: {
          sv: 'Besök campigge.se',
          en: 'Visit campigge.se',
        },
      },
      {
        url: 'https://ibex.campigge.se',
        label: {
          sv: 'Besök ibex.campigge.se',
          en: 'Visit ibex.campigge.se',
        },
      },
      {
        url: 'https://fowlit.com/work/ibex',
        label: { sv: 'Läs mer på fowlit.com', en: 'Read more on fowlit.com' },
      },
    ],
  },
  {
    id: 7,
    title: {
      sv: 'Zlingit',
      en: 'Zlingit',
    },
    text: {
      sv: 'Zlingit är en lättanvänd marknadsföringsplattform som hjälper ditt företag att skapa starkare relationer med din målgrupp för att öka din lönsamhet genom att använda konversationsmarknadsföring, gamifierad marknadsföring och personlig marknadsföring. Zlingit gör att du kan identifiera vem din målgrupp och följare är och få en bättre förståelse för vem som gillar, kommenterar och följer dina inlägg, besöker din webbplats eller klickar på dina annonser.\n För att stärka bandet mellan klubbar och deras fans skapade Zlingit produkten Gamedayz. Gamedayz gör det möjligt för klubbar att utveckla en mer personlig relation med alla sina fans genom att engagera dem i digitala aktiviteter, mäta deras engagemang och belöna dem för deras lojalitet.\n Emil ansvarade för att skapa en grafisk profil och en prototyp av produkten. Inklusive planering av systemets arkitektur och funktionalitet för olika roller såsom Admin, Klubb och Supporter. Resultatet blev en omfattande interaktiv klickbar prototyp gjord i XD; detta inkluderade flera användarscenarier och flera mikrointeraktioner för att förbättra användarupplevelsen. Prototypen tillförde företaget mycket värde, särskilt i försäljningsprocessen.',
      en: "Zlingit is an easy-to-use marketing platform that helps your business create stronger relationships with your target audience to increase your profitability by using conversation marketing, gamified marketing, and personalised marketing. Zlingit enables you to identify who your target audience and followers are and get a better understanding of who likes, comments, and follows your posts, visits your website or clicks on your ads.\n To strengthen the bond between clubs and their fans, Zlingit created the Gamedayz product. Gamedayz enables clubs to develop a more personal relationship with all their fans by engaging them in digital activities, measuring their commitment, and rewarding them for their loyalty. Emil was responsible for creating a graphical profile and a prototype of the product. Including planning of the system's architecture and functionality for various roles such as Admin, Club and Supporter. The result was a comprehensive interactive clickable prototype made in XD; this included multiple user scenarios and several micro-interactions to enhance the user experience. The prototype brought much value to the company, especially in the sales process.",
    },
    slug: 'zlingit',
    category: Category.Work,
    images: [
      '/images/zlingit-1.jpg',
      '/images/zlingit-2.jpg',
      '/images/zlingit-3.jpg',
    ],
    links: [
      {
        url: 'https://fowlit.com/work/zlingit',
        label: { sv: 'Läs mer på fowlit.com', en: 'Read more on fowlit.com' },
      },
    ],
  },
  {
    id: 8,
    title: {
      sv: 'DataTjej App',
      en: 'DataTjej App',
    },
    text: {
      sv: 'DataTjej är en ideell förening som grundades 1998. Två kvinnliga studenter i Umeå blev inspirerade under ett seminarium om kvinnors välbefinnande inom datautbildningen. Som ett resultat valde de att anordna den första konferensen i Umeå för att skapa en möjlighet att lära känna andra kvinnor som studerar IT-inriktade ämnen och diskutera hur man kan få fler kvinnor att söka till datarelaterade program.\n Under 2019 behövde den årligen hållna DataTjej-konferensen en applikation för att hantera närvaro, schemalägga och distribuera information. Eftersom detta var deras första applikation var den största utmaningen det snäva schemat och lanseringen på App Store och Google Play.\n Emil ansvarade för design och utveckling av iOS-applikationen. För att ta del av en aktivitet utnyttjade applikationen telefonens GPS-funktion för att säkerställa att deltagaren var inom en rimlig radie från aktiviteten. Appen är också integrerad med den ursprungliga iOS-kartan för att möjliggöra vägbeskrivningar och markera intressanta platser. I arbetet ingick även användartestning av designen och även att säkerställa att funktionaliteten fungerade korrekt. Applikationen användes under konferensen och feedbacken från deltagarna visade mycket lovande.',
      en: "DataTjej is a non-profit association founded in 1998. Two female students in Umeå got inspired during a seminar on women's well-being in computer education. As a result, they chose to organise the first conference in Umeå to create an opportunity to get to know other women studying IT-oriented subjects and discuss how to get more women to apply to data related programs.\n In 2019 the annually held DataTjej conference needed an application to manage attendance, schedule and distribute information. Since this was their first application, the biggest challenge was the tight schedule and launching it on the App Store and Google Play.\n Emil was responsible for designing and developing the iOS application. To take attendance for an activity the application took advantage of the phone's GPS functionality to ensure the participant was within a reasonable radius of the activity. The app is also integrated with the native iOS map to enable directions and marking points of interest. The work also included user-testing of the design and also to ensure that the functionality worked correctly. The application was used during the conference, and the feedback provided by the participants showed great promise.",
    },
    slug: 'datatjej',
    category: Category.Work,
    images: [
      '/images/datatjej-1.jpg',
      '/images/datatjej-2.jpg',
      '/images/datatjej-3.jpg',
    ],
    links: [
      {
        url: 'https://fowlit.com',
        label: {
          sv: 'Besök fowlit.com',
          en: 'Visit fowlit.com',
        },
      },
      {
        url: 'https://fowlit.com/work/datatjej-app',
        label: {
          sv: 'Läs mer på fowlit.com',
          en: 'Read more on fowlit.com',
        },
      },
    ],
  },
  {
    id: 9,
    title: {
      sv: 'Fowlit Hemsida',
      en: 'Fowlit Website',
    },
    text: {
      sv: 'Fowlit är ett IT-konsultföretag, som har som mål att leverera presterande webbapplikationer med en fantastisk användarupplevelse. Hos Fowlit ligger fokus på att ge en fantastisk användarupplevelse samtidigt som den har en bra backend. Våra konsulters kunskap och expertis ger Fowlit en stor uppsättning färdigheter som används inom modern webbapplikationsutveckling.\n Tillsammans med en följeslagare grundade Emil Fowlit för att leverera olika presterande webbapplikationer med stort fokus på användarupplevelse. För att locka kunder behövde Emil och hans följeslagare en företagswebbplats med ett CMS för att göra det lättare att uppdatera.\n Efter att ha utvärderat olika teknologier gick Emil och hans kollega med Elixir för backend och Next.js för frontend. Emil började med att utarbeta en modell för webbplatsen och fortsatte senare med att implementera designen genom att bygga återanvändbara komponenter med hjälp av CSS-ramverket stil-komponenter. Som ett resultat är den officiella webbplatsen för företaget Fowlit en Next.js server-side-renderad app byggd med React.js, TypeScript, PostgreSQL och Elixir. Allt innehåll är dynamiskt och hämtas från Elixir-servern via GraphQL vid initial rendering; detta förbättrar dramatiskt prestanda, SEO och förenklar innehållshantering.',
      en: 'Fowlit is an IT consulting firm, which aims to deliver performant web applications with a great user experience. At Fowlit, the focus is on providing a great user experience whilst having a great backend. The knowledge and expertise of our consultants give Fowlit a great set of skills used within modern web application development.\n Together with a companion, Emil founded Fowlit to deliver various performant web applications with a strong focus on user experience. To attract customers, Emil and his companion needed a company website with a CMS to make it easier to update.\n After evaluating different technologies, Emil and his colleague went with Elixir for the backend and Next.js for the frontend. Emil started with drafting a mock-up for the website and later went on to implementing the design by building reusable components using the CSS framework styled-components. As a result, the official website of the company Fowlit is a Next.js server-side rendered app built with React.js, TypeScript, PostgreSQL and Elixir. All content is dynamic and fetched from the Elixir server via GraphQL on initial render; this dramatically improves performance, SEO and simplifies content management.',
    },
    slug: 'fowlit-website',
    category: Category.Work,
    images: [
      '/images/fowlit-1.jpg',
      '/images/fowlit-2.jpg',
      '/images/fowlit-3.jpg',
    ],
    links: [
      {
        url: 'https://fowlit.com',
        label: {
          sv: 'Besök fowlit.com',
          en: 'Visit fowlit.com',
        },
      },
      {
        url: 'https://fowlit.com/work/fowlit-website',
        label: { sv: 'Läs mer på fowlit.com', en: 'Read more on fowlit.com' },
      },
    ],
  },
  {
    id: 10,
    title: {
      sv: 'Link',
      en: 'Link',
    },
    text: {
      sv: 'Senseworks är ett nystartat företag inom FinTech vars uppdrag är att stärka ekonomibranschen med intelligenta analyser som ökar kvalitetsinsikter och leveranshastighet. För att hjälpa användare att få mer insikter från redovisningsdata utvecklade Senseworks Link, ett dataanalysverktyg för revisorer och finansiella rådgivare. Link hjälper användarna genom att minska det personliga beroendet och undvika dubbelarbete genom att ha alla analyser skapade och sparade på ett ställe.\n För att hålla koll på sin planerade lansering av Link-plattformen behövde Senseworks expertis inom modern webbapplikationsutveckling och UI/UX-design för att säkerställa utvecklingsproduktivitet och kodkvalitet.\n Efter att ha diskuterat produkten och dess krav med företagets VD, gick Emil till Senseworks i utvecklingsfasen av Link som Frontend-utvecklare. Han var ansvarig för att strukturera om kodbasen och utveckla viktiga funktioner som filuppladdning, resultat- och balansräkningsanalys och återanvändbara komponenter för att skapa och redigera. Arbetet resulterade i en robust webbapplikationsarkitektur, redo att möta FinTechs krav. Arbetet gav mycket värde för företaget och resulterade även i en varaktig kundrelation.',
      en: 'Senseworks is a start-up company within FinTech whose mission is to empower the financial accounting industry with intelligent analytics that increases quality insights and delivery speed. To help users get more insights from accounting data, Senseworks developed Link, a data analysis tool for auditors and financial advisors. Link aids the users by reducing personal dependence and avoid duplication of work by having all analyses created and saved in one place.\n In order to stay on track with their planned Link platform launch, Senseworks needed expertise within modern web application development and UI/UX design to ensure development productivity and code quality.\n After discussing the product and its requirements with the company CEO, Emil joined Senseworks in the development phase of Link as a Frontend Developer. He was responsible for restructuring the codebase and developing essential functions such as file upload, income and balance statement analysis and reusable components for creating and editing. The work resulted in a robust web application architecture, ready to meet the demands of FinTech. The work provided much value for the company and also resulted in a lasting customer relationship.',
    },
    slug: 'link',
    category: Category.Work,
    images: ['/images/link-1.jpg', '/images/link-3.jpg', '/images/link-2.jpg'],
    links: [
      {
        url: 'https://www.senseworks.io',
        label: {
          sv: 'Besök senseworks.io',
          en: 'Visit senseworks.io',
        },
      },
      {
        url: 'https://www.linkvisualizer.com',
        label: {
          sv: 'Läs mer på linkvisualizer.com',
          en: 'Read more on linkvisualizer.com',
        },
      },
    ],
  },
  {
    id: 11,
    title: {
      sv: 'Smart Table',
      en: 'Smart Table',
    },
    text: {
      sv: 'Till kursen Innovativa mobila tjänster och system på Umeå universitet har vi valde vi att utveckla en applikation vid namn “Smart Table”. Applikationen innehåller en karta över universitets sittplatser och gör det möjligt att enkelt hitta till en ledig plats. På så sätt är det tänkt att studenter ska slippa problemet att gå runt och söka grupprum under en längre tid innan de kan slå sig ned för att plugga.\n Applikationen är byggd med React Native och fungerar med hjälp av LoRa sensorer. Datan från sensorerna avgör om bord är upptagna eller inte samt vilken ljudnivå det är i korridoren för tillfället.',
      en: "For the course Innovative mobile services and the system at Umeå University, we chose to develop an application called “Smart Table”. The application contains a map of university seats and makes it possible to find a vacant seat easily. In this way, it is intended that students will avoid the problem of walking around and looking for group rooms for a more extended period of time before they can settle down to study.\n The application is built with React Native and works with the help of LoRa sensors. The sensors' data determines whether the table is occupied or not, and what sound level there is in the corridor at the moment. ",
    },
    slug: 'smart-table',
    category: Category.University,
    images: [
      '/images/smart-table-1.jpg',
      '/images/smart-table-2.jpg',
      '/images/smart-table-3.jpg',
    ],
    links: [
      {
        url: 'https://github.com/emilhallberg/Smart-Table',
        label: { sv: 'Se källkod på GitHub', en: 'View source code on GitHub' },
      },
    ],
  },
  {
    id: 12,
    title: {
      sv: 'Nasdaq',
      en: 'Nasdaq',
    },
    text: {
      sv: 'Nasdaq, ett amerikanskt multinationellt företag för finansiella tjänster som äger och driver Nasdaq-börsen i USA och åtta europeiska börser. 2019 förvärvade Nasdaq Technology det finansiella teknologiföretaget (FinTech) Cinnober beläget i Umeå. Cinnober specialiserade sig på handels- och clearingteknologi, och betjänade börser och clearinghus globalt.\n Övertagandet innebar att Cinnober-produkterna behövde omprofileras; med andra ord, implementering av User Interface Framework - ett UI-bibliotek baserat på Nasdaqs stilguider. Men för att bättre förstå hur implementeringen påverkar deras produkt och utvecklare måste Nasdaq utvärdera effektiviteten av att implementera ett UI-bibliotek i FinTech-applikationer.\n Emil gick med på Nasdaq för att delta i ett forskningsprojekt för att utforska metoder för att utvärdera effektiviteten av att implementera ett UI-bibliotek i FinTech-applikationer genom att studera kodkohesion, koppling, läsbarhet och utvärdera utvecklarens erfarenhet. Resultatet visade att implementering av ett UI-bibliotek i FinTech-applikationer förbättrade kodkvaliteten, uppfyllde FinTech UI-kraven och uppfattades som hanterbart av utvecklarna.',
      en: "Nasdaq, an American multinational financial services corporation that owns and operates the Nasdaq stock market in the United States and eight European Stock Exchanges. In 2019 Nasdaq Technology acquired the financial technology (FinTech) company Cinnober located in Umeå. Cinnober specialised in trading and clearing technology, serving exchanges and clearinghouses globally.\n The takeover meant that the Cinnober products needed rebranding; in other words, implementing the User Interface Framework - a UI library based on Nasdaq's style guides. However, to better understand how the implementation affects their product and developers, Nasdaq needs to evaluate the effectiveness of implementing a UI library in FinTech applications.\n Emil joined Nasdaq to participate in a research project to explore methods for evaluating the effectiveness of implementing a UI library in FinTech applications by studying code cohesion, coupling, readability, and assessing developer experience. The result showed that implementing a UI library in FinTech applications improved code quality, fulfilled the FinTech UI requirements, and was perceived as manageable by the developers.",
    },
    slug: 'nasdaq',
    category: Category.Thesis,
    images: [
      '/images/nasdaq-1.png',
      '/images/nasdaq-2.png',
      '/images/nasdaq-3.png',
    ],
    links: [
      {
        url: 'https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1566586&dswid=-3153',
        label: { sv: 'Läs rapporten på DiVA', en: 'Read the report on DiVA' },
      },
    ],
  },
  {
    id: 13,
    title: {
      sv: 'Iggarna',
      en: 'Iggarna',
    },
    text: {
      sv: 'Iggesunds IK är en svensk idrottsförening belägen i Iggesund, mest känd för sitt pappersbruk. Iggesunds IK är byggt på stabila grunder med andan från "pappersbruket". När svårigheter ersatt framgångar har klubben ändå hela tiden utvecklats och varit viktig för ungas sociala fostran, gemenskap och välmående.\n Genom sin 100-åriga historia har Iggesunds IK flitigt dokumenterat sin historia genom att skriva artiklar och ta bilder. De var också snabba med att anpassa sig till digitaliseringen och redan 1999 fick de sin hemsida publicerad. Men 2014 gick artiklar och bilder från spel mellan 1999 och 2014 offline eftersom en ny webbplats ersatte den gamla. \n Genom att ha en lokal koppling till klubben tog Emil ledningen för att rädda offlinedata och efter att ha fått den gamla databasen konverterade han den till en ny PostgreSQL-databas. Efteråt designade och utvecklade Emil en webbapplikation i Next.js. I appen kan användaren söka efter gamla artiklar och filtrera efter kategori, lag eller spelare.',
      en: 'Iggesunds IK is a Swedish sports club located in Iggesund, mostly known for its paper mill. Iggesunds IK is built on stable foundations with the spirit of the "paper mill". When difficulties replaced success, the club has nevertheless constantly developed and has been important for young people\'s social education, sense of community and wellness.\n Throughout their 100 year history, Iggesunds IK has diligently documented their history by writing articles and taking pictures. They were also quick to adapt to digitalisation, and as early as 1999, they had their website published. However, in 2014, articles and images from games between 1999 to 2014 went offline since a new website replaced the old one.\n By having a local connection with the club, Emil took the lead on salvaging the offline data and after receiving the old database, he converted it into a new PostgreSQL database. Afterwards, Emil designed and developed a web application in Next.js. In the app, the user can search for old articles and filter by category, team, or player.',
    },
    slug: 'iggarna',
    category: Category.Project,
    images: [
      '/images/iggarna-1.png',
      '/images/iggarna-2.png',
      '/images/iggarna-3.png',
    ],
    links: [
      {
        url: 'https://iggarna.com',
        label: {
          sv: 'Besök iggarna.com',
          en: 'Visit iggarna.com',
        },
      },
      {
        url: 'https://gitlab.com/emilhallberg/iggarna',
        label: { sv: 'Se källkod på GitLab', en: 'View source code on GitLab' },
      },
    ],
  },
];
