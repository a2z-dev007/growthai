import { notFound } from 'next/navigation';
import { services } from '@/lib/services-data';
import ServiceDetailClient from '@/components/ServiceDetailClient';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  
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

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
