module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.pug",
    "./src/**/*.md"
  ],
  whitelist: [
    "body",
    "html",
    "img",
    "a",
    "g-image",
    "g-image--lazy",
    "g-image--loaded",
    "svg-inline--fa",
    "table",
    "tr",
    "th",
    "td"
  ],
  whitelistPatterns: [/fa-[^ ]*/],
  extractors: [
    {
      extractor: content => {
        return content.match(/[A-z0-9-:\\/]+/g);
      },
      extensions: ["vue", "js", "jsx", "md", "html", "pug"]
    }
  ]
};
