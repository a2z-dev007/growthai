import type {Metadata} from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css'; // Global styles
import SmoothScroll from '@/components/SmoothScroll';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'GrowthAI | Build Smart. Launch Fast. Scale with AI.',
  description: 'Launch AI-Powered Products in Weeks — Not Months. Helping startups & businesses scale with intelligent systems.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} dark}`}>
      <body className="bg-[#0B0F19] text-white font-inter antialiased selection:bg-[#22C55E]/30 selection:text-white overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
