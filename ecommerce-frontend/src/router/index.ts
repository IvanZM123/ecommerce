import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { HomeRoutes } from "@/modules/home/home.routes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [HomeRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;