/**
 * Central configuration file for RK Solution website.
 * Update this file or provide environment variables in .env to customize branding,
 * contact details, social links, project showcase, and pricing.
 */

export interface Project {
  id: string;
  title: string;
  category: 'Android Apps' | 'Websites' | 'AI / Python Projects';
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  architecture?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  demoStatus: 'available' | 'in_progress' | 'client_private' | 'not_applicable';
  previewImage: string;
  highlights: { label: string; value: string }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  suitableFor: string[];
  deliverables: string[];
  timelineGuide: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  indicativePrice: string;
  priceNote: string;
  features: string[];
  deliveryEstimate: string;
  suitableFor: string;
}

export const siteConfig = {
  brand: {
    name: 'RK Solution',
    tagline: 'Your Ideas, Our Code',
    legalName: 'RK Solution Digital Studio',
    businessType: 'Software Development & Digital Solutions',
    foundedYear: 2024,
    location: 'India (Serving Clients Worldwide)',
    statusMessage: 'Accepting select new projects for development',
  },
  founder: {
    name: 'Ahmad',
    role: 'Founder & Full-Stack / Mobile Engineer',
    bio: 'Dedicated software developer focused on architecting clean, maintainable, and high-performance digital products. Specializing in modern Android apps with Kotlin Jetpack Compose and responsive, high-converting web applications with React and TypeScript.',
    github: 'https://github.com/Ahmadgit123',
    email: 'ahmadziya7756@gmail.com',
  },
  contact: {
    // WhatsApp number format: digits only with country code, e.g., '919876543210'
    // Default placeholder from spec is '91XXXXXXXXXX'
    whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '91XXXXXXXXXX',
    email: import.meta.env.VITE_CONTACT_EMAIL || 'ahmadziya7756@gmail.com',
    phone: import.meta.env.VITE_CONTACT_PHONE || '',
    instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/rksolution.dev',
    githubUrl: 'https://github.com/Ahmadgit123',
    responseTime: 'Within 2–4 hours on business days',
    preferredChannels: ['WhatsApp', 'Email', 'Project Enquiry Form'],
  },
  analytics: {
    // Only loaded if explicitly provided via environment variables
    gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
    metaPixelId: import.meta.env.VITE_META_PIXEL_ID || '',
  },
  seo: {
    defaultTitle: 'RK Solution – Modern Website & Android App Development',
    titleTemplate: '%s | RK Solution',
    defaultDescription: 'RK Solution helps businesses and entrepreneurs build modern websites and Android applications designed around their goals.',
    canonicalDomain: 'https://rksolution.in',
  },
  services: [
    {
      id: 'website-development',
      title: 'Website Development',
      shortDesc: 'Modern, blazing-fast business websites and web applications built with clean code and high conversion design.',
      fullDesc: 'We design and engineer bespoke web solutions tailored to business objectives—from sleek company portfolios and high-converting landing pages to interactive web tools and educational portals.',
      iconName: 'Globe',
      benefits: [
        'Lightning-fast load times and SEO-ready structure',
        'Mobile-first responsive layouts tested across all devices',
        'Clean, accessible, and structured code architecture',
        'Zero bloat, easy maintenance, and straightforward hosting',
      ],
      suitableFor: [
        'Small and medium businesses expanding online',
        'Restaurants, cafes, and local service providers',
        'Coaching institutes and educational enterprises',
        'Startups needing a professional digital presence',
      ],
      deliverables: [
        'Custom-coded responsive website (React/Next.js/HTML)',
        'SEO metadata and social sharing Open Graph setup',
        'Interactive contact and lead generation forms',
        'Fast deployment and custom domain configuration',
      ],
      timelineGuide: 'Typically 1–3 weeks depending on scope',
    },
    {
      id: 'android-app-development',
      title: 'Android App Development',
      shortDesc: 'Native Android applications engineered with modern Kotlin, Jetpack Compose, Room database, and clean MVVM architecture.',
      fullDesc: 'Build powerful, native mobile experiences with fluid animations, offline caching, and responsive UI. Engineered using Google’s recommended modern Android development stack.',
      iconName: 'Smartphone',
      benefits: [
        'Smooth 60fps UI using Jetpack Compose & Material 3',
        'Offline-first capabilities using Room SQLite database',
        'Robust REST API networking with Retrofit & Coroutines',
        'Maintainable MVVM architecture ready for scaling',
      ],
      suitableFor: [
        'Businesses needing a dedicated customer mobile app',
        'Founders with a novel Android utility or platform concept',
        'Companies requiring internal utility or data-collection apps',
      ],
      deliverables: [
        'Production-ready Android APK / App Bundle',
        'Well-documented Kotlin codebase following MVVM',
        'Room local persistence and Retrofit network integration',
        'App store preparation or direct deployment guidance',
      ],
      timelineGuide: 'Typically 2–5 weeks depending on feature set',
    },
    {
      id: 'frontend-and-uiux',
      title: 'Frontend & UI/UX Design',
      shortDesc: 'Conversion-oriented interface design, responsive layouts, and modern frontends built with precision.',
      fullDesc: 'We translate your business vision into intuitive user interfaces. Combining visual hierarchy, typography, and clean interaction states to maximize visitor engagement and conversions.',
      iconName: 'Palette',
      benefits: [
        'High visual polish with dark mode or brand aesthetics',
        'Designed for high lead capture from Instagram & social ads',
        'Clear typography hierarchy and zero-clutter layouts',
        'Accessible, keyboard-navigable components',
      ],
      suitableFor: [
        'Brands with an outdated website needing a modern overhaul',
        'Teams with an API or backend needing a modern frontend',
        'Entrepreneurs running paid ad campaigns needing landing pages',
      ],
      deliverables: [
        'High-fidelity component design & UI layout',
        'Responsive Tailwind CSS or modern CSS implementation',
        'Fluid interactive transitions and states',
        'Cross-browser and mobile device verification',
      ],
      timelineGuide: 'Typically 1–2 weeks',
    },
    {
      id: 'maintenance-and-support',
      title: 'Website Redesign & Maintenance',
      shortDesc: 'Ongoing technical upkeep, performance tuning, bug fixes, content refreshes, and security updates.',
      fullDesc: 'Keep your digital platforms running smoothly and securely. We resolve code defects, update packages, optimize Core Web Vitals, and add new features as your business grows.',
      iconName: 'Wrench',
      benefits: [
        'Direct developer communication without agency middlemen',
        'Proactive bug fixes and security patch updates',
        'Page speed and Google Core Web Vitals optimization',
        'Reliable support after project delivery',
      ],
      suitableFor: [
        'Existing websites suffering from slow load speeds or bugs',
        'Businesses needing regular content and feature updates',
        'Clients seeking peace of mind with technical support',
      ],
      deliverables: [
        'Code audit and performance diagnosis',
        'Bug triage and resolution',
        'Asset optimization and caching setup',
        'Periodic technical check-ups',
      ],
      timelineGuide: 'On-demand or scheduled maintenance blocks',
    },
  ] as ServiceItem[],

  projects: [
    {
      id: 'notes-app',
      title: 'Notes App',
      category: 'Android Apps',
      tagline: 'Fast, offline-first personal notes management with local SQLite persistence and cloud sync architecture.',
      summary: 'A clean and resilient Android notes application built following modern Android architectural standards. Features rapid note creation, categorical organization, SQLite local storage with Room, and clean MVVM separation.',
      problem: 'Users frequently need a lightweight, fast, distraction-free note-taking utility that guarantees zero data loss even when disconnected from the internet, while remaining snappy on diverse Android hardware.',
      solution: 'Engineered an offline-first Android application in Kotlin using Jetpack Compose for declarative UI, Room ORM for local caching, and Retrofit for REST API networking over MVVM layers.',
      keyFeatures: [
        'Declarative UI built entirely with Jetpack Compose',
        'Offline-first persistence with Room database & DAO queries',
        'Network synchronization via Retrofit and Kotlin Coroutines',
        'MVVM architecture with StateFlow and ViewModel lifecycle binding',
        'Search and filter capabilities with instant response',
      ],
      techStack: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Retrofit', 'MVVM', 'Coroutines'],
      architecture: 'Clean Architecture with MVVM: Presentation (Compose UI + ViewModel) -> Domain -> Data (Room Local Source + Retrofit Remote Source)',
      githubUrl: 'https://github.com/Ahmadgit123/NotesApp',
      liveDemoUrl: '',
      demoStatus: 'available',
      previewImage: '/src/assets/images/mockup_android_showcase_1793287721334.jpg',
      highlights: [
        { label: 'Platform', value: 'Android 8.0+' },
        { label: 'Architecture', value: 'MVVM + Clean' },
        { label: 'Storage', value: 'Room SQLite' },
        { label: 'Source Code', value: 'Public on GitHub' },
      ],
    },
    {
      id: 'weather-app',
      title: 'Weather App',
      category: 'Android Apps',
      tagline: 'Modern real-time meteorological forecasting application with Material 3 dynamics.',
      summary: 'A responsive Android weather application providing real-time conditions, multi-day forecasting, atmospheric metrics, and dynamic UI states using Kotlin, Jetpack Compose, and Material 3 design principles.',
      problem: 'Traditional weather applications often suffer from cluttered advertising, laggy scroll performance, and confusing visual clutter when users simply need clear, immediate atmospheric data.',
      solution: 'Developed a streamlined, aesthetically pleasing weather forecast utility consuming REST APIs with Retrofit, displaying temperature trends, humidity, wind velocity, and condition-aware color theming.',
      keyFeatures: [
        'Dynamic Material 3 theme adapting to atmospheric conditions',
        'Real-time weather data retrieval via RESTful API integration',
        'Multi-day forecasts with temperature graphs and precipitation indicators',
        'Graceful offline fallback and network error handling states',
        'Efficient asynchronous queries powered by Kotlin Flow',
      ],
      techStack: ['Kotlin', 'Jetpack Compose', 'Retrofit', 'MVVM', 'Material 3', 'Coroutines'],
      architecture: 'MVVM pattern with Repository layer mediating API calls and emitting reactive StateFlow to Compose composables',
      githubUrl: '',
      liveDemoUrl: '',
      demoStatus: 'in_progress',
      previewImage: '/src/assets/images/mockup_android_showcase_1793287721334.jpg',
      highlights: [
        { label: 'Design System', value: 'Material 3' },
        { label: 'Networking', value: 'Retrofit 2' },
        { label: 'Async Model', value: 'Kotlin Coroutines' },
        { label: 'Live Demo', value: 'APK On Request' },
      ],
    },
    {
      id: 'ai-resume-screening',
      title: 'AI-Powered Resume Screening System',
      category: 'AI / Python Projects',
      tagline: 'Automated candidate evaluation engine using TF-IDF vectorization and cosine similarity scoring.',
      summary: 'An intelligent recruitment assistance pipeline that parses candidate resumes, extracts core competencies, and computes mathematical similarity scores against job descriptions using Natural Language Processing.',
      problem: 'Recruiters and small businesses receive dozens or hundreds of unstructured PDF/Word resumes for a single opening, creating severe bottlenecks in identifying top-matching candidates quickly and objectively.',
      solution: 'Engineered a high-performance Python FastAPI service utilizing TF-IDF text vectorization, NLTK text normalization, and scikit-learn cosine similarity matrices to objectively rank candidate suitability against job specifications.',
      keyFeatures: [
        'Automated resume text parsing and normalization',
        'TF-IDF vector space modeling for lexical matching',
        'Cosine similarity ranking with percentage relevance scores',
        'Skill extraction matrix pinpointing matching & missing requirements',
        'Fast REST API endpoints built with FastAPI and Pydantic validation',
      ],
      techStack: ['Python', 'FastAPI', 'TF-IDF', 'scikit-learn', 'Cosine Similarity', 'NLP'],
      architecture: 'Microservice API: FastAPI endpoint -> Text Preprocessor (tokenization, stop-words) -> TF-IDF Vectorizer -> Similarity Calculator -> Ranked Response',
      githubUrl: '',
      liveDemoUrl: '',
      demoStatus: 'in_progress',
      previewImage: '/src/assets/images/mockup_ai_data_system_1793287721882.jpg',
      highlights: [
        { label: 'Backend', value: 'FastAPI' },
        { label: 'Algorithm', value: 'TF-IDF + Cosine' },
        { label: 'Processing', value: 'Sub-second Scoring' },
        { label: 'Domain', value: 'HR Tech / NLP' },
      ],
    },
    {
      id: 'ai-stock-price-prediction',
      title: 'AI Multi-Horizon Stock Price Prediction',
      category: 'AI / Python Projects',
      tagline: 'Deep learning time-series forecasting platform utilizing LSTM recurrent neural networks.',
      summary: 'A multi-horizon financial time-series forecasting web system. Trains Long Short-Term Memory (LSTM) recurrent networks on historical market data to project future price trajectories with interactive charting.',
      problem: 'Financial price movements exhibit non-linear temporal dependencies that simple moving averages and static indicators fail to capture over multi-step horizons.',
      solution: 'Designed an end-to-end forecasting pipeline in Python and Flask using TensorFlow/Keras LSTM architectures, Pandas/NumPy data preprocessing, and an interactive front-end dashboard with Chart.js.',
      keyFeatures: [
        'Time-series data cleaning, feature scaling, and sliding window normalization',
        'Multi-layer LSTM neural network trained using TensorFlow / Keras',
        'Multi-horizon projections comparing predicted vs actual historical curves',
        'Interactive financial charts rendered with Chart.js and JavaScript',
        'Flask backend serving prediction endpoints with real-time inference',
      ],
      techStack: ['Python', 'Flask', 'TensorFlow/Keras', 'LSTM', 'Pandas', 'NumPy', 'Chart.js'],
      architecture: 'Full-stack ML Pipeline: Data Fetcher -> Preprocessor (MinMaxScaler) -> Trained LSTM Model -> Flask REST API -> Interactive Frontend Charts',
      githubUrl: '',
      liveDemoUrl: '',
      demoStatus: 'in_progress',
      previewImage: '/src/assets/images/mockup_ai_data_system_1793287721882.jpg',
      highlights: [
        { label: 'Deep Learning', value: 'LSTM Neural Nets' },
        { label: 'Framework', value: 'TensorFlow & Keras' },
        { label: 'Visualization', value: 'Chart.js Dynamic' },
        { label: 'Serving', value: 'Flask Python REST' },
      ],
    },
  ] as Project[],

  pricing: [
    {
      id: 'starter-website',
      name: 'Starter Website',
      badge: 'Ideal for New Ventures',
      tagline: 'Single or multi-page modern web presence crafted to establish credibility and capture inbound leads.',
      indicativePrice: 'Custom quote based on scope',
      priceNote: 'Every business is unique. We provide transparent, itemized quotes before any work begins.',
      features: [
        'High-converting modern responsive design',
        'Mobile, tablet, and desktop optimization',
        'Lead capture form connected to WhatsApp / Email',
        'Search engine optimization (SEO) setup & OpenGraph',
        'Social media & Instagram links integration',
        'Fast deployment and domain connection support',
      ],
      deliveryEstimate: 'Typically 7–14 days',
      suitableFor: 'Local businesses, restaurants, cafes, freelancers, and personal brands.',
    },
    {
      id: 'business-website',
      name: 'Business Website',
      badge: 'Most Popular',
      tagline: 'Comprehensive digital portal with multiple service pages, interactive components, and lead automation.',
      indicativePrice: 'Custom quote based on scope',
      priceNote: 'Transparent milestones and zero hidden fees. Scope agreed upon before writing the first line of code.',
      features: [
        'Multi-page architecture with custom navigation',
        'Detailed service showcases and case studies',
        'Custom interactive forms & WhatsApp enquiry routing',
        'Advanced performance optimization & fast load times',
        'Analytics & Meta Pixel setup for Instagram ad tracking',
        'Post-delivery support & maintenance documentation',
      ],
      deliveryEstimate: 'Typically 2–3 weeks',
      suitableFor: 'Growing SMBs, coaching institutes, clinics, and professional service agencies.',
    },
    {
      id: 'custom-android-app',
      name: 'Custom Android App',
      badge: 'Native Mobile',
      tagline: 'Custom Android mobile application built with native Kotlin, Jetpack Compose, and clean MVVM architecture.',
      indicativePrice: 'Custom quote based on scope',
      priceNote: 'Tailored to your specific feature complexity, database needs, and API integrations.',
      features: [
        'Modern declarative UI with Jetpack Compose & Material 3',
        'Offline caching with Room SQLite database',
        'REST API networking and real-time data sync',
        'Clean MVVM architecture ensuring long-term stability',
        'Rigorous testing on multiple Android OS versions',
        'APK delivery & Play Store publishing assistance',
      ],
      deliveryEstimate: 'Typically 3–5 weeks',
      suitableFor: 'Startups, utility tools, customer portals, and internal enterprise workflows.',
    },
  ] as PricingPackage[],

  processSteps: [
    {
      step: '01',
      title: 'Discovery & Consultation',
      description: 'We discuss your project goals, required features, timeline, and budget over WhatsApp or email to align on exact requirements.',
    },
    {
      step: '02',
      title: 'Clear Scope & Agreement',
      description: 'We establish an itemized scope of work with milestone deliverables, transparent pricing, and realistic timelines with zero ambiguity.',
    },
    {
      step: '03',
      title: 'Modern Development',
      description: 'We write clean, modular, and maintainable code in Kotlin, React, or Python, sharing regular visual progress updates along the way.',
    },
    {
      step: '04',
      title: 'Testing & Polish',
      description: 'Rigorous cross-device testing, responsive layout checks, speed optimization, and form validation verification.',
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Deployment to your live domain or APK delivery, followed by ongoing post-launch technical assistance.',
    },
  ],

  faqs: [
    {
      question: 'How do we get started on a project with RK Solution?',
      answer: 'Simply reach out via WhatsApp, email, or our project enquiry form with a brief summary of what you need. We will respond promptly within 2–4 hours to discuss your requirements, provide an honest technical assessment, and deliver a transparent quote.',
    },
    {
      question: 'How is project pricing calculated?',
      answer: 'We do not believe in artificial or hidden costs. Pricing depends directly on your project scope, required features, technical complexity (such as database integration or third-party APIs), and delivery timeline. You receive an itemized, agreed proposal before any development commences.',
    },
    {
      question: 'Can I track enquiries coming from my Instagram ads?',
      answer: 'Yes! We configure custom UTM tracking parameters, WhatsApp pre-filled reference text, and can integrate Google Analytics 4 and Meta Pixel so you know precisely which campaigns and ads generate qualified client inquiries.',
    },
    {
      question: 'Do you provide support after the website or app is delivered?',
      answer: 'Absolutely. Every project includes post-launch support to resolve any unexpected issues, guide you through hosting or app deployment, and ensure your digital product operates seamlessly.',
    },
    {
      question: 'Can you build both the website and the Android app for my business?',
      answer: 'Yes. RK Solution specializes in cross-platform digital presence—building both modern, high-converting websites and native Android apps with consistent branding and shared backend APIs.',
    },
    {
      question: 'What if I already have an existing website that needs redesign or bug fixing?',
      answer: 'We provide redesign and maintenance services. We will inspect your current code or platform, identify performance bottlenecks or outdated UI, and revitalize your web presence.',
    },
  ],
};
