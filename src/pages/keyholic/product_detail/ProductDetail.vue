<template>
  <div class="bg-main">
    <div class="container">
      <div class="box">
        <div class="breadcumb">
          <a href="#">home</a>
          <span><i class="bx bxs-chevrons-right"></i></span>
          <router-link to="/products">all products</router-link>
          <span><i class="bx bxs-chevrons-right"></i></span>
          <router-link to="/products?category=keyboard"
            >Mechanical Keyboard</router-link
          >
        </div>
      </div>
      <div class="row product-row">
        <div class="col-5 col-md-12">
          <div class="product-img" id="product-img">
            <img :src="ServeUrl + product.Image" alt="" />
          </div>

          <div class="box">
            <div v-if="ServeUrl + image != ''" class="product-img-list">
              <div v-if="image != ''" class="product-img-item  ">
                <img :src="ServeUrl + image[0]" alt="" />
              </div>
              <div v-show="image[1] != undefined" class="product-img-item  ">
                <img :src="ServeUrl + image[1]" alt="" />
              </div>
              <div class="product-img-item  ">
                <img :src="ServeUrl + product.Image" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-7 col-md-12">
          <div class="product-info">
            <h1>{{ product.Name }}</h1>
            <div class="product-info-detail">
              <span class="product-info-detail-title">Category:</span>

              <a v-if="product.CategoryId == 1" href="#">Keyboard</a>
              <a v-if="product.CategoryId == 2" href="#">KeyCap</a>
              <a v-if="product.CategoryId == 3" href="#">Palmrest</a>
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
            <div class="product-info-price">
              ${{ formatPrice(product.SalePrice) }}
            </div>
            <div class="product-quantity-wrapper">
              <span @click="minus()" class="product-quantity-btn">
                <i class="bx bx-minus"></i>
              </span>
              <span class="product-quantity">{{ quantity }}</span>
              <span @click="plus()" class="product-quantity-btn">
                <i class="bx bx-plus"></i>
              </span>
              <span style="font-size:16px;" class="product-quantity"
                > Sản phẩm còn lại: {{ this.totalproduct }}</span
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
    </div>
  </div>
  <!-- end product-detail content -->
</template>

<script>
import "../../../css/app.css";
import "../../../css/grid.css";
import { mapState } from "vuex";
import { GetData } from "../../../service/service";
import { ServeUrl } from "../../../service/service";
export default {
  data() {
    return {
      product: [],
      image: [],
      quantity: 1,
      totalproduct: 0,
      err: "",
      ServeUrl: ServeUrl,
    };
  },
  methods: {
    AddToCart(product) {
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].Id == this.product.Id) {
          if (this.cart[i].quantity + this.quantity > this.totalproduct) {
            alert("Sản phẩm đã vượt quá số lượng cho phép! ");
            return;
          }
        }
      }
      if (this.quantity > this.totalproduct) {
        this.err = "Sản phẩm đã hết";
        return;
      }
      alert("success add to cart");
      let data = [];
      data.product = product;
      data.quantity = this.quantity;
      data.totalproduct = this.totalproduct;
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
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
  computed: {
    ...mapState("product", ["search", "cart"]),
  },
  updated() {
    // Hàm đổi ảnh

    // Hàm show/hide phần product detail
    document.querySelectorAll(".product-img-item").forEach((e) => {
      e.addEventListener("click", () => {
        let img = e.querySelector("img").getAttribute("src");
        document.querySelector("#product-img > img").setAttribute("src", img);
      });
    });

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
