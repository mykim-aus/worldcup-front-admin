/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

const imagesConfig = {
  images: {
    domains: ['storage.googleapis.com'],
  },
};

const customConfig = {
  experimental: {
    appDir: true,
  },
  // ... 다른 Next.js 설정이 있다면 여기에 추가
};

module.exports = {
  ...imagesConfig,
  ...nextTranslate(customConfig),
};
