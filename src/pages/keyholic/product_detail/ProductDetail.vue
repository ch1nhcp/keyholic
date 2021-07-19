<template>
  <div class="bg-main">
    <div class="container">
      <div class="box">
        <div class="breadcumb">
          <a href="#">home</a>
          <span><i class="bx bxs-chevrons-right"></i></span>
          <a href="#">all products</a>
          <span><i class="bx bxs-chevrons-right"></i></span>
          <a href="#">Mechanical Keyboard</a>
        </div>
      </div>
      <div class="row product-row">
        <div class="col-5 col-md-12">
          <div class="product-img" id="product-img">
            <img :src="ServeUrl + product.Image" alt="" />
          </div>
          <div class="box">
            <div v-if="ServeUrl + image" class="product-img-list">
              <div class="product-img-item  ">
                <img :src="ServeUrl + image[0]" alt="" />
              </div>
              <div v-if="ServeUrl + image[1]" class="product-img-item  ">
                <img :src="ServeUrl + image[1]" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-7 col-md-12">
          <div class="product-info">
            <h1>{{ product.Name }}</h1>
            <div class="product-info-detail">
              <span class="product-info-detail-title">Brand:</span>
              <a href="#">Leopold</a>
            </div>
            <div class="product-info-detail">
              <span class="product-info-detail-title">Rated:</span>
              <span class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </span>
            </div>
            <p class="product-description">
              {{ product.ShortDescription }}
            </p>
            <div class="product-info-price">${{ product.SalePrice }}.00</div>
            <div class="product-quantity-wrapper">
              <span @click="minus()" class="product-quantity-btn">
                <i class="bx bx-minus"></i>
              </span>
              <span class="product-quantity">{{ quantity }}</span>
              <span @click="plus()" class="product-quantity-btn">
                <i class="bx bx-plus"></i>
              </span>
              <span style="font-size:16px;" class="product-quantity"
                >Sản phẩm còn lại: {{ this.totalproduct }}</span
              >
            </div>
            <div>
              <button @click="AddToCart(product)" class="btn-flat btn-hover">
                add to cart
              </button>
              <span style="color:red;">{{ err }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box-header">description</div>
        <div class="product-detail-description">
          <button
            class="btn-flat btn-hover btn-view-description"
            id="view-all-description"
          >
            view all
          </button>
          <div class="product-detail-description-content">
            <p>
              {{ product.Description }}
            </p>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="box-header">related products</div>
        <div class="row" id="related-products">
          <!-- Related products -->
          <div class="col-4 col-md-6 col-sm-12">
            <div class="product-card">
              <div class="product-card-img">
                <img src="../../../assets/3.jpg" alt="" />
                <img src="../../../assets/4.jpg" alt="" />
              </div>
              <div class="product-card-info">
                <div class="product-btn">
                  <a
                    href="./product-detail.html"
                    class="btn-flat btn-hover btn-shop-now"
                    >shop now</a
                  >
                  <button class="btn-flat btn-hover btn-cart-add">
                    <i class="bx bxs-cart-add"></i>
                  </button>
                </div>
                <div class="product-card-name">Mechanical Keyboard</div>
                <div class="product-card-price">
                  <span><del>$300</del></span>
                  <span class="curr-price">$200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end product-detail content -->
</template>

<script>
import "../../../css/app.css";
import "../../../css/grid.css";
import { GetData } from "../../../service/service";
import { ServeUrl } from "../../../service/service";

export default {
  data() {
    return {
      product: [],
      image: [],
      ServeUrl: ServeUrl,
      quantity: 1,
      totalproduct: 0,
      err: "",
    };
  },
  methods: {
    AddToCart(product) {
      if (this.quantity > this.totalproduct) {
        this.err = "sản phẩm đã hết";
        return;
      }
      alert("success add to cart");
      let data = [];
      data.product = product;
      data.quantity = this.quantity;
      this.$store.commit("product/AddToCartBy", data);
    },
    plus() {
      if (this.quantity < this.totalproduct) {
        this.quantity++;
      }
    },
    minus() {
      if (this.quantity > 1) this.quantity--;
    },
  },
  async created() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var param = url.searchParams.get("name");
    let res = await GetData("/product/" + param);
    this.product = await res.Products;
    this.image = await res.Image;
    this.totalproduct = await res.Quantity;
  },
  computed: {},
  mounted() {
    // Hàm show/hide phần product detail
    document
      .querySelector("#view-all-description")
      .addEventListener("click", () => {
        let content = document.querySelector(
          ".product-detail-description-content"
        );
        content.classList.toggle("active");
        document.querySelector(
          "#view-all-description"
        ).innerHTML = content.classList.contains("active")
          ? "view less"
          : "view all";
      });
  },
};
</script>

<style></style>
