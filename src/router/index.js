import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/random-quotes",
    name: "random.quotes",
    component: () => import("@/views/QuotesShow.vue"),
  },
  {
    path: "/",
    redirect: { name: "random.quotes" },
  },
  {
    path: "/home",
    redirect: { name: "random.quotes" },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
