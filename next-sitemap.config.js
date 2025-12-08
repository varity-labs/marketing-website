/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://varity.xyz',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
  },
  priority: 0.7,
  changefreq: 'weekly',
  transform: async (config, path) => {
    // Custom priorities for different pages
    const priorities = {
      '/': 1.0,
      '/dashboard': 1.0,
      '/pricing': 0.9,
      '/platform': 0.8,
      '/about': 0.7,
      '/contact': 0.7,
      '/blog': 0.6,
      '/privacy': 0.3,
      '/terms': 0.3,
      '/acceptable-use': 0.3,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
