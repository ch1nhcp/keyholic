import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../pages/keyholic/SignIn.vue";
import SignInAdmin from "../pages/admin/SignInAdmin.vue";

const routes = [
  { path: "/signin", component: SignIn },
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
