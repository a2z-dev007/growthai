import { Layout, Smartphone, ShoppingCart, Laptop, Code, MessageSquare, Brush, Search, Cpu, Globe } from 'lucide-react';

export const services = [
  {
    slug: 'wordpress-development',
    title: 'WordPress & Web Design',
    shortDescription: 'Custom, SEO-friendly WordPress websites tailored for small businesses and bloggers.',
    fullDescription: 'Our WordPress solutions go beyond simple templates. We create custom, fast-loading, and conversion-optimized websites that help small businesses and creators establish a dominant online presence.',
    icon: Layout,
    color: '#22C55E',
    benefits: [
      'Easy Content Management',
      'Extreme Speed Optimization',
      'SEO Friendly Architecture',
      'Mobile-First Design',
      'Top-Tier Security'
    ],
    features: [
      'Custom Theme Development',
      'WooCommerce Integration',
      'Elementor/Divi Mastery',
      'Automated Backups',
      'Custom Plugin Configuration'
    ]
  },
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    shortDescription: 'Custom web applications built for performance, security, and scalability.',
    fullDescription: 'We build enterprise-grade web applications that solve complex business problems. From custom ERPs to interactive portals, we deliver scalable solutions using the latest web technologies.',
    icon: Globe,
    color: '#3B82F6',
    benefits: [
      'Built for High Performance',
      'Scalable Enterprise Architecture',
      'Secure Data Management',
      'Interactive User Experience',
      'Cross-browser Compatibility'
    ],
    features: [
      'React & Next.js Implementation',
      'Complex Business Logic',
      'Third-party Integrations',
      'Real-time Data Processing',
      'Progressive Web Apps (PWA)'
    ]
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile App Development',
    shortDescription: 'Beautiful, high-performance mobile apps for iOS and Android using a single codebase.',
    fullDescription: 'We specialize in React Native and Flutter development, delivering high-performance cross-platform apps that feel native. Perfect for startups looking to reach both iOS and Android markets quickly.',
    icon: Smartphone,
    color: '#0EA5E9',
    benefits: [
      'Cost-Effective cross-platform',
      'Native-grade performance',
      'Stunning UI/UX animations',
      'Scalable backend integration',
      'App Store/Play Store approval'
    ],
    features: [
      'Real-time Notifications',
      'Offline Functionality',
      'Biometric Authentication',
      'Payment Gateway Integration',
      'Custom API Development'
    ]
  },
  {
    slug: 'ecommerce',
    title: 'Ecommerce Solutions',
    shortDescription: 'Scalable online stores with seamless payment integration and user-friendly management.',
    fullDescription: 'From Shopify to custom Headless Commerce, we build online stores that are designed to sell. We focus on checkout optimization, abandoned cart recovery, and lightning-fast loading speeds.',
    icon: ShoppingCart,
    color: '#8B5CF6',
    benefits: [
      'Proven Conversion Boost',
      'Mobile-Optimized Checkout',
      'Global Payment Gateways',
      'Inventory Management Tools',
      'Advanced Product Filtering'
    ],
    features: [
      'Shopify/BigCommerce Mastery',
      'Next.js Commerce (Headless)',
      'Product Recommendation Engine',
      'Customer Retention Tools',
      'Detailed Sales Analytics'
    ]
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design Strategy',
    shortDescription: 'Modern, high-converting interfaces crafted for businesses and startups.',
    fullDescription: 'We don\'t just make things look pretty; we design for conversions. Our UI/UX strategy involves user research, wireframing, and high-fidelity prototyping to ensure your users have a seamless journey.',
    icon: Brush,
    color: '#EC4899',
    benefits: [
      'Enhanced User Satisfaction',
      'Reduced Churn Rates',
      'Professional Brand Identity',
      'Intuitive User Journeys',
      'Faster Development Sync'
    ],
    features: [
      'Figma Prototyping',
      'Design Systems (UI Kit)',
      'User Personas & Flows',
      'A/B Testing Mockups',
      'Motion Design & Micro-interactions'
    ]
  },
  {
    slug: 'branding-identity',
    title: 'Branding & Identity',
    shortDescription: 'Compelling brand stories and visual identities for modern companies.',
    fullDescription: 'We help you stand out in a crowded market. From logo design to brand voice guidelines, we create a cohesive identity that resonates with your target audience and builds lasting trust.',
    icon: Brush,
    color: '#8257E5',
    benefits: [
      'Memorable Brand Presence',
      'Increased Brand Recognition',
      'Consistent Visual Language',
      'Emotional Connection with Users',
      'Competitive Differentiation'
    ],
    features: [
      'Logo & Visual Identity',
      'Brand Voice & Messaging',
      'Corporate Stationery Design',
      'Social Media Branding',
      'Brand Strategy Workshop'
    ]
  },
  {
    slug: 'seo-marketing',
    title: 'SEO & Digital Growth',
    shortDescription: 'Data-driven SEO and marketing strategies to scale your business.',
    fullDescription: 'Getting visitors to your site is only half the battle. We optimize your technical SEO, content strategy, and paid campaigns to ensure you are reaching the right audience at the right time.',
    icon: Search,
    color: '#10B981',
    benefits: [
      'Dominant Search Rankings',
      'Organic Traffic Increase',
      'Lower Customer Acquisition Cost',
      'Data-Driven Insights',
      'Brand Authority Building'
    ],
    features: [
      'Technical SEO Audit',
      'Content Marketing Strategy',
      'High-Quality Backlink Building',
      'PPC Campaign Management',
      'Local SEO Optimization'
    ]
  },
  {
    slug: 'frontend-development',
    title: 'Frontend Development',
    shortDescription: 'Modern, high-performance web interfaces built with React and Next.js.',
    fullDescription: 'We build pixel-perfect, lightning-fast frontend applications that provide an exceptional user experience. Using the latest technologies like Next.js 15 and Tailwind CSS, we ensure your site is future-proof.',
    icon: Code,
    color: '#61DAFB',
    benefits: [
      'Ultra-fast Load Speed',
      'Pixel-Perfect Implementation',
      'Interactive UI Components',
      'Responsive Across All Devices',
      'SEO-Optimized Rendering'
    ],
    features: [
      'Next.js & React Mastery',
      'Tailwind CSS Styling',
      'Framer Motion Animations',
      'State Management (Zustand/Redux)',
      'Web Performance Audit'
    ]
  },
  {
    slug: 'backend-development',
    title: 'Backend & API Solutions',
    shortDescription: 'Robust, secure, and scalable server-side architectures and APIs.',
    fullDescription: 'Our backend solutions are built for high-scale performance. We specialize in Node.js, Python, and Go to build secure APIs, microservices, and complex database management systems.',
    icon: Cpu,
    color: '#FF6F00',
    benefits: [
      'Massive Scalability',
      'Enterprise-Grade Security',
      'High-Available Architecture',
      'Efficient Data Management',
      'Seamless Third-party Integrations'
    ],
    features: [
      'Node.js/Express/NestJS',
      'REST & GraphQL APIs',
      'PostgreSQL/MongoDB Mastery',
      'Redis Caching Strategies',
      'Authentication (Auth.js/Clerk)'
    ]
  },
  {
    slug: 'saas-development',
    title: 'Custom SaaS Development',
    shortDescription: 'End-to-end development of scalable multi-tenant software platforms.',
    fullDescription: 'Building a SaaS requires more than just code; it requires a scalable architecture. We help startups and companies build robust multi-tenant platforms with complex permission systems and subscription models.',
    icon: Laptop,
    color: '#F59E0B',
    benefits: [
      'Modular & Scalable Codebase',
      'Advanced Security Protocols',
      'Seamless Subscription Management',
      'High-Performance Frontend',
      'Future-Proof Technology Stack'
    ],
    features: [
      'Multi-tenant Architecture',
      'Stripe/LemonSqueezy Payments',
      'Role-Based Access Control',
      'Interactive Dashboards',
      'API-first Development'
    ]
  },
  {
    slug: 'payment-integration',
    title: 'Payment Integration',
    shortDescription: 'Secure and seamless payment gateway integrations for your business.',
    fullDescription: 'We help you monetize your platform with secure, global payment solutions. From Stripe and PayPal to custom crypto gateways, we ensure your checkout process is smooth, secure, and conversion-optimized.',
    icon: ShoppingCart,
    color: '#38BDF8',
    benefits: [
      'Global Payment Support',
      'PCI Compliance Ready',
      'Reduced Checkout Friction',
      'Automated Invoicing',
      'Subscription Management'
    ],
    features: [
      'Stripe/PayPal Mastery',
      'Apple/Google Pay Setup',
      'Crypto Payment Gateways',
      'Refund Management Systems',
      'Fraud Detection Setup'
    ]
  },
  {
    slug: 'ai-chatbots',
    title: 'AI Chatbots & AI Integration',
    shortDescription: 'Intelligent, 24/7 conversational agents to automate customer service and sales.',
    fullDescription: 'We build advanced AI-driven chatbots and automation workflows that handle customer inquiries, qualify leads, and streamline business operations. Using GPT-4 and custom RAG (Retrieval-Augmented Generation) models, we ensure your bot knows your business inside out.',
    icon: MessageSquare,
    color: '#14B8A6',
    benefits: [
      '24/7 Instant Customer Support',
      '90% Reduction in Support Costs',
      'Seamless Human Handoff',
      'Personalized Recommendations',
      'Integration with WhatsApp, Meta & Web'
    ],
    features: [
      'Natural Language Processing',
      'Custom Knowledge Base Integration',
      'Multi-lingual Support',
      'Analytics Dashboard',
      'Voice-to-Text Capabilities'
    ]
  }
];
