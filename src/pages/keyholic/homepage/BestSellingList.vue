<template>
  <!-- product list -->
  <div class="section">
    <!-- {{product}} -->
    <div class="container">
      <div class="section-header">
        <h2>Best Selling product</h2>
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
              <img :src="product.Products.Image" alt="" />
              <img :src="product.Image[0]" alt="" />
            </div>
            <div class="product-card-info">
              <div class="product-btn">
                <button class="btn-flat btn-hover btn-shop-now">
                  shop now
                </button>
                <button class="btn-flat btn-hover btn-cart-add">
                  <i class="bx bxs-cart-add"></i>
                </button>
              </div>
              <div class="product-card-name">{{ product.Products.Name }}</div>
              <div class="product-card-price">
                <span
                  ><del>${{ product.Products.Price }}</del></span
                >
                <span class="curr-price"
                  >${{ product.Products.SalePrice }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-footer">
        <a href="#" class="btn-flat btn-hover">view all</a>
      </div>
    </div>
  </div>
  <!-- end product list -->
</template>

<script>
import { GetData } from "../../../service/service";
export default {
  data() {
    return {
      products: [],
    };
  },
  async created() {
    var respond = GetData("/producthot");
    this.products = await respond;
  
  },
};
</script>

<style scoped>
.section {
  padding: 0 !important;
}
</style>