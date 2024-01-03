import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/folder/:id",
        component: () => import("../views/FolderPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
