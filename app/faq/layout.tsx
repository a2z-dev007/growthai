import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | GrowthAI Support & Clarity',
  description: 'Common questions about our process, technology, and how we help founders build market-leading products.',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
