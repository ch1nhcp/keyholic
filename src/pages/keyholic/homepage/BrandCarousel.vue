<template>
  <carousel :items-to-show="8" class="brands">
    <!-- {{ brands[0] }} -->

    <slide v-for="brand in brands" :key="brand.id">
      <!-- <router-link to="/products"> -->
      <!-- <h1>{{ brand.id }}</h1> -->
      <img :src="ServeUrl + brand.Image" />
      <!-- </router-link> -->
    </slide>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { ServeUrl } from "../../../service/service";
import { Carousel, Slide } from "vue3-carousel";
import { GetData } from "../../../service/service";

export default {
  data() {
    return {
      brands: "",
      ServeUrl:ServeUrl
    };
  },
  components: {
    Carousel,
    Slide,
  },
  async created() {
    var respond = GetData("/api/brand");
    this.brands = await respond;
  },
};
</script>
<style scoped>
.brands {
  height: 200px;
  display: flex;
  align-items: center;
  background-color: rgb(221, 221, 221);
}
</style>
