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
          <a href="/" class="logo">KEYHOLIC</a>
          <div class="search">
            <input type="text" placeholder="Search" />
            <i class="bx bx-search-alt"></i>
          </div>
          <ul class="user-menu">
            <li>
              <router-link to="/cart"><i class="bx bx-cart"></i></router-link>
              <!-- <a href="#"><i class="bx bx-cart"></i></a> -->
            </li>
            <li>
              <router-link to="/signin"
                ><i class="bx bx-user-circle"></i
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
            <li><a href="/">home</a></li>
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
                        <li><a href="#">Bàn phím Leopold</a></li>
                        <li><a href="#">Bàn phím Filco</a></li>
                        <li><a href="#">Bàn phím Razer</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-3 col-md-12">
                    <div class="box">
                      <h3>Bàn phím phổ thông</h3>
                      <ul>
                        <li><a href="#">Bàn phím Corsair</a></li>
                        <li><a href="#">Bàn phím Logitech</a></li>
                        <li><a href="#">Bàn phím Keychrone</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-3 col-md-12">
                    <div class="box">
                      <h3>Bàn phím giá rẻ</h3>
                      <ul>
                        <li><a href="#">Bàn phím Akko</a></li>
                        <li><a href="#">Bàn phím E-Dra</a></li>
                        <li><a href="#">Bàn phím Dareu</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-3 col-md-12">
                    <div class="box">
                      <h3>Phụ kiện</h3>
                      <ul>
                        <li><a href="#">Keycap</a></li>
                        <li><a href="#">Kê tay</a></li>
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
            <li><a href="#">blog</a></li>
            <li><a href="#">contact</a></li>
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
import "../css/app.css";
import "../css/grid.css";
export default {
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
};
</script>

<style>
</style>