<template>
  <Menu v-if="!$route.meta.hideNavigation" />
  <router-view />
  <Footer v-if="!$route.meta.hideNavigation" />
</template>

<script>
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Menu,
    Footer,
  },
};
</script>

<style></style>
