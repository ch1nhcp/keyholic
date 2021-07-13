import { createRouter, createWebHistory } from "vue-router";
import Body from "../pages/keyholic/Body.vue";
import SignIn from "../pages/keyholic/SignIn.vue";
import SignUp from "../pages/keyholic/SignUp.vue";

import AllProduct from "../pages/keyholic/AllProduct.vue";
import SignInAdmin from "../pages/admin/SignInAdmin.vue";
import Cart from "../pages/keyholic/Cart.vue";
import ProductDetail from "../pages/keyholic/ProductDetail.vue";
import Checkout from "../pages/keyholic/Checkout.vue";


const routes = [
  { path: "/", component: Body ,name: 'main' },
  { path: "/signin", component: SignIn },
  { path: "/signup", component: SignUp },

  { path: "/Products", component: AllProduct },
  { path: "/signinadmin", component: SignInAdmin },
  { path: "/cart", component: Cart },
  { path: "/productdetail", component: ProductDetail },
  { path: "/checkout", component: Checkout },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
