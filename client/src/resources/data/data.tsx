import { Category } from "../../utils/enums";

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
  text: {
    summary: Translation;
    contribution: Translation;
    outcome: Translation;
  };
  category: Translation;
  images: string[];
  slug: string;
  links: Link[];
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: { sv: "Arkivet", en: "Arkivet" },
    text: {
      summary: {
        sv: "Ett webbarkiv med Iggesunds IK:s artiklar och matchbilder från 1999–2014.",
        en: "A web archive of Iggesunds IK articles and match photos from 1999–2014.",
      },
      contribution: {
        sv: "Jag byggde applikationen med React och styled-components.",
        en: "I built the application with React and styled-components.",
      },
      outcome: {
        sv: "Applikationen gör föreningens äldre artiklar och bilder tillgängliga att bläddra bland.",
        en: "The application makes the club’s older articles and photos available to browse.",
      },
    },
    category: Category.Project,
    images: [
      "/images/arkivet-1.jpg",
      "/images/arkivet-2.jpg",
      "/images/arkivet-3.jpg",
    ],
    slug: "arkivet",
    links: [
      {
        url: "https://gitlab.com/emilhallberg/arkivet",
        label: { sv: "Se källkod på GitLab", en: "View source code on GitLab" },
      },
    ],
  },
  {
    id: 2,
    title: { sv: "Suphanan", en: "Suphanan" },
    text: {
      summary: {
        sv: "En personlig webbplats där Suphanan Chaphutsa presenterar sina intressen och passioner.",
        en: "A personal website for Suphanan Chaphutsa to share her interests and passions.",
      },
      contribution: {
        sv: "Jag utvecklade webbplatsen i React med styled-components utifrån Suphanans design.",
        en: "I developed the website in React with styled-components, based on Suphanan’s design.",
      },
      outcome: {
        sv: "En personlig portfolio som samlar hennes design och berättelse på webben.",
        en: "A personal portfolio that brings her design and story together online.",
      },
    },
    category: Category.Project,
    images: [
      "/images/suphanan-1.jpg",
      "/images/suphanan-2.jpg",
      "/images/suphanan-3.jpg",
    ],
    slug: "suphanan",
    links: [
      {
        url: "https://suphanan.com",
        label: { sv: "Besök suphanan.com", en: "Visit suphanan.com" },
      },
      {
        url: "https://gitlab.com/emilhallberg/suphanan",
        label: { sv: "Se källkod på GitLab", en: "View source code on GitLab" },
      },
    ],
  },
  {
    id: 4,
    title: { sv: "Brawl Gaming", en: "Brawl Gaming" },
    text: {
      summary: {
        sv: "En marknadsföringswebbplats för Brawl Gaming, Source Empires spelplattform.",
        en: "A marketing website for Brawl Gaming, Source Empire’s competitive gaming platform.",
      },
      contribution: {
        sv: "Jag deltog i design och användartester under en Google Sprint och byggde sedan grunden i React, språkstöd med i18next, navigering och återanvändbara gränssnittskomponenter.",
        en: "I helped design and test the concept in a Google Sprint, then built the React foundation, language support with i18next, routing, and reusable interface components.",
      },
      outcome: {
        sv: "Webbplatsen stödde registrering och kontohantering via Source Empires API.",
        en: "The website supported account registration and management through the Source Empire API.",
      },
    },
    images: [
      "/images/brawl-gaming-1.jpg",
      "/images/brawl-gaming-2.jpg",
      "/images/brawl-gaming-3.jpg",
    ],
    category: Category.University,
    slug: "brawl-gaming",
    links: [],
  },
  {
    id: 5,
    title: {
      sv: "Compliant Kubernetes Dashboard",
      en: "Compliant Kubernetes Dashboard",
    },
    text: {
      summary: {
        sv: "En webbaserad kontrollpanel för Elastisys plattform Compliant Kubernetes.",
        en: "A web dashboard for Elastisys’s Compliant Kubernetes platform.",
      },
      contribution: {
        sv: "Som en del av frontendteamet anpassade jag en befintlig Kubernetes-kontrollpanel till Elastisys grafiska profil och byggde integrationer med Falco, Opa och Kibana.",
        en: "As part of the frontend team, I adapted an existing Kubernetes dashboard to Elastisys’s visual identity and added integrations with Falco, Opa, and Kibana.",
      },
      outcome: {
        sv: "En kontrollpanel anpassad till plattformens funktioner och integrationer, med stöd för kunddemonstrationer och försäljning.",
        en: "A dashboard tailored to the platform’s additional features and integrations, supporting customer demonstrations and the sales process.",
      },
    },
    category: Category.Work,
    images: [
      "/images/elastisys-1.jpg",
      "/images/elastisys-2.jpg",
      "/images/elastisys-3.jpg",
    ],
    slug: "compliant-kubernetes-dashboard",
    links: [
      {
        url: "https://elastisys.com",
        label: { sv: "Besök elastisys.com", en: "Visit elastisys.com" },
      },
    ],
  },
  {
    id: 6,
    title: {
      sv: "Ibex",
      en: "Ibex",
    },
    text: {
      summary: {
        sv: "Ett internt bokningssystem för Camp Igges boende, idrottsanläggningar och evenemang.",
        en: "An internal booking system for Camp Igge’s accommodation, sports facilities, and events.",
      },
      contribution: {
        sv: "Jag ledde design och frontendutveckling. Tillsammans med en kollega planerade jag arkitekturen, valde teknik och tog fram gränssnittsprototyper.",
        en: "I led design and frontend development. Together with a colleague, I planned the architecture, selected the technology stack, and created interface prototypes.",
      },
      outcome: {
        sv: "Ibex samlade bokningar i ett system med nio moduler, en gemensam varukorg och integration med Björn Lundén för kundhantering och fakturering.",
        en: "Ibex brought bookings into one system with nine modules, a shared cart, and integration with Björn Lundén for customer records and invoicing.",
      },
    },
    slug: "ibex",
    category: Category.Work,
    images: ["/images/ibex-1.jpg", "/images/ibex-2.jpg", "/images/ibex-3.jpg"],
    links: [
      {
        url: "https://campigge.se",
        label: {
          sv: "Besök campigge.se",
          en: "Visit campigge.se",
        },
      },
      {
        url: "https://ibex.campigge.se",
        label: {
          sv: "Besök ibex.campigge.se",
          en: "Visit ibex.campigge.se",
        },
      },
    ],
  },
  {
    id: 7,
    title: {
      sv: "Zlingit",
      en: "Zlingit",
    },
    text: {
      summary: {
        sv: "En interaktiv prototyp för Gamedayz, Zlingits plattform för att knyta idrottsföreningar närmare sina supportrar.",
        en: "An interactive prototype for Gamedayz, Zlingit’s platform for connecting sports clubs with their fans.",
      },
      contribution: {
        sv: "Jag skapade den grafiska profilen och planerade gränssnitt och funktionalitet för administratörer, föreningar och supportrar i Adobe XD.",
        en: "I created the visual identity and planned the interface and functionality for administrators, clubs, and supporters in Adobe XD.",
      },
      outcome: {
        sv: "En klickbar prototyp med användarscenarier och mikrointeraktioner som användes för att presentera produkten i försäljningsprocessen.",
        en: "A clickable prototype with user scenarios and microinteractions that supported product presentations during the sales process.",
      },
    },
    slug: "zlingit",
    category: Category.Work,
    images: [
      "/images/zlingit-1.jpg",
      "/images/zlingit-2.jpg",
      "/images/zlingit-3.jpg",
    ],
    links: [],
  },
  {
    id: 8,
    title: {
      sv: "DataTjej App",
      en: "DataTjej App",
    },
    text: {
      summary: {
        sv: "En iOS-app för närvaro, schema och information på DataTjej-konferensen 2019.",
        en: "An iOS app for attendance, schedules, and information at the 2019 DataTjej conference.",
      },
      contribution: {
        sv: "Jag designade, utvecklade och användartestade appen, inklusive GPS-baserad närvarohantering och kartor för vägbeskrivningar och intressanta platser.",
        en: "I designed, developed, and user-tested the app, including GPS-based attendance and native maps for directions and points of interest.",
      },
      outcome: {
        sv: "Appen användes under konferensen och fick lovande återkoppling från deltagarna.",
        en: "The app was used during the conference and received promising feedback from participants.",
      },
    },
    slug: "datatjej",
    category: Category.Work,
    images: [
      "/images/datatjej-1.jpg",
      "/images/datatjej-2.jpg",
      "/images/datatjej-3.jpg",
    ],
    links: [],
  },
  {
    id: 9,
    title: {
      sv: "Fowlit Hemsida",
      en: "Fowlit Website",
    },
    text: {
      summary: {
        sv: "En företagswebbplats med innehållshantering för Fowlit, konsultföretaget jag var med och grundade.",
        en: "A company website and content management system for Fowlit, the consultancy I co-founded.",
      },
      contribution: {
        sv: "Jag tog fram webbplatsens design och återanvändbara komponenter med styled-components. Tillsammans med en kollega valde jag Next.js för frontend och Elixir för backend.",
        en: "I created the website mock-up and reusable components with styled-components. Together with a colleague, I selected Next.js for the frontend and Elixir for the backend.",
      },
      outcome: {
        sv: "En serverrenderad webbplats med TypeScript, PostgreSQL och dynamiskt innehåll hämtat via GraphQL.",
        en: "A server-rendered website with TypeScript, PostgreSQL, and dynamic content delivered through GraphQL.",
      },
    },
    slug: "fowlit-website",
    category: Category.Work,
    images: [
      "/images/fowlit-1.jpg",
      "/images/fowlit-2.jpg",
      "/images/fowlit-3.jpg",
    ],
    links: [],
  },
  {
    id: 10,
    title: {
      sv: "Link",
      en: "Link",
    },
    text: {
      summary: {
        sv: "En plattform för ekonomisk analys från Senseworks för revisorer och finansiella rådgivare.",
        en: "A financial analysis platform from Senseworks for auditors and financial advisors.",
      },
      contribution: {
        sv: "Jag strukturerade om frontend och utvecklade filuppladdning, resultat- och balansräkningsanalys samt återanvändbara redigeringskomponenter.",
        en: "I restructured the frontend and developed file uploads, income statement and balance sheet analysis, and reusable editing components.",
      },
      outcome: {
        sv: "En frontendarkitektur inför plattformens planerade lansering och början på en långvarig kundrelation.",
        en: "A frontend architecture for the planned platform launch and the start of a lasting customer relationship.",
      },
    },
    slug: "link",
    category: Category.Work,
    images: ["/images/link-1.jpg", "/images/link-3.jpg", "/images/link-2.jpg"],
    links: [
      {
        url: "https://www.senseworks.io",
        label: {
          sv: "Besök senseworks.io",
          en: "Visit senseworks.io",
        },
      },
    ],
  },
  {
    id: 11,
    title: {
      sv: "Smart Table",
      en: "Smart Table",
    },
    text: {
      summary: {
        sv: "Ett universitetsprojekt som hjälper studenter att hitta lediga studieplatser på campus.",
        en: "A university project that helps students find available study spaces on campus.",
      },
      contribution: {
        sv: "Som en del av projektgruppen var jag med och utvecklade en React Native-applikation kopplad till LoRa-sensorer.",
        en: "As part of the project team, I helped develop a React Native application connected to LoRa sensors.",
      },
      outcome: {
        sv: "En karta över studieplatser som använder sensordata för att visa om bord är upptagna och vilken ljudnivå det är i korridoren.",
        en: "A map of study spaces using sensor data to show table occupancy and corridor noise levels.",
      },
    },
    slug: "smart-table",
    category: Category.University,
    images: [
      "/images/smart-table-1.jpg",
      "/images/smart-table-2.jpg",
      "/images/smart-table-3.jpg",
    ],
    links: [
      {
        url: "https://github.com/emilhallberg/Smart-Table",
        label: { sv: "Se källkod på GitHub", en: "View source code on GitHub" },
      },
    ],
  },
  {
    id: 12,
    title: {
      sv: "Nasdaq",
      en: "Nasdaq",
    },
    text: {
      summary: {
        sv: "Ett forskningsprojekt som utvärderade ett UI-bibliotek för Nasdaqs finansiella applikationer.",
        en: "A research project evaluating a UI library for Nasdaq’s financial technology applications.",
      },
      contribution: {
        sv: "Jag undersökte utvärderingsmetoder utifrån kodkohesion, koppling, läsbarhet och utvecklarupplevelse.",
        en: "I explored evaluation methods based on code cohesion, coupling, readability, and developer experience.",
      },
      outcome: {
        sv: "Studien visade förbättrad kodkvalitet, att kraven på FinTech-gränssnitt uppfylldes och att lösningen uppfattades som hanterbar av utvecklarna.",
        en: "The study found improvements in code quality, alignment with FinTech interface requirements, and a manageable developer experience.",
      },
    },
    slug: "nasdaq",
    category: Category.Thesis,
    images: [
      "/images/nasdaq-1.png",
      "/images/nasdaq-2.png",
      "/images/nasdaq-3.png",
    ],
    links: [
      {
        url: "https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1566586&dswid=-3153",
        label: { sv: "Läs rapporten på DiVA", en: "Read the report on DiVA" },
      },
    ],
  },
  {
    id: 13,
    title: {
      sv: "Iggarna",
      en: "Iggarna",
    },
    text: {
      summary: {
        sv: "Ett sökbart arkiv som bevarar Iggesunds IK:s artiklar och bilder från 1999–2014.",
        en: "A searchable archive preserving Iggesunds IK’s articles and photos from 1999–2014.",
      },
      contribution: {
        sv: "Jag räddade den gamla webbplatsens data, migrerade den till PostgreSQL och designade och utvecklade en ny applikation i Next.js.",
        en: "I recovered the old website’s data, migrated it to PostgreSQL, and designed and developed a new application in Next.js.",
      },
      outcome: {
        sv: "Föreningens historiska material blev tillgängligt igen, med sökning och filter för kategori, lag och spelare.",
        en: "The club’s historical material became accessible again, with search and filters for category, team, and player.",
      },
    },
    slug: "iggarna",
    category: Category.Project,
    images: [
      "/images/iggarna-1.png",
      "/images/iggarna-2.png",
      "/images/iggarna-3.png",
    ],
    links: [
      {
        url: "https://iggarna.com",
        label: {
          sv: "Besök iggarna.com",
          en: "Visit iggarna.com",
        },
      },
      {
        url: "https://gitlab.com/emilhallberg/iggarna",
        label: { sv: "Se källkod på GitLab", en: "View source code on GitLab" },
      },
    ],
  },
  {
    id: 13,
    title: {
      sv: "Creator Studio - Brandsite",
      en: "Creator Studio - Brandsite",
    },
    text: {
      summary: {
        sv: "Varumärkeswebbplatsen som presenterar Creator Studio, H&M-gruppens print-on-demand-plattform.",
        en: "The brand website introducing Creator Studio, H&M Group’s print-on-demand platform.",
      },
      contribution: {
        sv: "Jag bidrog till webbplatsens arkitektur och design med Next.js, TypeScript och Sanity för innehållshantering och sökbarhet.",
        en: "I contributed to the site’s architecture and design using Next.js, TypeScript, and Sanity for content management and search visibility.",
      },
      outcome: {
        sv: "En webbplats med innehållshantering som fick 100/100 i Lighthouse.",
        en: "A content-managed website that scored 100/100 in Lighthouse.",
      },
    },
    slug: "creator-studio-site",
    category: Category.Work,
    images: [
      "/images/creator-studio-site-1.png",
      "/images/creator-studio-site-2.png",
      "/images/creator-studio-site-3.png",
    ],
    links: [
      {
        url: "https://creatorstudio.com",
        label: {
          sv: "Besök creatorstudio.com",
          en: "Visit creatorstudio.com",
        },
      },
    ],
  },
  {
    id: 14,
    title: {
      sv: "Creator Studio - True Blanks",
      en: "Creator Studio - True Blanks",
    },
    text: {
      summary: {
        sv: "En webbplats för True Blanks, klädvarumärket skapat för Creator Studios print-on-demand-tjänst.",
        en: "A website for True Blanks, the clothing brand created for Creator Studio’s print-on-demand service.",
      },
      contribution: {
        sv: "Jag bidrog till webbplatsens arkitektur och design med Next.js, TypeScript och Sanity för innehållshantering och sökbarhet.",
        en: "I contributed to the website’s architecture and design using Next.js, TypeScript, and Sanity for content management and search visibility.",
      },
      outcome: {
        sv: "En varumärkeswebbplats med innehållshantering som fick 100/100 i Lighthouse.",
        en: "A content-managed brand website that scored 100/100 in Lighthouse.",
      },
    },
    slug: "true-blanks",
    category: Category.Work,
    images: [
      "/images/true-blanks-1.png",
      "/images/true-blanks-2.png",
      "/images/true-blanks-3.png",
    ],
    links: [
      {
        url: "https://creatorstudio.com",
        label: {
          sv: "Besök creatorstudio.com",
          en: "Visit creatorstudio.com",
        },
      },
      {
        url: "https://trueblanks.com",
        label: {
          sv: "Besök trueblanks.com",
          en: "Visit trueblanks.com",
        },
      },
    ],
  },
  {
    id: 15,
    title: {
      sv: "Creator Studio - My Studio",
      en: "Creator Studio - My Studio",
    },
    text: {
      summary: {
        sv: "En print-on-demand-plattform från Creator Studio för produktion, leverans och e-handel.",
        en: "A print-on-demand platform from Creator Studio for production, fulfilment, and e-commerce.",
      },
      contribution: {
        sv: "Jag bidrog till plattformens arkitektur med Next.js, Sentry, TypeScript, Datadog, Docker och Terraform i nära samarbete med Creator Studio-teamet.",
        en: "I helped develop the platform’s architecture with Next.js, Sentry, TypeScript, Datadog, Docker, and Terraform, working closely with the Creator Studio team.",
      },
      outcome: {
        sv: "Jag introducerade TypeScript i teamet och integrerade det i plattformen för att förbättra typsäkerhet och kodkvalitet.",
        en: "I introduced TypeScript to the team and integrated it into the platform to improve type safety and code quality.",
      },
    },
    slug: "my-studio",
    category: Category.Work,
    images: [
      "/images/my-studio-1.png",
      "/images/my-studio-2.png",
      "/images/my-studio-3.png",
      "/images/my-studio-4.png",
    ],
    links: [
      {
        url: "https://creatorstudio.com",
        label: {
          sv: "Besök creatorstudio.com",
          en: "Visit creatorstudio.com",
        },
      },
    ],
  },
  {
    id: 16,
    title: {
      sv: "Mohlén Publishing",
      en: "Mohlén Publishing",
    },
    text: {
      summary: {
        sv: "En förlagswebbplats som hjälper läsare att upptäcka och köpa böcker från Mohlén Publishing.",
        en: "A publishing website that helps readers discover and buy books from Mohlén Publishing.",
      },
      contribution: {
        sv: "Jag samarbetade med förlaget för att bygga webbplatsen med Next.js och Tailwind CSS.",
        en: "I collaborated with the publisher to build the website using Next.js and Tailwind CSS.",
      },
      outcome: {
        sv: "En responsiv, serverrenderad webbplats som presenterar förlagets böcker och köpmöjligheter.",
        en: "A responsive, server-rendered website presenting the publisher’s books and purchase options.",
      },
    },
    slug: "mohlen-publishing",
    category: Category.Project,
    images: [
      "/images/mohlen-publishing-1.png",
      "/images/mohlen-publishing-2.png",
      "/images/mohlen-publishing-3.png",
    ],
    links: [
      {
        url: "https://mohlenpublishing.com",
        label: {
          sv: "Besök mohlenpublishing.com",
          en: "Visit mohlenpublishing.com",
        },
      },
      {
        url: "https://github.com/emilhallberg/mohlen-publishing",
        label: { sv: "Se källkod på GitHub", en: "View source code on GitHub" },
      },
    ],
  },
];
