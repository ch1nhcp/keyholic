<template>
  <Slider />
  <Categories />
  <ProductList title="LATEST PRODUCT" />
  <SpecialProduct />
  <ProductList title="BEST SELLING" />
  <Blogs />
  <BrandCarousel />
</template>

<script>
import Slider from "./Slider.vue";
import Categories from "./Categories.vue";
import ProductList from "./ProductList.vue";
import SpecialProduct from "./SpecialProduct.vue";
import Blogs from "./Blogs.vue";
import BrandCarousel from "./BrandCarousel.vue";
export default {
  name:"body",
  components: {
    Slider,
    Categories,
    ProductList: ProductList,
    SpecialProduct,
    Blogs,
    BrandCarousel,
  },
};
</script>

<style>
</style>