export interface ServiceItem {
  id: string;
  tabKey: 'mc' | 'website' | 'dc' | 'languages';
  title: string;
  tagline: string;
  description: string;
  features: string[];
  highlights: { label: string; value: string }[];
  image: string;
  pricingTab: 'mc' | 'website' | 'dc' | 'promote';
}

export interface PricingPlan {
  id: string;
  category: 'mc' | 'website' | 'dc' | 'promote';
  name: string;
  price: string;
  period?: string;
  delivery: string;
  popular?: boolean;
  description: string;
  features: string[];
}

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  category: 'mc' | 'website' | 'dc' | 'promote' | 'all';
  description: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'server-dev',
    tabKey: 'mc',
    title: 'Server Dev & Architecture',
    tagline: 'From scratch to launch — 24/7 uptime & rock-solid performance',
    description:
      'I build and run high-traffic game servers from the ground up. Whether you need a competitive Minecraft SMP, an economy SkyBlock network with Velocity/Bungee proxies, or custom Java plugins, I handle every layer of architecture, security, and Linux system tuning.',
    features: [
      'Minecraft Server Dev (Paper, Purpur, Fabric, Spigot)',
      'BungeeCord & Velocity Multi-Server Proxy Networks',
      'Pterodactyl Panel, Linux VPS & Dedicated Hosting Setup',
      'Custom Configs, DeluxeMenus & Advanced Plugin Stacks',
      'Anti-Cheat Integration, DDoS Mitigation & Auto-Backups',
      'Deep TPS Optimization, Garbage Collection & Chunk Pre-Gen',
      '24/7 Uptime Monitoring & Server Maintenance'
    ],
    highlights: [
      { label: 'Uptime Standard', value: '99.9%' },
      { label: 'TPS Target', value: '20.0 Flat' },
      { label: 'Deploy Time', value: '24–72h' }
    ],
    image: '/src/assets/images/minecraft_server_architecture_1794026322117.jpg',
    pricingTab: 'mc'
  },
  {
    id: 'custom-websites',
    tabKey: 'website',
    title: 'Custom Websites',
    tagline: 'Made-to-order web applications — coded by hand for speed and impact',
    description:
      'Modern, hand-coded websites tailored to your exact brand vision. No bloated page-builders or slow templates. High-performance landing pages, gaming portals, web stores, and portfolio showcases with sub-second page loads and seamless mobile UX.',
    features: [
      'Custom Full-Stack Website Builds (React, TypeScript, Tailwind)',
      'High-Conversion Gaming & Brand Landing Pages',
      'Interactive Portfolios & Product Showcases',
      '100% Responsive Design Across Mobile, Tablet & Desktop',
      'Bespoke UI & UX with Slick Micro-Interactions',
      'Sub-Second Page Loads & 95+ Google Lighthouse Scores',
      'Comprehensive SEO Optimization & Social Card Metadata'
    ],
    highlights: [
      { label: 'Lighthouse Score', value: '98+' },
      { label: 'Mobile Fidelity', value: '100%' },
      { label: 'Stack', value: 'React / TS' }
    ],
    image: '/src/assets/images/custom_web_showcase_1794026323521.jpg',
    pricingTab: 'website'
  },
  {
    id: 'discord-systems',
    tabKey: 'dc',
    title: 'Discord Ecosystems & Bots',
    tagline: 'Complete community servers and intelligent bots, configured and deployed',
    description:
      'Turn your Discord into an engaged, self-moderating powerhouse. From pixel-perfect server layouts with role hierarchies to bespoke JavaScript/Python bots featuring slash commands, custom economy, music, tickets, and webhook integrations.',
    features: [
      'Complete Discord Server Architecture & Channel Hierarchies',
      'Custom Discord Bot Development (Node.js & Python)',
      'Advanced Moderation, Auto-Mod & Raid Protection',
      'Verification Gates, Role Pickers & Leveling Systems',
      'Custom Economy, Mini-Games & Leaderboards',
      'Voice Channels, Music Bots & Ticket Support Suites',
      'Cloud Hosting & 24/7 Bot Uptime Configuration'
    ],
    highlights: [
      { label: 'Bot Latency', value: '< 25ms' },
      { label: 'Security Level', value: 'Raid-Proof' },
      { label: 'API Version', value: 'Discord v14' }
    ],
    image: '/src/assets/images/discord_bot_ecosystem_1794026322985.jpg',
    pricingTab: 'dc'
  },
  {
    id: 'languages-stack',
    tabKey: 'languages',
    title: 'Modern Languages & Stack',
    tagline: 'Clean syntax, proven toolchains, zero compromises',
    description:
      'Versatile across system engineering, web protocols, backend microservices, and automation scripts. Coded cleanly with strict typing, modularity, and maintainable documentation.',
    features: [
      'HTML5 & Modern CSS3 / Tailwind CSS Architecture',
      'JavaScript (ESNext) & TypeScript Strict Modularity',
      'Node.js & Express API Microservices',
      'Python for Automation, Discord Bots & Data Wrangling',
      'C, C# and C++ for Systems Programming & High-Performance Engines',
      'Java & Kotlin for Minecraft Core Plugins & Spigot APIs',
      'Git, Linux Bash, Docker & CI/CD Pipelines'
    ],
    highlights: [
      { label: 'Primary Languages', value: '8+ Active' },
      { label: 'Code Quality', value: 'Strict Typed' },
      { label: 'Platforms', value: 'Web & Linux' }
    ],
    image: '/src/assets/images/prorabbi_hero_visual_1794026322278.jpg',
    pricingTab: 'website'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  // Minecraft Server Plans
  {
    id: 'mc-starter',
    category: 'mc',
    name: 'Starter SMP / Survival',
    price: '$29',
    delivery: '24–48 Hours',
    description: 'Perfect for small friend communities or new servers launching a clean survival or SMP world.',
    features: [
      'Paper / Purpur 1.20+ Engine Setup',
      'Up to 15 Essential Plugins (LuckPerms, EssentialsX, WorldEdit)',
      'Basic Spawn Protection & Land Claiming',
      'Optimized server.properties & spigot.yml (20 TPS)',
      'Console Access & Backup Automation',
      '3 Days of Post-Delivery Support'
    ]
  },
  {
    id: 'mc-pro',
    category: 'mc',
    name: 'Custom Server Suite',
    price: '$69',
    popular: true,
    delivery: '3–5 Days',
    description: 'Full custom game mode build (SkyBlock, Prison, RPG, or Custom SMP) with custom menus and economy.',
    features: [
      'Everything in Starter SMP',
      '35+ Plugins with Custom YAML Configurations',
      'Custom DeluxeMenus & Interactive GUI Shop',
      'Vault Economy, Daily Rewards & BattlePass setup',
      'Anti-Cheat & Anti-Xray Configuration',
      'Linux VPS / Pterodactyl Panel Setup',
      'Spark Profiler Tuning for Zero Lag',
      '14 Days of Active Maintenance & Bug Fixes'
    ]
  },
  {
    id: 'mc-network',
    category: 'mc',
    name: 'Mega Network & Proxy',
    price: '$149',
    delivery: '5–8 Days',
    description: 'Complete multi-server ecosystem with Velocity or BungeeCord proxy, hub, and synchronized databases.',
    features: [
      'Velocity / BungeeCord Multi-Instance Proxy',
      'Hub / Lobby Server + 2 Custom Sub-Servers',
      'Global MySQL Database Sync for Ranks & Coins',
      'Cross-Server Chat & Party Network System',
      'DDoS Protection & Cloudflare DNS Routing',
      'Custom Staff Alerts & Discord-to-Minecraft Webhook',
      'Priority 30-Day Launch Support & Handover Video'
    ]
  },

  // Website Plans
  {
    id: 'web-launchpad',
    category: 'website',
    name: 'One-Page Launchpad',
    price: '$49',
    delivery: '48 Hours',
    description: 'High-impact landing page or link-hub designed to convert visitors and showcase your project.',
    features: [
      'Tailored One-Page Design (Hero, About, Features, CTA)',
      '100% Mobile & Tablet Responsive Layout',
      'Sub-Second Loading Time & Clean Codebase',
      'Contact / Inquiry Form Integration',
      'Custom Favicon, OpenGraph & SEO Meta Tags',
      'Deployment to Vercel / Netlify / Custom Host',
      '7 Days of Post-Launch Adjustments'
    ]
  },
  {
    id: 'web-pro',
    category: 'website',
    name: 'Pro Portfolio & Portal',
    price: '$99',
    popular: true,
    delivery: '3–5 Days',
    description: 'Multi-section portfolio, server web-portal or brand website with dynamic interactivity.',
    features: [
      'Up to 4 Custom Pages / Sections (Home, Services, Pricing, Bio)',
      'Modern Tech Stack (React, TypeScript, Tailwind)',
      'Interactive Widgets (Calculators, Live Status, Discord Preview)',
      'Domain Name & SSL HTTPS Configuration',
      'Enhanced Mobile Experience & Smooth Micro-Animations',
      'Google Analytics & Performance Audit Report (98+ score)',
      '14 Days of Dedicated Support'
    ]
  },
  {
    id: 'web-fullstack',
    category: 'website',
    name: 'Full-Stack Web App',
    price: '$189',
    delivery: '7–10 Days',
    description: 'Bespoke web application with backend API routes, database storage, and customized business logic.',
    features: [
      'Full-Stack Architecture (Frontend + Node.js/Express Backend)',
      'Database Integration (MySQL / PostgreSQL / MongoDB)',
      'Admin Dashboard / Content Management Functionality',
      'Discord OAuth / User Authentication System',
      'Stripe or PayPal Webhook Checkout Integration',
      'Dockerized Deployment & Production VPS Setup',
      '30 Days of Technical SLA Support'
    ]
  },

  // Discord Plans
  {
    id: 'dc-server',
    category: 'dc',
    name: 'Community Server Setup',
    price: '$25',
    delivery: '24 Hours',
    description: 'A polished, professional Discord server ready for your gaming guild, brand, or creator audience.',
    features: [
      'Clean Channel Hierarchy & Category Organization',
      'Role Permissions Matrix & Security Locks',
      'Reaction Roles / Self-Assign Role Menus',
      'Verification Gate to Stop Spam & Raids',
      'Custom Welcome Banners & Farewell Logs',
      'Essential Bot Setup (Ticket Tool, Carl-bot, MEE6 / Dyno)',
      '3 Days of Adjustments'
    ]
  },
  {
    id: 'dc-bot',
    category: 'dc',
    name: 'Custom Discord Bot',
    price: '$59',
    popular: true,
    delivery: '2–4 Days',
    description: 'Hand-coded Node.js/discord.js or Python bot built specifically for your server with slash commands.',
    features: [
      'Custom Slash Commands (v14 Discord API)',
      'Database Storage for User Stats, Coins or Warns',
      'Interactive Buttons, Select Menus & Modal Forms',
      'Automated Role Assignment & Welcomer with Custom Embeds',
      'Minecraft Server Live Ping / Player Count Command',
      'Full Source Code & Self-Hosting Guide',
      'Free 1-Month Cloud Hosting Setup Assistance'
    ]
  },
  {
    id: 'dc-empire',
    category: 'dc',
    name: 'Ultimate Discord Empire',
    price: '$119',
    delivery: '4–6 Days',
    description: 'Complete server overhaul plus a dedicated multi-feature custom bot and automated integrations.',
    features: [
      'Complete Luxury Server Remodel & Role Overhaul',
      'Dedicated Custom Bot with Economy, Leveling & Moderation',
      'Live Twitch / YouTube / TikTok Notification Webhooks',
      'Automated Ticket Transcripts & Staff Logs',
      'Custom Branded Embeds & Server Graphic Assets',
      'Full Security Hardening Against Nuke & Raid Attacks',
      '30 Days of Priority Bot Maintenance'
    ]
  },

  // Promotion Plans
  {
    id: 'promo-starter',
    category: 'promote',
    name: 'Shoutout & Exposure',
    price: '$35',
    delivery: '24–48 Hours',
    description: 'Direct promotion to active gaming and tech audiences to kickstart your server or product launch.',
    features: [
      'Featured Shoutout Across Partner Discord Communities',
      'Custom Targeted Promotional Announcement Embed',
      'Ping Notification to Relevant Gamer Roles',
      'Live Link Click Tracking & Metrics',
      'Permanent Post History in Server Archives'
    ]
  },
  {
    id: 'promo-growth',
    category: 'promote',
    name: 'Multi-Channel Push',
    price: '$79',
    popular: true,
    delivery: '3–5 Days',
    description: 'Comprehensive promotion campaign combining custom video/creative assets and multi-server blasts.',
    features: [
      'High-Impact Custom Promotional Graphic / Short Video Clip',
      'Multi-Server Discord Network Blast (Reach 10,000+ Gamers)',
      'Dedicated Announcement with Giveaway Co-Host Option',
      'Social Media Broadcast (X / YouTube Community)',
      'Detailed Post-Campaign Analytics & Growth Audit',
      'Guaranteed Minimum 100+ Unique Inbound Clicks'
    ]
  },
  {
    id: 'promo-takeover',
    category: 'promote',
    name: 'Full Brand Takeover',
    price: '$169',
    delivery: '7 Days Campaign',
    description: 'Weekly partnership package with continuous advertising, streamer highlights, and community events.',
    features: [
      '7-Day Continuous Cross-Promotion Campaign',
      'Pinned Sponsorship Banners in Top Community Hubs',
      'Co-Organized Gaming Tournament or Community Event',
      'Content Creator / Streamer Gameplay Sponsorship Match',
      'Daily Progress Briefings & Conversion Optimization',
      'Priority Advisory for Retaining Inbound Players & Members'
    ]
  }
];

