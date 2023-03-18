import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/",
      name: "About",
      component: About,
    },
  ],
});
export default router;
