// i18n.js
module.exports = {
  locales: ['en', 'ko', 'ja', 'cn'],
  defaultLocale: 'en',

  pages: {
    '*': ['main'],
    '/': ['main'],
    '/[lang]': ['main'],
  },
};
