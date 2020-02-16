<template>
  <footer class="bg-gray-900 text-gray-300 px-auto py-12 mt-6 text-center">
    <p>
      <strong class="has-text-white"
        >&copy; 2020 {{ $static.metadata.siteName }}.</strong
      >
      The source code for this website is licensed under
      <a
        class="link text-white"
        href="https://opensource.org/licenses/mit-license.php"
        >MIT</a
      >. The website content is licensed under
      <a
        class="link text-white"
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        >CC BY SA 4.0</a
      >. <br />Built using Vue.js, Tailwindcss, Gridsome. Deployed using
      Netlify.
    </p>
  </footer>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>
