<template>
  <Menu v-if="hideComp != 'http://localhost:8080/admin'" />
  <router-view />
  <Footer v-if="hideComp != 'http://localhost:8080/admin'" />
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
  computed: {
    hideComp: function() {
      let url = location.href;
      return url;
    },
  },
};
</script>

<style></style>
