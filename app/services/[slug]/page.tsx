import { notFound } from 'next/navigation';
import { services } from '@/lib/services-data';
import ServiceDetailClient from '@/components/ServiceDetailClient';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) return { title: 'Service Not Found | GrowthAI' };

  return {
    title: `${service.title} | GrowthAI AI-Powered Development`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Scale with GrowthAI`,
      description: service.fullDescription,
      images: [{ url: '/og-image.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | GrowthAI`,
      description: service.shortDescription,
    }
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient slug={slug} />;
}
