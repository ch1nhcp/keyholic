<template>
  <!-- product list -->
  <div class="section">
    <!-- {{product}} -->
    <div class="container">
      <div class="section-header">
        <h2>Latest product</h2>
      </div>
      <div class="row" id="latest-products">
        <!-- Product  -->
        <div
          v-for="product in products"
          :key="product.Id"
          class="col-3 col-md-6 col-sm-12"
        >
          <div class="product-card">
            <div class="product-card-img">
              <img :src="ServeUrl + product.Products.Image" alt="" />

              <img
                v-if="product.Image"
                :src="ServeUrl + product.Image"
                alt=""
              />
            </div>
            <div class="product-card-info">
              <div class="product-btn">
                <router-link
                  :to="'/productdetail?name=' + product.Products.Name"
                  class="btn-flat btn-hover btn-shop-now"
                >
                  shop now
                </router-link>
                <button class="btn-flat btn-hover btn-cart-add">
                  <i
                    @click="AddToCart(product.Products)"
                    class="bx bxs-cart-add"
                  ></i>
                </button>
              </div>
              <div class="product-card-name">{{ product.Products.Name }}</div>
              <div class="product-card-price">
                <span
                  ><del>${{ formatPrice(product.Products.Price) }}</del></span
                >
                <span class="curr-price"
                  >${{ formatPrice(product.Products.SalePrice) }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-footer">
        <router-link to="/products" class="btn-flat btn-hover"
          >view all</router-link
        >
      </div>
    </div>
  </div>
  <!-- end product list -->
</template>

<script>
import { GetData } from "../../../service/service";
import { ServeUrl } from "../../../service/service";

export default {
  data() {
    return {
      products: [],
      ServeUrl: ServeUrl,
    };
  },
  methods: {
    AddToCart(product) {
      alert("add sucess");
      this.$store.dispatch("product/AddToCart", product);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  async created() {
    var respond = GetData("/productlatest");
    this.products = await respond;
    console.log(this.products);
  },
};
</script>

<style scoped>
.section {
  padding: 0 !important;
}
</style>