export const ADD_ONS: AddOnOption[] = [
  {
    id: 'fast-delivery',
    name: 'Express 24h Delivery',
    price: 19,
    category: 'all',
    description: 'Bump your order to top priority with delivery within 24 hours.'
  },
  {
    id: 'pterodactyl-setup',
    name: 'Pterodactyl Panel VPS Setup',
    price: 25,
    category: 'mc',
    description: 'Install and secure Linux Ubuntu + Docker + Pterodactyl panel on your VPS.'
  },
  {
    id: 'custom-jar-plugin',
    name: 'Custom Java Plugin (JAR)',
    price: 39,
    category: 'mc',
    description: 'Bespoke Spigot/Paper Java plugin coded from scratch for unique gameplay mechanics.'
  },
  {
    id: 'domain-ssl',
    name: 'Custom Domain & Cloudflare DNS',
    price: 15,
    category: 'website',
    description: 'Setup custom domain, SSL certificate, and Cloudflare speed caching.'
  },
  {
    id: 'bot-hosting-6mo',
    name: '6 Months 24/7 Bot Cloud Hosting',
    price: 29,
    category: 'dc',
    description: 'High-reliability Linux cloud container keeping your Discord bot online non-stop.'
  },
  {
    id: 'graphic-pack',
    name: 'Custom Logo & Server Icon Pack',
    price: 29,
    category: 'all',
    description: 'Professional vector icon, server banner, and social share graphics.'
  }
];

