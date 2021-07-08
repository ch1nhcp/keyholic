<template>
  <Menu />
  <SignInAdmin/>
  <Footer />
</template>

<script>
import Menu from "./components/Menu.vue";
import Footer from "./components/Footer.vue";
import SignInAdmin from "./pages/SignInAdmin.vue";
export default {
  name: "App",
  components: {
    Menu,
    SignInAdmin,
    Footer,
  },
};
</script>

<style>
</style>
