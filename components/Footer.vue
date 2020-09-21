<template>
  <footer class="bg-gray-900 text-gray-300 px-auto pt-12 pb-3 text-center">
    <p class="px-3">
      <strong class="has-text-white">&copy; 2020 Prateek Kumar.</strong>
      The
      <a
        class="underline hover:no-underline"
        href="https://github.com/prateekkumarweb/prateekkumar.in"
        >source code</a
      >
      for this website is licensed under
      <a
        class="underline hover:no-underline"
        href="https://opensource.org/licenses/mit-license.php"
        >MIT</a
      >. The website content is licensed under
      <a
        class="underline hover:no-underline"
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        >CC BY SA 4.0</a
      >. <br />Deployed using
      <a class="underline hover:no-underline" href="https://vercel.com/"
        >Vercel</a
      >.
    </p>
    <p class="mt-8 text-right px-3">
      <a
        class="underline hover:no-underline text-xs"
        href="javascript:"
        @click="updateFont()"
      >
        {{
          comicFont
            ? 'Switch back to default font.'
            : 'Switch to Comic Sans MS font.'
        }}
      </a>
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      comicFont: false,
    };
  },
  methods: {
    updateFont() {
      if (document.body.classList.contains('font-comic')) {
        document.body.classList.remove('font-comic');
        this.comicFont = false;
      } else {
        document.body.classList.add('font-comic');
        this.comicFont = true;
      }
    },
  },
};
</script>
