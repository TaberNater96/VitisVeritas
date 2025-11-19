export default function generateSitemap() {
  const baseUrl = 'https://www.vitis-veritas.com';
  const pages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/terroir', priority: '0.9', changefreq: 'monthly' },
    { path: '/alchemy', priority: '0.9', changefreq: 'monthly' },
    { path: '/about', priority: '0.7', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
}
