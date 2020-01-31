import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import City from "@/views/City.vue";
import Detail from "@/views/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/city",
    name: "city",
    component: City
  },
  {
    //带了个参数放在id中
    path: "/detail/:id",
    name: "detail",
    component: Detail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
