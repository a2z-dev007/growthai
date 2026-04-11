import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elite Software Services | AI, Web & Mobile Development',
  description: 'Explore our range of high-performance software services. From custom AI solutions to MVP development for startups.',
  openGraph: {
    title: 'Our Services | GrowthAI',
    description: 'Expert engineering services for modern startups and enterprises.',
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
