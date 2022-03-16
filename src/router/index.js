import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import AuthCallback from "../views/AuthCallback.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        auth: true,
      },
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
      meta: {
        auth: false,
      },
    },
    {
      path: "/auth/callback",
      name: "auth-callback",
      component: AuthCallback,
      meta: {
        auth: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn =
    localStorage.getItem("user") && localStorage.getItem("token");

  if (to.matched.some((record) => record.meta.auth) && !loggedIn) {
    next("/auth");
    return;
  }

  if (to.matched.some((record) => !record.meta.auth) && loggedIn) {
    next("/");
    return;
  }
  next();
});

export default router;
