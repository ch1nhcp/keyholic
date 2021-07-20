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

// Admin pages
import SignInAdmin from "../pages/admin/SignInAdmin.vue";
import DashboardHome from "../pages/admin/dashboard/DashboardHome.vue";
import Dashboard from "../pages/admin/dashboard/Dashboard.vue";
import ProductsManager from "../pages/admin/dashboard/Products/ProductsManager.vue";
import UsersManager from "../pages/admin/dashboard/Users/UsersManager.vue";
import BrandsManager from "../pages/admin/dashboard/Brands/BrandsManager.vue";

import ProductsAdd from "../pages/admin/dashboard/Products/ProductsAdd.vue";
import ProductsEdit from "../pages/admin/dashboard/Products/ProductsEdit.vue";
import UsersAdd from "../pages/admin/dashboard/Users/UserAdd.vue";
import UsersEdit from "../pages/admin/dashboard/Users/UserEdit.vue";

const routes = [
  { path: "/", component: Body, name: "main" },
  { path: "/signin", component: SignIn },
  { path: "/signup", component: SignUp },
  { path: "/contact", component: Contact },
  { path: "/blog", component: Blog },
  { path: "/:pathMatch(.*)*", component: NotFound },

  { path: "/products", component: AllProduct },
  { path: "/cart", component: Cart },
  { path: "/productdetail", component: ProductDetail },
  { path: "/checkout", component: Checkout },

  { path: "/admin/dashboard", component: Dashboard },
  { path: "/admin/signin", component: SignInAdmin },
  {
    path: "/admin",
    component: Dashboard,
    meta: { hideNavigation: true }, //fixed hide header and footer
    children: [
      { path: "", component: DashboardHome },
      { path: "products", component: ProductsManager },
      { path: "users", component: UsersManager },
      { path: "brands", component: BrandsManager },

      { path: "products/add", component: ProductsAdd },
      { path: "products/edit", component: ProductsEdit },

      { path: "users/edit", component: UsersEdit },
      { path: "users/add", component: UsersAdd },
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
