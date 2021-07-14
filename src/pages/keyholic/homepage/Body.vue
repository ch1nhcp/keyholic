<template>
  <Slider />
  <Categories />
  <LatestList />
  <SpecialProduct />
  <BestSellingList />
  <Blogs />
  <BrandCarousel />
</template>

<script>
import Slider from "./Slider.vue";
import Categories from "./Categories.vue";
import LatestList from "./LatestList.vue";
import SpecialProduct from "./SpecialProduct.vue";
import Blogs from "./Blogs.vue";
import BestSellingList from "./BestSellingList.vue";
import BrandCarousel from "./BrandCarousel.vue";
export default {
  name: "body",
  components: {
    Slider,
    Categories,
    LatestList,
    SpecialProduct,
    BestSellingList,
    Blogs,
    BrandCarousel,
  },
};
</script>

<style>
</style>