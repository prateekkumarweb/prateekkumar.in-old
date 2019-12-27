module.exports = {
  siteName: 'Prateek Kumar',
  siteDescription: 'Developer | Rust and JavaScript | WebAssembly enthusiast.',
  titleTemplate: '%s',
  templates: {
    Post: '/blog/:title',
  },
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-89128710-1'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
      }
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'fas fa-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
