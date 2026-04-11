import { MetadataRoute } from 'next';
import { services } from '@/lib/services-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://growthai.in';

  // Static routes
  const routes = ['', '/services', '/faq', '/privacy-policy', '/terms-of-service'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    })
  );

  // Dynamic service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes];
}
