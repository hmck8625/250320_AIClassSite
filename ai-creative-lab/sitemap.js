const sitemap = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/blog', priority: 0.9, changefreq: 'weekly' },
  
  // ブログカテゴリ
  { url: '/blog/category/parent-column', priority: 0.7, changefreq: 'weekly' },
  { url: '/blog/category/classroom-report', priority: 0.7, changefreq: 'weekly' },
  { url: '/blog/category/student-interview', priority: 0.7, changefreq: 'weekly' },
  { url: '/blog/category/event-info', priority: 0.7, changefreq: 'weekly' },
  { url: '/blog/category/ai-education', priority: 0.7, changefreq: 'weekly' },
  
  // 個別ブログ記事
  { url: '/blog/ai-programming-for-kids', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog/ai-education-future', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog/creativity-development', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog/screen-time-balance', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog/ai-education-trends-2025', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog/student-interview-yuki', priority: 0.8, changefreq: 'monthly' },
  { url: '/blog/winter-workshop-report', priority: 0.8, changefreq: 'monthly' },
  
  // その他のページ
  { url: '/about', priority: 0.7, changefreq: 'weekly' },
  { url: '/contact', priority: 0.6, changefreq: 'monthly' },
  
  // コースページ
  { url: '/courses', priority: 0.8, changefreq: 'weekly' },
  { url: '/courses/ai-art', priority: 0.7, changefreq: 'monthly' },
  { url: '/courses/app-dev', priority: 0.7, changefreq: 'monthly' },
  { url: '/courses/game-creator', priority: 0.7, changefreq: 'monthly' },
  { url: '/courses/music', priority: 0.7, changefreq: 'monthly' },
  { url: '/courses/robotics', priority: 0.7, changefreq: 'monthly' },
  { url: '/courses/video', priority: 0.7, changefreq: 'monthly' },
  
  { url: '/gallery', priority: 0.6, changefreq: 'weekly' },
  { url: '/trial', priority: 0.6, changefreq: 'monthly' }
];

export default sitemap;
