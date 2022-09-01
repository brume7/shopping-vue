import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import Products from "./pages/Products.vue";
import Checkout from "./pages/Checkout.vue"

import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

library.add(faDollarSign, faShoppingCart);



const routes = [
  {
    path: '/',
    component: Products
  },
  {
    path: '/checkout',
    component: Checkout
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


createApp(App).use(router).mount("#app");
