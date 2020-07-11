// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLink,
  faArrowLeft,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "~/main.scss";
import DefaultLayout from "~/layouts/Default.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import VueDisqus from "vue-disqus";

config.autoAddCss = false;
library.add(
  faGithub,
  faTwitter,
  faLinkedin,
  faEnvelope,
  faLink,
  faArrowLeft,
  faBook
);

export default function (Vue, { router, head, isClient }) {
  NProgress.configure();
  Vue.use(VueDisqus, { shortname: "prateekkumar" });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);

  router.beforeEach((to, from, next) => {
    if (from.name !== null) {
      NProgress.start();
    }
    next();
  });

  router.afterEach((to, from) => {
    NProgress.done();
  });

  head.meta.push({
    name: "theme-color",
    content: "#123456",
  });

  head.link.push({
    rel: "manifest",
    href: "/manifest.json",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Noto+Sans&display=swap",
  });

  head.script.push({
    src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",
    body: true,
    async: true,
  });
}
