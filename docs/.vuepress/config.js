module.exports = {
  title: 'Prateek Kumar',
  description: 'Developer. ❤️ Mathematics and Computer Science',
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'http://github.com/prateekkumarweb' },
    ],
    repo: "prateekkumarweb/blog-vuepress",
    repoLabel: "Fork this site!",
    editLinks: true
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-89128710-1'
      }
    ]
  ]
}
