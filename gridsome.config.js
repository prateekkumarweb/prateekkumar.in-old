const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const postcssPlugins = [tailwind(), autoprefixer()];

module.exports = {
  siteName: "Prateek Kumar",
  siteDescription: "Developer | Rust and JavaScript | WebAssembly Enthusiast",
  titleTemplate: "%s",
  templates: {
    Post: "/:year/:month/:title",
    Tag: "/tags/:id",
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-89128710-1",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "fas fa-link",
      plugins: ["remark-emoji", "@gridsome/remark-prismjs"],
    },
  },
};
