module.exports = {
  title: 'ShoppRe Developers',
  description: 'Know more about ShoppRe',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Login', link: 'https://login.shoppre.com/signin?client_id=developers' },
      { text: 'Signup', link: 'https://login.shoppre.com/signup?client_id=developers' },
    ],
  },
  dest: 'public',
  plugins: [
    'social-share',
    {
      'sitemap': {
        hostname: 'https://developers.shoppre.com'
      },
    }
  ],
};
