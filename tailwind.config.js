const plugin = require('tailwindcss/plugin');
const darkModePlugin = plugin(function ({ addVariant, e }) {
  const darkSelector = 'dark';
  addVariant('dark', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${darkSelector} .${e(`dark${separator}${className}`)}`;
    });
  });
  addVariant('dark-hover', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${darkSelector} .${e(
        `dark-hover${separator}${className}`
      )}:hover`;
    });
  });
});

/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Noto Sans', 'sans-serif'],
      body: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#123456',
      },
    },
  },
  variants: {
    backgroundColor: [
      ...require('tailwindcss/stubs/defaultConfig.stub').variants
        .backgroundColor,
      'dark',
      'dark-hover',
    ],
    textColor: [
      ...require('tailwindcss/stubs/defaultConfig.stub').variants.textColor,
      'dark',
      'dark-hover',
    ],
    borderColor: [
      ...require('tailwindcss/stubs/defaultConfig.stub').variants.borderColor,
      'dark',
      'dark-hover',
    ],
    placeholderColor: [
      ...require('tailwindcss/stubs/defaultConfig.stub').variants
        .placeholderColor,
      'dark',
      'dark-hover',
    ],
  },
  plugins: [require('@tailwindcss/typography'), darkModePlugin],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
