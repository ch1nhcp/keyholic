<template>
  <carousel :items-to-show="8" class="brands">
    <slide v-for="brand in brands" :key="brand.id">
      <router-link to="/products">
        <img :src="brand.img" :alt="brand.name" />
      </router-link>
    </slide>
  </carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
// import img1 from "@/assets/Brands/partner_logo_dark_1.png"

export default {
  data() {
    return {
      brands: [
        {
          id: 1,
          name: "Leopold",
          img: require("../../assets/Brands/partner_logo_dark_1.png"),
        },
        {
          id: 2,
          name: "Leopold",
          img: require("../../assets/Brands/partner_logo_dark_2.png"),
        },
        {
          id: 3,
          name: "Leopold",
          img: require("../../assets/Brands/partner_logo_dark_3.png"),
        },
        {
          id: 4,
          name: "Leopold",
          img: require("../../assets/Brands/partner_logo_dark_4.png"),
        },
        {
          id: 5,
          name: "Leopold",
          img: require("../../assets/Brands/partner_logo_dark_5.png"),
        },

        {
          id: 7,
          name: "Leopold",
          img: require("@/assets/Brands/partner_logo_dark_1.png"),
        },
        {
          id: 8,
          name: "Leopold",
          img: require("../../assets/Brands/partner_logo_dark_2.png"),
        },
        {
          id: 9,
          name: "Leopold",
          img: require("../../assets/Brands/partner_logo_dark_3.png"),
        },
        {
          id: 10,
          name: "Leopold",
          img: require("../../assets/Brands/partner_logo_dark_4.png"),
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
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