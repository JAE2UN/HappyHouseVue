import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/member",
    name: "member",
    component: () => import("../views/MemberView.vue"),
  },
  {
    path: "/house",
    name: "house",
    component: () => import("../views/HouseView.vue"),
    redirect: "/house/search",
    children: [
      {
        path: "search",
        name: "search",
        component: () => import("../components/house/HouseSearch.vue"),
      },
      {
        path: "deal",
        name: "deal",
        component: () => import("../components/house/HouseDealSearch.vue"),
      },
    ],
  },
  {
    path: "/board",
    name: "board",
    component: () => import("../views/BoardView.vue"),
    redirect: "/board/list",
    children: [
      {
        path: "list",
        name: "list",
        component: () => import("../components/board/BoardList.vue"),
      },
      {
        path: "notice",
        name: "notice",
        component: () => import("../components/board/BoardNotice.vue"),
      },
      {
        path: "community",
        name: "community",
        component: () => import("../components/board/BoardComm.vue"),
      },
      {
        path: "write",
        name: "write",
        component: () => import("../components/board/BoardWrite.vue"),
      },
      {
        path: "detail",
        name: "detail",
        component: () => import("../components/board/BoardDetail.vue"),
      },
      {
        path: "modify",
        name: "modify",
        component: () => import("../components/board/BoardModify.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
