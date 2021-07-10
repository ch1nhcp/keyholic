import { createRouter, createWebHistory } from "vue-router";
import Body from "../pages/keyholic/Body.vue";
import SignIn from "../pages/keyholic/SignIn.vue";
import AllProduct from "../pages/keyholic/AllProduct.vue";
import SignInAdmin from "../pages/admin/SignInAdmin.vue";

const routes = [
  { path: "/", component: Body },
  { path: "/signin", component: SignIn },
  { path: "/Products", component: AllProduct },
  { path: "/signinadmin", component: SignInAdmin },
];
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
