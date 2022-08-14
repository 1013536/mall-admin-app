import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/layout/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