export const BIO_DATA = {
  name: 'JUBAYER',
  avatar: '/assets/aistudio/39727-removebg-preview_bf8db067.png',
  youtubeHandle: '@viralMasterbd',
  role: 'Game Server Architect, Full-Stack Developer & Content Promoter',
  location: 'Global / Remote',
  experienceYears: '4+',
  tagline: 'Bridging technical code precision with real gaming community growth.',
  bioParagraph1:
    'Hey there! I am JUBAYER, creator behind @viralMasterbd. I specialize in building robust Minecraft server infrastructures, modern high-converting websites, and intelligent Discord automation systems, while helping gaming and digital projects reach authentic, active audiences.',
  bioParagraph2:
    'My philosophy is simple: zero bloat, battle-tested stability, and uncompromising performance. Whether tweaking Minecraft garbage collection flags to eliminate TPS drops for hundreds of simultaneous players or coding responsive web apps with sub-second response times, I treat every project with extreme care.',
  stats: [
    { label: 'Completed Projects', value: '120+' },
    { label: 'Game Servers Built', value: '50+' },
    { label: 'Network Uptime', value: '99.9%' },
    { label: 'Community Reach', value: '150K+' }
  ],
  milestones: [
    {
      year: '2021',
      title: 'First Minecraft Server Networks',
      description: 'Architected custom BungeeCord networks, fine-tuned Linux VPS configurations, and built custom SMP setups for regional gaming communities.'
    },
    {
      year: '2022',
      title: 'Discord Bot & Automation Engine',
      description: 'Expanded into modern Node.js & Python Discord bot engineering, delivering verification gates, ticketing, and rank systems for 50,000+ Discord members.'
    },
    {
      year: '2023',
      title: 'Full-Stack Web Development',
      description: 'Launched custom web development services using React, TypeScript, and Tailwind CSS to give gaming servers, creators, and indie startups custom digital homes.'
    },
    {
      year: '2024–2026',
      title: 'Digital Agency & Brand Growth',
      description: 'Combined technical builds with creator marketing and promotion campaigns, running @viralMasterbd and providing an end-to-end launchpad from server code to viral player acquisition.'
    }
  ],
  skillsList: [
    { category: 'Game & Systems', items: ['Minecraft Java/Bedrock', 'Paper / Purpur / Velocity', 'Linux / Ubuntu Server', 'Pterodactyl Panel', 'Docker', 'DDoS Mitigation'] },
    { category: 'Web & Frontend', items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite / Next.js', 'Responsive UI/UX', 'SEO & Performance'] },
    { category: 'Backend & Automation', items: ['Node.js & Express', 'Python', 'Discord.js v14', 'REST APIs & Webhooks', 'MySQL & SQLite', 'Git / GitHub'] },
    { category: 'Languages', items: ['HTML & CSS', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C#', 'C++'] }
  ]
};

export const SOCIAL_LINKS = [
  {
    platform: 'YouTube',
    label: 'viralMasterbd Official',
    handle: '@viralMasterbd',
    url: 'https://youtube.com/@viralMasterbd',
    badge: 'Creator Channel',
    avatar: '/assets/aistudio/39727-removebg-preview_bf8db067.png',
    description: 'Gaming server highlights, setup showcases, web tutorials, and creator videos.',
    icon: 'youtube'
  },
  {
    platform: 'Discord',
    label: 'JUBAYER Discord Community',
    handle: 'Jubayer / Join Server',
    url: 'https://discord.gg/prorabbi',
    badge: 'Fastest Response',
    description: 'Direct message for instant commissions, quotes, and active community support.',
    icon: 'discord'
  },
  {
    platform: 'GitHub',
    label: 'Open Source Repositories',
    handle: 'github.com/jubayer',
    url: 'https://github.com',
    badge: 'Code Repos',
    description: 'Public scripts, configs, utilities, and web demo sandboxes.',
    icon: 'github'
  },
  {
    platform: 'X (Twitter)',
    label: 'Updates & Announcements',
    handle: '@viralMasterbd',
    url: 'https://twitter.com',
    badge: 'Daily Updates',
    description: 'Follow development progress, new features, and tech thoughts.',
    icon: 'twitter'
  },
  {
    platform: 'Email Inquiries',
    label: 'Business Email',
    handle: 'jubayer0099yt@gmail.com',
    url: 'mailto:jubayer0099yt@gmail.com',
    badge: 'Official Quotes',
    description: 'Send enterprise RFP, custom contracts, or long-form project briefs.',
    icon: 'mail'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Alex Vance',
    role: 'Owner, HyperionMC Network',
    content: 'JUBAYER configured our entire 300-player SkyBlock server with Purpur and Velocity. Zero lag spikes, 20.0 TPS constant, and the custom GUI shop was clean beyond words.',
    metric: '300+ Peak Players'
  },
  {
    name: 'Marcus K.',
    role: 'Founder, PixelCraft Gaming',
    content: 'Our Discord was raided twice before JUBAYER stepped in. He rebuilt our entire server security, set up verification and custom ticket bots. Has run smoothly ever since.',
    metric: '10,000+ Discord Members'
  },
  {
    name: 'Elena Rostova',
    role: 'Creator & Streamer',
    content: 'He built my personal portfolio website and managed our gaming launch campaign. Fast turnaround, 99 Lighthouse speed, and our traffic tripled in the first week.',
    metric: '3.4x Traffic Inbound'
  }
];
