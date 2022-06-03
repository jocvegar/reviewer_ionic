import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import UserPage from "../views/UserPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "HomePage",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
    name: "AboutPage",
  },
  {
    path: "/user",
    component: UserPage,
  },
  // {
  //   path: "/tabs/",
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: "",
  //       redirect: "/tabs/tab1",
  //     },
  //     {
  //       path: "tab1",
  //       component: () => import("@/views/Tab1Page.vue"),
  //     },
  //     {
  //       path: "tab2",
  //       component: () => import("@/views/Tab2Page.vue"),
  //     },
  //     {
  //       path: "tab3",
  //       component: () => import("@/views/Tab3Page.vue"),
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
