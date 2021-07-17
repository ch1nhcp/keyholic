import { createRouter, createWebHistory } from "vue-router";
import Body from "../pages/keyholic/homepage/Body.vue";
import SignIn from "../pages/keyholic/SignIn.vue";
import SignUp from "../pages/keyholic/SignUp.vue";
import Contact from "../pages/keyholic/Contact.vue";
import Blog from "../pages/keyholic/Blog.vue";
import NotFound from "../pages/keyholic/NotFound.vue";

import AllProduct from "../pages/keyholic/product/AllProduct.vue";
import Cart from "../pages/keyholic/cart/Cart.vue";
import ProductDetail from "../pages/keyholic/product_detail/ProductDetail.vue";
import Checkout from "../pages/keyholic/checkout/Checkout.vue";

import SignInAdmin from "../pages/admin/SignInAdmin.vue";
import Dashboard from "../pages/admin/dashboard/Dashboard.vue";
import DashboardWelcome from "../pages/admin/dashboard/DashboardWelcome.vue";
import UsersCrud from "../pages/admin/dashboard/UsersCrud.vue";
import ProductsCrud from "../pages/admin/dashboard/ProductsCrud.vue";

import Dashboard2 from "../pages/admin/dashboard/Dashboard2.vue";

const routes = [
  { path: "/", component: Body, name: "main" },
  { path: "/signin", component: SignIn },
  { path: "/signup", component: SignUp },
  { path: "/contact", component: Contact },
  { path: "/blog", component: Blog },
  { path: "/404", component: NotFound },

  { path: "/products", component: AllProduct },
  { path: "/cart", component: Cart },
  { path: "/productdetail", component: ProductDetail },
  { path: "/checkout", component: Checkout },

  //admin

  { path: "/admin/dashboard", component: Dashboard2 },

  { path: "/admin/signin", component: SignInAdmin },
  {
    path: "/admin",
    component: Dashboard,
    children: [
      { path: "", component: DashboardWelcome },
      { path: "products", component: ProductsCrud },
      { path: "users", component: UsersCrud },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
