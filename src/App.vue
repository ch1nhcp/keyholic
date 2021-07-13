<template>
  <Menu />
  <router-view />
  <Footer />
</template>

<script>
// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
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

<style scoped>
/* @import "../src/CSSBase/bootstrap.min.css"; */
/* @import "../src/CSSBase/font-icons.css";
@import "../src/CSSBase/style.css"; */
</style>
