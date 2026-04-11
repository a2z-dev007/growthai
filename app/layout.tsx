import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css'; // Global styles
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'GrowthAI | AI-Powered Software Agency for Startups & Founders',
  description: 'GrowthAI is an elite software development agency specializing in AI-accelerated MVP development, custom web applications, and intelligent automation for ambitious founders.',
  keywords: ['AI software agency', 'MVP development', 'startup developers', 'custom software development', 'AI automation solutions', 'Next.js development agency', 'React Native mobile apps'],
  authors: [{ name: 'GrowthAI Team' }],
  openGraph: {
    title: 'GrowthAI | Scale Faster with AI-Accelerated Development',
    description: 'We build high-performance digital products for founders who need speed, quality, and execution.',
    url: 'https://growthai.in',
    siteName: 'GrowthAI',
    images: [
      {
        url: 'https://growthai.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GrowthAI - Build Smart. Launch Fast. Scale with AI.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowthAI | Scale Faster with AI',
    description: 'Elite engineering for ambitious founders. MVP in weeks, not months.',
    images: ['https://growthai.in/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  metadataBase: new URL('https://growthai.in'),
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} dark}`}>
      <body className="bg-[#0B0F19] text-white font-inter antialiased selection:bg-[#22C55E]/30 selection:text-white overflow-x-hidden" suppressHydrationWarning>
        <Preloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
