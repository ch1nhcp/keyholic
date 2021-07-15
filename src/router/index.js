import { createRouter, createWebHistory } from "vue-router";
import Body from "../pages/keyholic/homepage/Body.vue";
import SignIn from "../pages/keyholic/SignIn.vue";
import SignUp from "../pages/keyholic/SignUp.vue";

import AllProduct from "../pages/keyholic/product/AllProduct.vue";
import SignInAdmin from "../pages/admin/SignInAdmin.vue";
import Cart from "../pages/keyholic/cart/Cart.vue";
import ProductDetail from "../pages/keyholic/product_detail/ProductDetail.vue";
import Checkout from "../pages/keyholic/checkout/Checkout.vue";


const routes = [
  { path: "/", component: Body ,name: 'main' },
  { path: "/signin", component: SignIn },
  { path: "/signup", component: SignUp },

  { path: "/products", component: AllProduct },
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
