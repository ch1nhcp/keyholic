<template>
  <!-- header -->
  <header>
    <!-- mobile menu -->
    <div class="mobile-menu bg-second">
      <a href="/" class="mb-logo">KEYHOLIC</a>
      <span class="mb-menu-toggle" id="mb-menu-toggle">
        <i class="bx bx-menu"></i>
      </span>
    </div>
    <!-- end mobile menu -->
    <!-- main header -->
    <div class="header-wrapper" id="header-wrapper">
      <span class="mb-menu-toggle mb-menu-close" id="mb-menu-close">
        <i class="bx bx-x"></i>
      </span>
      <!-- top header -->
      <div class="bg-second">
        <div class="top-header container">
          <ul class="devided">
            <li>
              <a href="#">+84862332808</a>
            </li>
            <li>
              <a href="#">keyholic@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- end top header -->
      <!-- mid header -->
      <div class="bg-main">
        <div class="mid-header container">
          <a class="logo" href="/">KEYHOLIC</a>
          <!-- <div class="search">
            <input
              @keyup.enter="search"
              type="text"
              v-model="searchkey"
              placeholder="Search"
            />
            <i @click="search" class="bx bx-search-alt"></i>
          </div> -->
          <ul class="user-menu">
            <li>
              <router-link to="/cart"
                ><i class="bx bx-cart"></i
                ><span
                  style="font-size:15px;color:red; font-weight: bold; margin-top: -5px;"
                  >{{ countCart }}</span
                ></router-link
              >
              <!-- <a href="#"><i class="bx bx-cart"></i></a> -->
            </li>
            <li v-if="is != true">
              <router-link to="/signin"
                ><i class="bx bx-user-circle"></i
              ></router-link>
            </li>
            <li v-if="is == true">
              <router-link to="/signin"
                ><i class="bx bx-user-circle"></i
              ></router-link>
              <router-link to="/"
                ><i @click="logout" class="bx bx-log-in"></i
              ></router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- end mid header -->
      <!-- bottom header -->
      <div class="bg-second">
        <div class="bottom-header container">
          <ul class="main-menu">
            <li><a href="/">Home</a></li>
            <!-- mega menu -->
            <li class="mega-dropdown">
              <router-link to="/products"
                >Shop<i class="bx bxs-chevron-down"></i
              ></router-link>
              <div class="mega-content">
                <div class="row">
                  <div class="col-3 col-md-12">
                    <div class="box">
                      <h3>Bàn phím cao cấp</h3>
                      <ul>
                        <li>
                          <a href="/products?page=1&brand=Leopold"
                            >Bàn phím Leopold</a
                          >
                        </li>
                        <li>
                          <a href="/products?page=1&brand=Filco"
                            >Bàn phím Filco</a
                          >
                        </li>
                        <li>
                          <a href="/products?page=1&brand=Razer"
                            >Bàn phím Razer</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-3 col-md-12">
                    <div class="box">
                      <h3>Bàn phím phổ thông</h3>
                      <ul>
                        <li>
                          <a href="/products?page=1&brand=Corsair"
                            >Bàn phím Corsair</a
                          >
                        </li>
                        <li>
                          <a href="/products?page=1&brand=Logitech"
                            >Bàn phím Logitech</a
                          >
                        </li>
                        <li>
                          <a href="/products?page=1&brand=Keychrone"
                            >Bàn phím Keychron</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-3 col-md-12">
                    <div class="box">
                      <h3>Bàn phím giá rẻ</h3>
                      <ul>
                        <li>
                          <a href="/products?page=1&brand=Akko"
                            >Bàn phím Akko</a
                          >
                        </li>
                        <li>
                          <a href="/products?page=1&brand=E-Dra"
                            >Bàn phím E-Dra</a
                          >
                        </li>
                        <li>
                          <a href="/products?page=1&brand=Dareu"
                            >Bàn phím Dareu</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-3 col-md-12">
                    <div class="box">
                      <h3>Phụ kiện</h3>
                      <ul>
                        <li>
                          <a href="/products?category=keycap">Keycap</a>
                        </li>
                        <li>
                          <a href="/products?category=palmrest">Kê tay</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row img-row">
                  <div class="col-3">
                    <div class="box">
                      <img src="#" alt="" />
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="box">
                      <img src="#" alt="" />
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="box">
                      <img src="#" alt="" />
                    </div>
                  </div>
                  <div class="col-3">
                    <div class="box">
                      <img src="#" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <!-- end mega menu -->
            <li><router-link to="blog">blog</router-link></li>
            <li><router-link to="contact">contact</router-link></li>
          </ul>
        </div>
      </div>
      <!-- end bottom header -->
    </div>
    <!-- end main header -->
  </header>
  <!-- end header -->
</template>

<script>
import { mapState } from "vuex";
import "../css/app.css";
import "../css/grid.css";

export default {
  data() {
    return {
      searchkey: "",
    };
  },
  methods: {
    logout() {
      this.$cookie.removeCookie("token", {
        path: "/",
        domain: "",
      });
      this.$router.push({ path: "/" });
      this.$store.dispatch("user/logout", "");
    },
  },
  mounted() {
    document.querySelectorAll(".dropdown > a").forEach((e) => {
      e.addEventListener("click", (event) => event.preventDefault());
    });

    document.querySelectorAll(".mega-dropdown > a").forEach((e) => {
      e.addEventListener("click", (event) => event.preventDefault());
    });

    document
      .querySelector("#mb-menu-toggle")
      .addEventListener("click", () =>
        document.querySelector("#header-wrapper").classList.add("active")
      );

    document
      .querySelector("#mb-menu-close")
      .addEventListener("click", () =>
        document.querySelector("#header-wrapper").classList.remove("active")
      );
  },
  computed: {
    ...mapState("user", ["users", "is"]),
    ...mapState("product", ["cart"]),
    countCart: function() {
      let result = 0;
      for (let i = 0; i < this.cart.length; i++) {
        result += this.cart[i].quantity;
      }
      return result;
    },
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
    var data = {};
    let token = this.$cookie.getCookie("token");
    data.Value = token;
    this.$store.dispatch("user/checkuser", data);

    if (JSON.parse(localStorage.getItem("cart")) != null) {
      this.$store.commit(
        "product/CheckLocal",
        JSON.parse(localStorage.getItem("cart"))
      );
    }
  },
};
</script>

<style></style>
