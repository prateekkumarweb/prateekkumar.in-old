module.exports = {
  title: 'Prateek Kumar',
  description: 'Developer. ❤️ Mathematics and Computer Science',
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'http://github.com/prateekkumarweb' },
      {
        text: 'Research', items: [
          { text: 'Google Scholar', link: 'https://scholar.google.co.in/citations?user=M1NFyhAAAAAJ&hl=en' },
          { text: 'dblp', link: 'https://dblp.org/pers/hd/k/Kumar_0001:Prateek' },
          { text: 'ORCiD', link: 'https://orcid.org/0000-0003-2089-8463' }
        ]
      }
    ],
    repo: "prateekkumarweb/blog-vuepress",
    repoLabel: "Fork this site!",
    editLinks: true
  },
  plugins: {
    '@vuepress/google-analytics': {
      'ga': 'UA-89128710-1',
    },
    '@vuepress/back-to-top': {},
    '@vuepress/nprogress': {},
    '@vuepress/pwa': {}
  },
  markdown: {
    lineNumbers: true
  },
  evergreen: true
}
