/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tokyo-ai-classschool.netlify.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  outDir: './out',
}
