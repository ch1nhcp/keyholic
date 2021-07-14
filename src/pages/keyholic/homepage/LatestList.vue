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
       
        <!-- End Product -->
        <!-- Product  -->
       
        <!-- End Product -->
        <!-- Product  -->
        <div v-for="product in products" :key="product.Id" class="col-3 col-md-6 col-sm-12">
          <div class="product-card">
            <div class="product-card-img">
              <img src="../../../assets/4.jpg" alt="" />
              <img src="../../../assets/2.jpg" alt="" />
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
              <div class="product-card-name">Leopold C280</div>
              <div class="product-card-price">
                <span><del>$300</del></span>
                <span class="curr-price">$200</span>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-3 col-md-6 col-sm-12">
          <div class="product-card">
            <div class="product-card-img">
              <img src="../../../assets/4.jpg" alt="" />
              <img src="../../../assets/2.jpg" alt="" />
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
              <div class="product-card-name">Leopold C280</div>
              <div class="product-card-price">
                <span><del>$300</del></span>
                <span class="curr-price">$200</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 col-md-6 col-sm-12">
          <div class="product-card">
            <div class="product-card-img">
              <img src="../../../assets/4.jpg" alt="" />
              <img src="../../../assets/2.jpg" alt="" />
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
              <div class="product-card-name">Leopold C280</div>
              <div class="product-card-price">
                <span><del>$300</del></span>
                <span class="curr-price">$200</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 col-md-6 col-sm-12">
          <div class="product-card">
            <div class="product-card-img">
              <img src="../../../assets/4.jpg" alt="" />
              <img src="../../../assets/2.jpg" alt="" />
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
              <div class="product-card-name">Leopold C280</div>
              <div class="product-card-price">
                <span><del>$300</del></span>
                <span class="curr-price">$200</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 col-md-6 col-sm-12">
          <div class="product-card">
            <div class="product-card-img">
              <img src="../../../assets/4.jpg" alt="" />
              <img src="../../../assets/2.jpg" alt="" />
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
              <div class="product-card-name">Leopold C280</div>
              <div class="product-card-price">
                <span><del>$300</del></span>
                <span class="curr-price">$200</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 col-md-6 col-sm-12">
          <div class="product-card">
            <div class="product-card-img">
              <img src="../../../assets/4.jpg" alt="" />
              <img src="../../../assets/2.jpg" alt="" />
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
              <div class="product-card-name">Leopold C280</div>
              <div class="product-card-price">
                <span><del>$300</del></span>
                <span class="curr-price">$200</span>
              </div>
            </div>
          </div>
        </div> -->
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
    var respond = GetData("/productlatest");
    this.products = await respond;
    // this.$store.dispatch("user/checkuser");

    //  this.$store.dispatch("user/login", data);
  },
};
</script>

<style scoped>
.section {
  padding: 0 !important;
}
</style>