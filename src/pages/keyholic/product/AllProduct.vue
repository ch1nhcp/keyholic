<template>
  <!-- products content -->
  <div class="bg-main">
    <div class="container">
      <div class="search" style="margin: 0 auto; margin-top: 3rem">
        <input
          @keyup.enter="FindSearch"
          type="text"
          v-model="searchkey"
          placeholder="Search"
        />
        <i @click="FindSearch" class="bx bx-search-alt"></i>
      </div>
      <div class="box">
        <div class="breadcumb">
          <a href="/">home</a>
          <span><i class="bx bxs-chevrons-right"></i></span>
          <a href="/products">all products</a>
        </div>
      </div>
      <h1 style="display:none">{{ search }}</h1>
      <div class="count">
        <span
          >{{ page * 9 > total ? total : page * 9 }}/{{ total }} Products</span
        >
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
                <li><a @click="FindByCategory(1)">Keyboard</a></li>
                <li><a @click="FindByCategory(2)">Keycap</a></li>
                <li><a @click="FindByCategory(3)">Palm rest</a></li>
              </ul>
            </div>

            <!-- Sort -->
            <div class="box">
              <span class="filter-header"> Sort By: </span>
              <select @change="SortBy">
                <option value="default">Default</option>
                <option value="asc">Giá: tăng dần</option>
                <option value="desc">Giá: giảm dần</option>
              </select>
            </div>

            <!-- Brand -->
            <div class="box">
              <span class="filter-header"> Brands </span>
              <ul class="filter-list">
                <li v-for="brand in brands" :key="brand.Id">
                  <div class="group-checkbox">
                    <input
                      :value="brand.Name"
                      type="checkbox"
                      :id="brand.Id"
                      v-model="checkBrands"
                      @change="GetBrand"
                    />
                    <label :for="brand.Id">
                      {{ brand.Name }}
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
                      <img :src="ServeUrl + product.Image" alt="" />
                    </div>
                    <div class="product-card-info">
                      <div class="product-btn">
                        <router-link
                          :to="'/productdetail?name=' + product.Name"
                          class="btn-flat btn-hover btn-shop-now"
                        >
                          shop now
                        </router-link>

                        <button class="btn-flat btn-hover btn-cart-add">
                          <i
                            @click="AddToCart(product)"
                            class="bx bxs-cart-add"
                          ></i>
                        </button>
                      </div>
                      <div class="product-card-name">{{ product.Name }}</div>
                      <div class="product-card-price">
                        <span
                          ><del>${{ formatPrice(product.Price) }}</del></span
                        >
                        <span class="curr-price"
                          >${{ formatPrice(product.SalePrice) }}</span
                        >
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
                  <a :class="[page == index + 1 ? 'active' : '']" href="#">{{
                    item
                  }}</a>
                </li>

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
import { mapState } from "vuex";
import { ServeUrl } from "../../../service/service";
export default {
  data() {
    return {
      data: [],
      products: [],
      lastpage: 0,
      page: 0,
      total: 0,
      brands: [],
      checkBrands: [],
      searchkey: "",
      ServeUrl: ServeUrl,
    };
  },
  methods: {
    async FindSearch() {
      let respond = GetData("/search?name=" + this.searchkey);
      this.data = await respond;
      this.products = await this.data.Product;
      this.total = await this.data.Total;
      console.log(this.data);
      this.lastpage = 1;
      if (this.searchkey.length > 0) {
        this.$router.push({
          path: "/products",
          query: { search: this.searchkey },
        });
      }
    },
    async GetBrand() {
      if (this.checkBrands == "") {
        let respond = GetData("/product");
        this.data = await respond;
        this.products = await this.data.Product;
        this.page = await this.data.Page;
        this.lastpage = await this.data.Lastpage;
        this.total = await this.data.Total;
        this.$router.push({
          path: "/products",
          query: { page: 1, brand: "" },
        });
        return;
      }
      let respond = GetData("/brand/" + this.checkBrands);
      this.data = await respond;
      this.products = await this.data.Product;
      this.page = await this.data.Page;
      this.lastpage = await this.data.Lastpage;
      this.total = await this.data.Total;
      let stringbrand = this.checkBrands.toString();
      this.$router.push({
        path: "/products",
        query: { page: 1, brand: stringbrand },
      });
    },
    async FindByCategory(id) {
      var respond;
      if (id == 1) {
        let data = GetData("/category/keyboard");
        this.$router.push({
          path: "/products",
          query: { category: "keyboard" },
        });
        respond = data;
        this.checkBrands = [];
      }
      if (id == 2) {
        let data = GetData("/category/keycap");
        this.$router.push({ path: "/products", query: { category: "keycap" } });
        respond = data;
      }
      if (id == 3) {
        let data = GetData("/category/palmrest");
        this.$router.push({
          path: "/products",
          query: { category: "palmrest" },
        });
        respond = data;
      }
      this.data = await respond;
      this.products = await this.data.Product;
      this.page = await this.data.Page;
      this.lastpage = await this.data.Lastpage;
      this.total = await this.data.Total;
    },

    async paginate(index) {
      var url_string = window.location.href;
      var url = new URL(url_string);
      var params = url.searchParams.get("category");
      var sort = url.searchParams.get("sort");
      var param_brand = url.searchParams.get("brand");
      if (param_brand != null) {
        let respond = GetData("/brand/" + this.checkBrands + "?page=" + index);
        this.data = await respond;
        this.products = await this.data.Product;
        this.page = await this.data.Page;
        this.lastpage = await this.data.Lastpage;
        this.total = await this.data.Total;
        this.$router.push({
          path: "/products",
          query: { page: index, brand: this.checkBrands },
        });
        return;
      }
      if (params == null || params == "") {
        let respond = GetData("/product?page=" + index);
        this.data = await respond;
        this.products = await this.data.Product;
        this.page = await this.data.Page;
        this.lastpage = await this.data.Lastpage;
        this.total = await this.data.Total;
        this.$router.push({
          path: "/products",
          query: { page: index, sort: sort },
        });
      } else {
        let respond = GetData("/category/" + params + "?page=" + index);
        this.data = await respond;
        this.products = await this.data.Product;
        this.page = await this.data.Page;
        this.lastpage = await this.data.Lastpage;
        this.total = await this.data.Total;
        this.$router.push({
          path: "/products",
          query: { category: params, page: index, sort: sort },
        });
      }
      if (sort == "asc") {
        this.products.sort((b, c) => {
          return b.Price - c.Price;
        });
      }
      if (sort == "desc") {
        this.products.sort((b, c) => {
          return c.Price - b.Price;
        });
      }
    },
    SortBy(event) {
      let value = event.target.value;
      if (value == "default") {
        this.products.sort((b, c) => {
          return b.Id - c.Id;
        });
      }
      if (value == "asc") {
        this.products.sort((b, c) => {
          return b.Price - c.Price;
        });
      }
      if (value == "desc") {
        this.products.sort((b, c) => {
          return c.Price - b.Price;
        });
      }
      let url_string = window.location.href;
      let url = new URL(url_string);
      let c = url.searchParams.get("page");
      let param = url.searchParams.get("category");
      let brand = url.searchParams.get("brand");
      this.$router.push({
        path: "/products",
        query: { category: param, brand: brand, page: c, sort: value },
      });
    },
    AddToCart(product) {
      alert("add sucess");
      this.$store.dispatch("product/AddToCart", product);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  computed: {
    ...mapState("product", ["search", "cart"]),
  },

  async mounted() {
    let respond = GetData("/api/brand");
    this.brands = await respond;
  },
  async created() {
    let datarespond;
    var url_string = window.location.href;
    var url = new URL(url_string);
    var param = url.searchParams.get("category");
    let c = url.searchParams.get("page");
    let brand = url.searchParams.get("brand");
    let search = url.searchParams.get("search");
    if (c == null || c == "") {
      c = 1;
    }
    if (search != null && search != "") {
      let respond = GetData("/search?name=" + search);
      this.data = await respond;
      this.products = await this.data.Product;
      this.total = await this.data.Total;
      return;
    }
    if (brand != null && brand != "") {
      let respond = GetData("/brand/" + brand + "?page=" + c);
      this.data = await respond;
      this.products = await this.data.Product;
      this.page = await this.data.Page;
      this.lastpage = await this.data.Lastpage;
      this.total = await this.data.Total;
      this.checkBrands = brand;
      return;
    }
    if (param == null || param == "") {
      let data = GetData("/product?page=" + c);
      datarespond = data;
    } else {
      let data = GetData("/category/" + param + "?page=" + c);
      datarespond = data;
    }
    this.data = await datarespond;
    this.products = await this.data.Product;
    this.page = await this.data.Page;
    this.lastpage = await this.data.Lastpage;
    this.total = await this.data.Total;
    let sort = url.searchParams.get("sort");
    if (sort == "asc") {
      this.products.sort((b, c) => {
        return b.Price - c.Price;
      });
    }
    if (sort == "desc") {
      this.products.sort((b, c) => {
        return c.Price - b.Price;
      });
    }
  },
};
</script>

<style scoped>
.search-bar {
  border: 2px solid;
  background-color: white;
  width: 150px;
  font-family: "Poppins", sans-serif;
  padding: 5px;
}
.filter-list > li {
  cursor: pointer;
}
.product-card:hover .product-card-img img:nth-child(1) {
  display: block;
}
.box > select {
  border: 2px solid;
  background-color: white;
  width: 150px;
  font-family: "Poppins", sans-serif;
  padding: 5px;
}
@media only screen and (max-width: 1280px) {
  .filter-col.active {
    left: 0;
  }
}
.count {
  margin-right: 50px;
  display: block;
  text-align: center;
  display: flex;
  justify-content: flex-end;
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
