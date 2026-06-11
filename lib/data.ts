import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'matoslav6@gmail.com',
    emailSubject: "Let's talk about a project",
    emailBody: 'Hi Matyas, I am reaching out to you because...',
    siteUrl: 'https://odehnal.matyas.online',
    githubProfile: 'https://github.com/Lokkisanek',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Lokkisanek' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/matyáš-odehnal-97784739b',
    },
    { name: 'instagram', url: 'https://www.instagram.com/matyas.ode/' },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Vue', icon: '/logo/react.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'PHP', icon: '/logo/express.png' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'GSAP', icon: '/logo/gsap.png' },
    ],
    'smart home & hw': [
        { name: 'Home Assistant', icon: '/logo/aws.png' },
        { name: 'Zigbee', icon: '/logo/docker.svg' },
        { name: 'PC & iPhone repair', icon: '/logo/github.png' },
        { name: 'Professional drone video', icon: '/logo/node.png' },
    ],
};

export const PLACEHOLDER_THUMB = '/projects/thumbnail/devLinks.jpg';
const PLACEHOLDER_LONG = '/projects/long/devLinks.jpg';
const PLACEHOLDER_IMAGES = [
    '/projects/images/devLinks-1.png',
    '/projects/images/devLinks-2.png',
    '/projects/images/devLinks-3.png',
];

export const PROJECTS: IProject[] = [
    {
        title: 'Project Union',
        slug: 'project-union',
        liveUrl: 'https://project-union.duckdns.org/',
        year: 2025,
        description: `
      Portal for graduation and student projects — browse, rate, and showcase work across schools.
      Built as a full web app with authentication, project listings, categories, and school collaboration.
    `,
        role: `
      Full-stack developer — architecture, frontend, backend integration, and deployment.
    `,
        techStack: ['React', 'Node.js', 'Web app'],
        thumbnail: '/projects/thumbnail/project-union.duckdns.org_.png',
        longThumbnail: '/projects/long/project-union.duckdns.org_.png',
        images: ['/projects/images/project-union.duckdns.org_.png'],
    },
    {
        title: 'SkyblockHub',
        slug: 'skyblockhub',
        liveUrl: 'https://skyblockhub.app/',
        year: 2024,
        description: `
      Tools and intelligence for the Hypixel SkyBlock community — bazaar data, helpers, and a focused web experience.
    `,
        role: `Solo developer — product, PHP backend, and frontend.`,
        techStack: ['PHP', 'JavaScript', 'Community'],
        thumbnail: '/projects/thumbnail/skyblockhub.app_.png',
        longThumbnail: '/projects/long/skyblockhub.app_.png',
        images: ['/projects/images/skyblockhub.app_.png'],
    },
    {
        title: 'Erasmus Web',
        slug: 'erasmus-web',
        liveUrl: 'https://erasmus.spst.cz/',
        year: 2025,
        description: `
      School website for Erasmus+ at SPŠT Třebíč — program info, mobilities, news, and a clear layout for students and partners.
    `,
        role: `Web developer — design, frontend, and content structure.`,
        techStack: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: '/projects/thumbnail/erasmus.spst.cz_.png',
        longThumbnail: '/projects/long/erasmus.spst.cz_.png',
        images: ['/projects/images/erasmus.spst.cz_.png'],
    },
    {
        title: 'SpinPot',
        slug: 'spinpot',
        sourceCode: 'https://github.com/Lokkisanek/SpinPot',
        year: 2024,
        description: `
      Browser-based arcade game inspired by Clover Pit — fast rounds built with vanilla HTML, CSS, and JavaScript.
    `,
        role: `Solo developer — game design, UI, and logic.`,
        techStack: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: PLACEHOLDER_THUMB,
        longThumbnail: PLACEHOLDER_LONG,
        images: PLACEHOLDER_IMAGES,
    },
    {
        title: 'End The Game',
        slug: 'end-the-game',
        sourceCode: 'https://github.com/Lokkisanek/End-The-Game',
        year: 2024,
        description: `
      Interactive browser game with custom gameplay, UI, and JavaScript-driven logic.
    `,
        role: `Solo developer.`,
        techStack: ['JavaScript', 'Game', 'Web'],
        thumbnail: PLACEHOLDER_THUMB,
        longThumbnail: PLACEHOLDER_LONG,
        images: PLACEHOLDER_IMAGES,
    },
    {
        title: 'Hypixel Bazaar',
        slug: 'hypixel-bazaar',
        sourceCode: 'https://github.com/Lokkisanek/Hypixel-bazaar',
        year: 2023,
        description: `
      Bazaar price tracker for Hypixel SkyBlock with a lightweight front end and live market data.
    `,
        role: `Solo developer.`,
        techStack: ['HTML', 'JavaScript', 'Hypixel'],
        thumbnail: PLACEHOLDER_THUMB,
        longThumbnail: PLACEHOLDER_LONG,
        images: PLACEHOLDER_IMAGES,
    },
];

export const MY_EXPERIENCE: { title: string; company: string; duration: string }[] =
    [];
