import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView";
import WeddingView from "@/views/WeddingView";
import NatureView from "@/views/NatureView";
import AboutView from "@/views/AboutView";
import OverView from '@/views/OverView'
import PageNotFound from "@/views/PageNotFound";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/wedding",
    name: "wedding",
    component: WeddingView,
  },
  {
    path: "/nature",
    name: "nature",
    component: NatureView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/overview",
    name: "overview",
    component: OverView,
  },
  

  {
    path: '*',
    name: 'page-not-found',
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  
  
});



export default router;
