// i18n.js
module.exports = {
  locales: ['en', 'ko'],
  defaultLocale: 'en',

  pages: {
    '*': ['main'],
    '/[lang]': ['main'], // app/page.tsx
  },
};
