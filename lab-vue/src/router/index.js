import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/cate",
    name: "Showcate",
    component: Showcate
  },
];

import About from '../views/EventList.vue'
import Showcate from '../views/ShowCategory.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
