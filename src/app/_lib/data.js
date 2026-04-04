export const projects = [
  {
    id: 1,
    title: 'Portfolio Website V3',
    category: 'UI/UX Design',
    tags: [
      , 'Landing Page'
      , 'Responsive'
      , 'Light Mode'
    ],
    detail:
      'A personal portfolio site built with Next.js, featuring a fully responsive layout and dark/light mode toggle. Optimized for performance, accessibility, and clean navigation...',
    img: '/img/hero.webp',
    webImg: '/img/fullwebsite.png',
    webLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Digital Agency Website',
    category: 'UI/UX Design',
    tags: [
      '8 Screen',
      'Mobile',
      'Dark Mode'
    ],
    detail:
      'Functional development. With experience across design systems, user experience, and front-end technologies, I focus on crafting products that are not just beautiful but highly scalable.',
    img: '/img/hero.webp',
    webImg: '/img/fullwebsite.png',
    webLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'VR Games Website',
    category: 'UI/UX Design',
    tags: [
      , '10 Screens'
      , 'Mobile'
      , 'Shopping UI'
    ],
    detail:
      'A modern e-commerce mobile interface focused on minimal design, easy checkout flow, and clean product layouts. Designed entirely in Figma with a focus on immersive aesthetics.',
    img: '/img/hero.webp',
    webImg: '/img/fullwebsite.png',
    webLink: '#',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Fintech Dashboard',
    category: 'Web App',
    tags: [
      , 'Dashboard'
      , 'Analytics'
    ],
    detail:
      'A sleek financial dashboard presenting complex data in an easy-to-read, actionable format utilizing charts, custom widgets, and dark mode optimizations.',
    img: '/img/hero.webp',
    webImg: '/img/fullwebsite.png',
    webLink: '#',
    githubLink: '#',
  },
  {
    id: 5,
    title: 'Fintech Dashboard',
    category: 'Web App',
    tags: [
      , 'Dashboard'
      , 'Analytics'
    ],
    detail:
      'A sleek financial dashboard presenting complex data in an easy-to-read, actionable format utilizing charts, custom widgets, and dark mode optimizations.',
    img: '/img/hero.webp',
    webImg: '/img/fullwebsite.png',
    webLink: '#',
    githubLink: '#',
  },
  {
    id: 6,
    title: 'Fintech Dashboard',
    category: 'Web App',
    tags: [
      , 'Dashboard'
      , 'Analytics'
    ],
    detail:
      'A sleek financial dashboard presenting complex data in an easy-to-read, actionable format utilizing charts, custom widgets, and dark mode optimizations.',
    img: '/img/hero.webp',
    webImg: '/img/fullwebsite.png',
    webLink: '#',
    githubLink: '#',
  },
  {
    id: 7,
    title: 'Fintech Dashboard',
    category: 'Web App',
    tags: [
      , 'Dashboard'
      , 'Analytics'
    ],
    detail:
      'A sleek financial dashboard presenting complex data in an easy-to-read, actionable format utilizing charts, custom widgets, and dark mode optimizations.',
    img: '/img/hero.webp',
    webImg: '/img/fullwebsite.png',
    webLink: '#',
    githubLink: '#',
  },
];


// Blog / Dev Log Data
export const blogs = [
  {
    id: 1,
    slug: 'building-fluid-layouts-in-nextjs',
    date: 'Oct 12, 2023',
    author: 'Tofi Kichah',
    title: 'Building Fluid Layouts in Next.js',
    category: 'Development',
    description: 'A comprehensive guide to leveraging Tailwind CSS and React Server Components to build highly responsive, performant layouts.',
    img: '/img/blog/ales-nesetril-Im7lZjxeLhg-unsplash.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ex at massa congue dictum. Proin ultricies non neque vestibulum interdum. Pellentesque in urna elementum, semper risus in, euismod felis.',
  },
  {
    id: 2,
    slug: 'micro-interactions-that-convert',
    date: 'Nov 05, 2023',
    author: 'Tofi Kichah',
    title: 'Micro-interactions that Convert',
    category: 'UX Design',
    description: 'How to use subtle animations and Framer Motion spring physics to significantly boost user engagement and conversion rates.',
    img: '/img/blog/christopher-gower-m_HRfLhgABo-unsplash.jpg',
    content: 'Nullam imperdiet est vel ex interdum, et facilisis nisl dapibus. Donec sed risus metus. Integer quis turpis in enim luctus dignissim nec non arcu. Morbi interdum dui purus, non rhoncus enim laoreet non.',
  },
  {
    id: 3,
    slug: 'why-performance-is-a-feature',
    date: 'Jan 18, 2024',
    author: 'Tofi Kichah',
    title: 'Why Performance is a Feature',
    category: 'Tech',
    description: 'Analyzing the architecture behind a 100/100 Lighthouse score and why speed directly correlates with premium user perception.',
    img: '/img/blog/marvin-meyer-SYTO3xs06fU-unsplash.jpg',
    content: 'Curabitur dignissim tristique lectus id eleifend. Morbi eget velit ullamcorper, scelerisque leo eu, elementum urna. Aenean feugiat velit lorem, in aliquet velit ultrices ut.',
  },
];

export function formatLocalDate(dateString) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).format(date);
}

export function createSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
