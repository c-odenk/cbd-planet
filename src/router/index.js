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
  /*
  {
    path: "/about",
    name: "about",
    component: () => import('../views/View-Stromaggregat.vue')
  },
  */
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
