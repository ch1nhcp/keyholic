<template>
  <section class="home-section">
    <div
      class="text"
      style="text-align: center; font-size:40px; font-weight: bold;padding: 3rem"
    >
      Product Manager
    </div>
    <div class="col-sm-6" style="float: right">
      <router-link
        to="/admin/products/add"
        class="btn btn-success"
        data-toggle="modal"
        ><i class="bx bx-add-to-queue"></i> <span>Add New</span></router-link
      >
    </div>
    <table width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Short_description</th>
          <th>Price</th>
          <th>Sale_price</th>
          <th>Brand_id</th>
          <th>Category_id</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.Id">
          <td data-title="ID">{{product.Id}}</td>
          <td data-title="Name">{{product.Name}}</td>
          <td data-title="Image"><img style="width=50px;" :src="ServeUrl+product.Image" alt=""></td>
          <td data-title="Short_description">{{product.ShortDescription}}</td>
          <td data-title="Price">{{product.Price}}</td>
          <td data-title="Sale_price">{{product.SalePrice}}</td>
          <td data-title="Brand_id">{{product.BrandId}}</td>
          <td v-if="product.CategoryId==1" data-title="Category_id">Keybroad</td>
              <td v-if="product.CategoryId==2" data-title="Category_id">Keycap</td>
                  <td v-if="product.CategoryId==3" data-title="Category_id">Palmrest</td>
          <td>
            <router-link to="/admin/products/edit" class="edit" data-toggle="modal"
              ><i class="bx bx-edit"></i
            ></router-link>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
              ><i class="bx bx-trash"></i
            ></a>
          </td>
        </tr>
  
      </tbody>
    </table>
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
  </section>
</template>

<script>
import { GetData } from "../../../../service/service";
import { ServeUrl } from "../../../../service/service";
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
  methods:{
 async paginate(index) {
        let respond = GetData("/product?page=" + index);
        this.data = await respond;
        this.products = await this.data.Product;
        this.page = await this.data.Page;
        this.lastpage = await this.data.Lastpage;
        this.total = await this.data.Total;
        this.$router.push({
          path: "/admin/products",
          query: { page: index},
        });
    
    },
  },
    computed: {
      
  },
   async created() {
      let respond = GetData("/product");
    this.data = await respond;
    this.products = await this.data.Product;
    this.page = await this.data.Page;
    this.lastpage = await this.data.Lastpage;
    this.total = await this.data.Total;
    console.log( this.products)
    
  },
};
</script>

<style scoped>
img {
    max-width: 100px;
}
/* Table */
table tr td,
table tr td {
  text-align: center;
}
@media only screen and (max-width: 500px) {
  table,
  head,
  tbody,
  th,
  td,
  tr {
    display: block;
  }
  thead tr {
    display: none;
  }
  tr {
    border: 1px solid #ccc;
  }
  td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
    white-space: normal;
    text-align: left;
    min-height: 30px;
    overflow: hidden;
    word-break: break-all;
  }
  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    text-align: left;
    font-weight: bold;
  }
  td:before {
    content: attr(data-title);
  }
}
</style>
