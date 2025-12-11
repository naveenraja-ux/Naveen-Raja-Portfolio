

import { Project, Skill, SocialLink } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'AI Lab', href: '#ai-lab' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'domain-markt',
    title: 'Domain Markt',
    category: 'Marketplace',
    summary: 'Designed a clean, conversion-first experience with a focus on search clarity and responsive UI.',
    description: 'A modern platform for buying, selling, and managing domain names.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop', 
    gradient: 'from-violet-600 to-indigo-600',
    role: 'UI/UX Designer',
    outcome: 'Optimized Seller Workflow',
    features: ['Seller Dashboard', 'Chat System', 'Bot Settings'],
    tags: ['Web App', 'Dashboard UI', 'UX Flow'],
    date: '2024 - 2025',
    service: 'Design System, Product Design',
    liveUrl: 'https://dev.domainmarkt.io/',
    caseStudy: [
      {
        type: 'text',
        title: 'Overview',
        content: 'Domain Markt is a platform that simplifies the process of buying, selling, and monetizing domain names. It was designed to give domain sellers better control over their listings while making it easy for buyers to explore and negotiate.'
      },
      {
        type: 'list',
        title: 'My Role & Contributions',
        content: 'As a UI/UX Designer, I was responsible for creating a responsive, user-centered interface tailored to both domain sellers and buyers. I focused on the seller-side experience, ensuring it was simple, functional, and efficient. Key contributions included:',
        items: [
          { title: 'Seller Dashboard', desc: 'Designed a clean dashboard that helps sellers manage domain listings, view buyer interest, and track activity.' },
          { title: 'Chat & History Screens', desc: 'Created chat history flows where sellers can view buyer conversations based on selected domains.' },
          { title: 'Bot Settings Panel', desc: 'Built a settings screen where sellers can set rules for automatic responses, minimum prices, and counteroffer logic.' },
          { title: 'Filtering System', desc: 'Designed filtering options for domain records and chat views to improve navigation and focus.' },
          { title: 'Responsive Design', desc: 'Ensured the platform works smoothly across desktop and mobile screens.' }
        ]
      },
      {
        type: 'text',
        content: 'I collaborated closely with developers to make sure the handoff was smooth and every design detail was implemented as intended.'
      },
      {
        type: 'image',
        title: 'Gallery View',
        content: 'Switcher that allows you to create multiple dedicated views using two layouts: table and gallery. In this instance, you can see the Designers view. Explore the process of creating a new view from a table. After selecting filters and columns, and sorting them, you can save this specific view. This way, you won\'t have to repeatedly set it up, especially in scenarios like daily work routines.',
        imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop'
      },
      {
        type: 'image',
        title: 'Listed Domains',
        content: 'The Listed Domains section displays all the domains a seller has added to the platform. Each listing includes details like domain name, pricing, traffic, and current interest. Users can easily edit, remove, or feature domains directly from this view. I designed the layout to be clean, actionable, and optimized for quick scanning.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop'
      },
      {
        type: 'image',
        title: 'Domain Overview',
        content: 'The Domain Overview section gives sellers a quick snapshot of each domain they manage. It includes key details like status, traffic, pricing, and buyer interest metrics. Designed with clarity in mind, it helps users take action without navigating away. I focused on creating a clean layout that highlights the most important info at a glance.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop'
      },
      {
        type: 'image',
        title: 'Feature Highlight',
        content: 'Advanced visualization of domain metrics and performance indicators.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'hobbymate',
    title: 'HobbyMate',
    category: 'Social Discovery',
    summary: 'Crafted intuitive navigation and interest-based discovery flows to enhance user engagement.',
    description: 'A social platform that connects users through shared interests.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2667&auto=format&fit=crop',
    gradient: 'from-rose-500 to-orange-500',
    role: 'Product Designer',
    outcome: 'Boosted Day-1 retention',
    features: ['Gamified Onboarding', 'Event Scheduling'],
    tags: ['Mobile App', 'Social UX', 'Clean UI'],
    date: '2024 - 2025',
    service: 'Mobile App – Social Hobby Discovery Platform',
    liveUrl: 'https://hobbymate.in/',
    caseStudy: [
      {
        type: 'text',
        title: 'Overview',
        content: 'HobbyMate is a social networking platform built around hobbies and shared interests. The app connects users based on their location and personal interests, enabling them to discover and participate in local hobby-based events. Additionally, HobbyMate features a marketplace where users can buy and sell products related to their hobbies, making it a holistic ecosystem for hobby enthusiasts.'
      },
      {
        type: 'list',
        title: 'My Role & Contributions',
        content: 'As the UI/UX designer, I was responsible for creating intuitive user flows and interface designs that cater to a diverse range of users. I focused on:',
        items: [
          { title: 'Interest-based Profile Setup', desc: 'Designed smooth onboarding screens that allow users to choose their hobbies and personalize their experience.' },
          { title: 'Nearby Hobby Search', desc: 'Created location-based search interactions to help users find relevant events and users around them.' },
          { title: 'Event Booking Flow', desc: 'Designed a seamless booking interface for hobby-related events with easy RSVP, calendar sync, and ticket management.' },
          { title: 'Marketplace Module', desc: 'Built user-friendly layouts for browsing, viewing, and listing hobby-related products with clear categorization.' },
          { title: 'Consistent UI Patterns', desc: 'Maintained consistent design language across different modules for better usability and visual harmony.' },
          { title: 'Responsive Mobile-First Design', desc: 'Prioritized mobile responsiveness to ensure smooth usage across devices.' }
        ]
      },
      {
        type: 'text',
        content: 'This project enhanced my ability to design community-focused apps with commercial extensions and real-time engagement features.'
      },
      {
        type: 'image',
        title: 'Onboarding Experience',
        content: 'A clean and intuitive onboarding flow that helps users select their hobbies and set preferences for local discovery.',
        imageUrl: '' // Placeholder for visual component
      },
      {
        type: 'list',
        title: 'The Solution',
        content: 'To address the need for a platform where people can connect through shared hobbies, we designed HobbyMate as a complete social ecosystem. The solution includes:',
        items: [
          { title: 'Location-Based Matching', desc: 'A system that shows nearby users and events aligned with the user\'s interests.' },
          { title: 'Real-Time Event Booking', desc: 'Screens that make it easy to find, view, and register for hobby events with real-time availability.' },
          { title: 'Personalized Dashboard', desc: 'Easy access to connections, upcoming events, past activities, and wishlist items.' }
        ]
      },
      {
        type: 'image',
        title: 'Location-Based Discovery',
        content: 'Interactive maps and cards allow users to easily find events happening near them.',
        imageUrl: '' // Placeholder
      },
      {
        type: 'image',
        title: 'Marketplace Ecosystem',
        content: 'A marketplace module where users can browse, list, and sell hobby-related products in a familiar card-based layout.',
        imageUrl: '' // Placeholder
      }
    ]
  },
  {
    id: 'power-volatility',
    title: 'PowerOfVolatility',
    category: 'Fintech Dashboard',
    summary: 'Built a minimal, high-clarity interface to visualize complex options flow in a simple, readable way.',
    description: 'A data-driven dashboard for real-time market insights.',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2670&auto=format&fit=crop',
    gradient: 'from-emerald-500 to-teal-600',
    role: 'UI/UX Designer',
    outcome: 'Reduced latency perception',
    features: ['Real-time WebSocket Data', 'Customizable Layouts'],
    tags: ['Dashboard', 'Data Visualization', 'Product UI'],
    date: '2024 - 2025',
    service: 'Web Dashboard + Mobile App (Dark Mode)',
    liveUrl: 'https://powerofvolatility.com/',
    caseStudy: [
      {
        type: 'text',
        title: 'Overview',
        content: 'PowerOfVolatility is a real-time trade monitoring platform tailored for finance professionals and retail investors. The platform offers live updates on the stock performance of top companies, allowing users to track market volatility and analyze dynamic trading metrics. The design was focused on delivering clarity, speed, and trust, all while maintaining a sleek dark UI that reflects a premium fintech experience.'
      },
      {
        type: 'list',
        title: 'My Role & Contributions',
        content: 'As the UI/UX designer, I was responsible for crafting the entire user experience across web and mobile platforms. My contribution included:',
        items: [
          { title: 'Real-time Dashboard', desc: 'Designing a dashboard that displays live trading metrics such as price fluctuations, volume trends, and company-specific volatility.' },
          { title: 'Responsive Design', desc: 'Creating a responsive web design and mobile layout optimized for on-the-go market tracking.' },
          { title: 'User-Friendly Components', desc: 'Building components for profile management, notification settings, and custom trade alerts.' },
          { title: 'Dark Theme Development', desc: 'Developing a clean dark theme to reduce eye strain and align with industry standards for trading platforms.' },
          { title: 'Developer Collaboration', desc: 'Working closely with stakeholders to ensure the design aligned with live market data APIs and backend logic.' }
        ]
      },
      {
        type: 'text',
        content: 'This project enhanced my ability to design community-focused apps with commercial extensions and real-time engagement features.'
      },
      {
        type: 'image',
        title: 'Live Trading Dashboard',
        content: 'A high-performance trading interface showing real-time candlesticks, order books, and volatility indices.',
        imageUrl: ''
      },
      {
        type: 'list',
        title: 'Project Scope & My Delivery',
        items: [
          { title: 'Full UI/UX Design', desc: 'Homepage, dashboard, login/signup, settings, and profile screens.' },
          { title: 'Design Systems', desc: 'Delivered reusable components, color tokens, and typography styles.' },
          { title: 'High Usability', desc: 'Intuitive navigation and interactive elements for filtering data, sorting trades, and comparing stocks.' },
          { title: 'Cross-Platform Layouts', desc: 'Mobile-first versions for both iOS and Android layouts, focusing on essential metrics.' },
          { title: 'Developer Handoff', desc: 'Hand off assets and support the build process through Figma annotations and design specs.' }
        ]
      },
      {
        type: 'image',
        title: 'Mobile Trading Experience',
        content: 'Optimized mobile layouts ensuring critical trading data is accessible on smaller screens without clutter.',
        imageUrl: ''
      }
    ]
  },
  {
    id: 'playzone',
    title: 'PlayZone',
    category: 'Gaming',
    summary: 'Designed smooth competition flows, engaging visuals, and interactive tournament screens.',
    description: 'A competitive gaming platform for hosting tournaments and earning rewards.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop',
    gradient: 'from-fuchsia-600 to-purple-600',
    role: 'UI Designer',
    outcome: 'Hosted 50+ Tournaments',
    features: ['Live Bracket Updates', 'Team Management'],
    tags: ['Mobile App', 'Interaction Design', 'Real-time UX'],
    date: '2024 - 2025',
    service: 'Gaming, Tournament Management',
    liveUrl: '', // Intentionally empty to trigger 'Coming Soon'
    caseStudy: [
      {
        type: 'text',
        title: 'Overview',
        content: 'PlayZone is a next-generation gaming platform that allows users to discover, create, and participate in both online and offline matches and tournaments. Whether it\'s friendly competitions, betting-based challenges, or large-scale events, PlayZone provides a seamless experience for gamers to connect and compete. The app supports match creation, fee handling, result tracking, and live status updates in a visually engaging UI.'
      },
      {
        type: 'list',
        title: 'What I did',
        content: 'Designed end-to-end UI screens for match discovery, creation, and participation',
        items: [
          { title: 'Match Discovery', desc: 'Designed end-to-end UI screens for match discovery, creation, and participation' },
          { title: 'Visual Themes', desc: 'Developed dual-mode themes: light and dark, focusing on visual comfort and clarity' },
          { title: 'User Flows', desc: 'Built user flows for registration, payment handling, match joining, and notifications' },
          { title: 'Interactive Prototypes', desc: 'Created interactive prototypes for tournament creation and team management' },
          { title: 'Gamification', desc: 'Focused on gamified UI elements to make the interface more engaging and dynamic' },
          { title: 'Developer Handoff', desc: 'Collaborated closely with developers to ensure component consistency and usability' }
        ]
      },
      {
        type: 'image',
        title: 'Match Discovery',
        content: 'Intuitive match cards allow users to quickly find tournaments based on game type, prize pool, and entry fee.',
        imageUrl: ''
      },
      {
        type: 'list',
        title: 'Project Scope & Deliverables',
        items: [
          { title: 'User Personas', desc: 'Flow Mapping for casual players, tournament organizers, and betters' },
          { title: 'Wireframes to Final UI', desc: 'Screens like Dashboard, Explore, Match Details, and Wallet' },
          { title: 'Design System', desc: 'Light & Dark Mode UI System: theme toggle, color contrast rules, and icon sets' },
          { title: 'Micro-Interactions', desc: 'Feedback States for user actions and real-time updates' },
          { title: 'Handoff Assets', desc: 'Organized Figma files with design specs and asset exports' }
        ]
      },
      {
        type: 'image',
        title: 'Tournament Bracket',
        content: 'A real-time visualization of tournament progress, connecting winning teams to the next round.',
        imageUrl: ''
      },
      {
        type: 'image',
        title: 'Light & Dark Mode',
        content: 'A seamless toggle experience ensuring visual clarity in any lighting environment.',
        imageUrl: ''
      },
      {
        type: 'heading',
        title: 'Coming Soon',
        content: 'PlayZone is currently in the final stages of development and will be available soon on the Play Store. Stay tuned for an immersive gaming experience where competition meets convenience!'
      }
    ]
  },
];

export const SKILLS: string[] = [
  "User Research", "Wireframing", "Prototyping", "UI Design", 
  "Design Systems", "Figma", "React Basics", "Motion Design", "Accessibility"
];

export const SOCIALS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/naveen-raja-s-80282023a/', icon: 'linkedin' },
  { platform: 'Behance', url: 'https://www.behance.net/naveenraja12', icon: 'behance' },
  { platform: 'Email', url: 'mailto:naveenraja1297@gmail.com', icon: 'mail' },
];

export const CONTACT_INFO = {
  phone: "+91 6385941180",
  email: "naveenraja1297@gmail.com",
  location: "Coimbatore, India",
};
