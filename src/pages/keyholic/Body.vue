<template>
  <Slider />
  <Categories />
  <SpecialProduct />
  <Blogs />
</template>

<script>
import Slider from "./Slider.vue";
import Categories from "./Categories.vue";
import SpecialProduct from "./SpecialProduct.vue";
import Blogs from "./Blogs.vue";
export default {
  components: {
    Slider,
    Categories,
    Blogs,
    SpecialProduct,
  },
};
</script>

<style>
</style>