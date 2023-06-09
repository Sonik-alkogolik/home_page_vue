// default
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import Card from "@/pages/Card";
import Example from "@/pages/Example";

// Routering
export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/example",
      name: "example",
      component: Example,
    },
    {
      path: "/card",
      name: "card",
      component: Card,
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound,
    },
  ],
});
