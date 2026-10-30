import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

const routes = ['/'];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({ url: new URL(route, siteUrl).toString(), lastModified, priority: route === '/' ? 1 : 0.7 }));
}
