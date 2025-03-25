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
});

export default router;
