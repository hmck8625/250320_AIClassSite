/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tokyo-ai-classschool.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: './public',
  exclude: ['/api/*'],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}