import { createRouter, createWebHashHistory } from "vue-router";
import Landing from "../views/View-Landing.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: () => import("../views/View-Impressum.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/View-Blog.vue"),
  },
  {
    path: "/blogpost",
    name: "BlogPost",
    component: () => import("../views/View-Blog-Post.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Wenn die Zurück- oder Vorwärts-Taste im Browser verwendet wurde und es eine gespeicherte Position gibt
    if (savedPosition) {
      return savedPosition;
    }

    // Wenn ein Hash/Anker in der URL vorhanden ist (z.B. /some-page#section1)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    // Ansonsten zum Seitenanfang scrollen
    return { top: 0 };
  },
});

export default router;
