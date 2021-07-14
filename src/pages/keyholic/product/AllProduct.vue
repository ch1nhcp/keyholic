<template>
  <!-- products content -->
  <div class="bg-main">
    <div class="container">
      <div class="box">
        <div class="breadcumb">
          <a href="./index.html">home</a>
          <span><i class="bx bxs-chevrons-right"></i></span>
          <a href="./products.html">all products</a>
        </div>
      </div>
      <div class="box">
        <div class="row">
          <div class="col-3 filter-col" id="filter-col">
            <div class="box filter-toggle-box">
              <button class="btn-flat btn-hover" id="filter-close">
                close
              </button>
            </div>

            <!-- Category -->
            <div class="box">
              <span class="filter-header"> Categories </span>
              <ul class="filter-list">
                <li><a href="#">Keyboard</a></li>
                <li><a href="#">Keycap</a></li>
                <li><a href="#">Palm rest</a></li>
              </ul>
            </div>

            <!-- Brand -->
            <div class="box">
              <span class="filter-header"> Brands </span>
              <ul class="filter-list">
                <li>
                  <div class="group-checkbox">
                    <input type="checkbox" id="remember1" checked="checked" />
                    <label for="remember1">
                      Leopold
                      <i class="bx bx-check"></i>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="group-checkbox">
                    <input type="checkbox" id="remember2" />
                    <label for="remember2">
                      Keychrone
                      <i class="bx bx-check"></i>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="group-checkbox">
                    <input type="checkbox" id="remember3" />
                    <label for="remember3">
                      Logitech
                      <i class="bx bx-check"></i>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="group-checkbox">
                    <input type="checkbox" id="remember4" />
                    <label for="remember4">
                      Corsair
                      <i class="bx bx-check"></i>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="group-checkbox">
                    <input type="checkbox" id="remember5" />
                    <label for="remember5">
                      Filco
                      <i class="bx bx-check"></i>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="group-checkbox">
                    <input type="checkbox" id="remember5" />
                    <label for="remember5">
                      Filco
                      <i class="bx bx-check"></i>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="group-checkbox">
                    <input type="checkbox" id="remember5" />
                    <label for="remember5">
                      Filco
                      <i class="bx bx-check"></i>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="group-checkbox">
                    <input type="checkbox" id="remember5" />
                    <label for="remember5">
                      Filco
                      <i class="bx bx-check"></i>
                    </label>
                  </div>
                </li>
                <li>
                  <div class="group-checkbox">
                    <input type="checkbox" id="remember5" />
                    <label for="remember5">
                      Filco
                      <i class="bx bx-check"></i>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-9 col-md-12">
            <div class="box filter-toggle-box">
              <button class="btn-flat btn-hover" id="filter-toggle">
                filter
              </button>
            </div>
            <div class="box">
              <div class="row" id="products">
                <!-- Product -->
                <div
                  v-for="product in products"
                  :key="product.Id"
                  class="col-4 col-md-6 col-sm-12"
                >
                  <div class="product-card">
                    <div class="product-card-img">
                      <img src="../../../assets/4.jpg" alt="" />
                      <img src="../../../assets/2.jpg" alt="" />
                    </div>
                    <div class="product-card-info">
                      <div class="product-btn">
                        <router-link
                          to="/productdetail"
                          class="btn-flat btn-hover btn-shop-now"
                        >
                          shop now
                        </router-link>

                        <button class="btn-flat btn-hover btn-cart-add">
                          <i class="bx bxs-cart-add"></i>
                        </button>
                        <!-- <button class="btn-flat btn-hover btn-cart-add">
                            <i class="bx bxs-heart"></i>
                          </button> -->
                      </div>
                      <div class="product-card-name">Mechanical Keyboard</div>
                      <div class="product-card-price">
                        <span><del>$400</del></span>
                        <span class="curr-price">$300</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Product -->
              </div>
            </div>
            <div class="box">
              <ul class="pagination">
                <li>
                  <a href="#"><i class="bx bxs-chevron-left"></i></a>
                </li>
                <li
                  @click="paginate(item)"
                  v-for="(item, index) in lastpage"
                  :key="index"
                  

                >
                  <a :class="[page==index+1?'active':'']" href="#">{{ item }}</a>
                </li>
                <!-- <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li> -->
                <li>
                  <a href="#"><i class="bx bxs-chevron-right"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end products content -->
</template>

<script>
import "../../../css/app.css";
import "../../../css/grid.css";
import { GetData } from "../../../service/service";
export default {
  data() {
    return {
      data: [],
      products: [],
      lastpage: 0,
      page: 0,
      total: 0,
    };
  },
  methods: {
    async paginate(index) {
      // console.log(index);
  
    let respond = GetData("/product?page=" + index );
      this.data = await respond;
      this.products = await this.data.Product;
      this.page = await this.data.Page;
      this.lastpage = await this.data.Lastpage;
      this.total = await this.data.Total;
       this.$router.push({path: '/products',query:{page:index}});

    

      // alert(c)
      // this.$store.dispatch("products/getProductById", to.params.id);
    },
  },

  mounted() {
    
    let filter_col = document.querySelector("#filter-col");

    document
      .querySelector("#filter-toggle")
      .addEventListener("click", () => filter_col.classList.toggle("active"));

    document
      .querySelector("#filter-close")
      .addEventListener("click", () => filter_col.classList.toggle("active"));
  },
  async created() {
     var url_string = window.location.href;
      var url = new URL(url_string);
      var c = url.searchParams.get("page");
      if(c == null){
        c=1
      }
  let respond = GetData("/product?page=" + c );
      this.data = await respond;
      this.products = await this.data.Product;
      this.page = await this.data.Page;
      this.lastpage = await this.data.Lastpage;
      this.total = await this.data.Total;

    // var responddata = GetData("/product");
    // this.data = await responddata;
    // this.products = await this.data.Product;
    // this.page = await this.data.Page;
    // this.lastpage = await this.data.Lastpage;
    // this.total = await this.data.Total;
  },
 async watch(){
   
  },
};
</script>

<style scoped>
@media only screen and (max-width: 1280px) {
  .filter-col.active {
    left: 0;
  }
}

@media only screen and (max-width: 1280px) {
  .filter-col {
    position: fixed;
    width: 100%;
    background-color: var(--main-bg-color);
    z-index: 98;
    left: 100%;
    height: 80vh;
    overflow-y: scroll;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    transition: left 0.2s ease-in-out;
  }
}
</style>
