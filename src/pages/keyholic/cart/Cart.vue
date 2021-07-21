<template>
  <!-- Page Title -->
  <!-- <section class="page-title" style="text-align: center; padding: 3rem">
    <div class="container relative clearfix">
      <div class="title-holder">
        <div class="title-text">
          <h1 class="uppercase">Keyholic Shopping Cart</h1>
          <ol class="breadcrumb">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li class="active">Cart</li>
          </ol>
        </div>
      </div>
    </div>
  </section> -->
  <div class="box">
    <div class="breadcumb" style="padding: 3rem; margin-left: 30px">
      <a href="./index.html">home</a>
      <span><i class="bx bxs-chevrons-right"></i></span>
      <a href="./products.html">Shopping Cart</a>
    </div>
  </div>

  <div class="content-wrapper">
    <!-- Cart -->
    <section class="section-wrap shopping-cart">
      <div class="container relative">
        <div class="row">
          <div class="col-md-12">
            <div class="table-wrap mb-30">
              <table class="shop_table cart table">
                <thead>
                  <tr>
                    <th class="product-name" colspan="2">Product</th>
                    <th class="product-price">Price</th>
                    <th class="product-quantity">Quantity</th>
                    <th class="product-subtotal" colspan="2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- item -->
                  <tr v-for="(item,index) in cart" :key="index" class="cart_item">
                    <td class="product-thumbnail">
                      <a href="#">
                        <img
                          :src="ServeUrl+item.Image"
                          alt=""
                        />
                      </a>
                    </td>
                    <td class="product-name">
                      <a href="#">{{item.Name}}</a>
                      <ul>
                        <li v-if="item.BrandId==1">Bàn Phím</li>
                        <li v-if="item.BrandId==2">Artisan</li>
                         <li v-if="item.BrandId==3">Kê tay</li>
                      </ul>
                    </td>
                    <td class="product-price">
                      <span class="amount">${{item.SalePrice}}.00</span>
                    </td>
                    <td class="product-quantity">
                      <div   class="quantity buttons_added">
                        <input
                          type="number"
                          step="1"
                          min="0"
                          :value="item.quantity"
                          title="Qty"
                          class="input-text qty text"
                        />
                        <div class="quantity-adjust">
                          <a href="#" @click="addQuantity(index)" class="plus">
                            <i class="bx bxs-chevron-up"></i>
                          </a>
                          <a href="#" @click="subQuantity(index)" class="minus">
                            <i class="bx bxs-chevron-down"></i>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td   class="product-subtotal">
                      <span class="amount">${{item.quantity*item.SalePrice}}.00</span>
                    </td>
                    <td class="product-remove">
                      <a href="#" @click="DelFormCart(index)" class="remove" title="Remove this item">
                        <!-- <i class="bx bxs-x-circle"></i> -->
                        x
                      </a>
                    </td>
                  </tr>
                
                </tbody>
              </table>
            </div>

            <div class="row mb-50">
              <div class="col-md-5 col-sm-12">
                <div class="coupon">
                  <input
                    type="text"
                    name="coupon_code"
                    id="coupon_code"
                    class="input-text form-control"
                    value
                    placeholder="Coupon code"
                  />
                  <input
                    type="submit"
                    name="apply_coupon"
                    class="btn btn-lg btn-stroke"
                    value="Apply"
                  />
                </div>
              </div>

              <div class="col-md-7">
                <div class="actions">
                  <div class="wc-proceed-to-checkout">
                    <a @click="checkout" class="btn btn-lg btn-dark"
                      ><span>proceed to checkout</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->

        <div class="row">
          <div class="col-md-6" style="float: right">
            <div class="cart_totals">
              <h2
                class="heading relative bottom-line full-grey uppercase mb-30"
              >
                Cart Totals
              </h2>

              <table class="table shop_table">
                <tbody>
                  <tr class="cart-subtotal">
                    <th>Cart Subtotal</th>
                    <td>
                      <span class="amount">${{SubTotal}}.00</span>
                    </td>
                  </tr>
                  <tr class="shipping">
                    <th>Shipping</th>
                    <td>
                      <span>Free Shipping</span>
                    </td>
                  </tr>
                  <tr class="order-total">
                    <th>Order Total</th>
                    <td>
                      <strong><span class="amount">${{SubTotal}}.00</span></strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- end col cart totals -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end cart -->
  </div>
  <!-- end content wrapper -->
</template>
<script>
// import {PostData} from "../../service/service"

import { mapState } from "vuex";
import { ServeUrl } from "../../../service/service";
export default {
  data() {
    return {
      ServeUrl:ServeUrl
    };
  },
  methods:{
    checkout(){
      if(this.cart.length>0){
 this.$router.push({ path: "/checkout" });

      }else{
         this.$router.push({ path: "/products" });
      }
    },
    addQuantity(index){
      this.$store.commit("product/AddQuantity",index)
    },
    subQuantity(index){
      this.$store.commit("product/SubQuantity",index)
    },
    DelFormCart(index){
        this.$store.commit("product/DelFormCart",index)
    }
  },
  computed: {
      ...mapState("product", ["cart"]),
     SubTotal:function(){
       let total = 0
       for(let i=0;i<this.cart.length;i++){
          total += this.cart[i].SalePrice*this.cart[i].quantity
       }
       return total
     }
  },
  mounted() {
   
  
  },
  created() {
    if(JSON.parse(localStorage.getItem('cart'))!=null){
      this.$store.commit("product/CheckLocal",JSON.parse(localStorage.getItem('cart')))
    }
  }
};
</script>

<style scoped>
.col-md-12 {
  width: 100%;
}
.shop_table.cart.table {
  width: 100%;
}
.clearfix:before,
.clearfix:after {
  display: table;
  line-height: 0;
  content: "";
}

.clearfix:after {
  clear: both;
}

.relative {
  position: relative;
}

@media (min-width: 1200px) {
  .rev_slider_wrapper.container {
    width: 1170px;
  }
}

.mobile section {
  background-attachment: scroll !important;
}

.left {
  float: left;
}

.right {
  float: right;
}

.uppercase {
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.last {
  margin-bottom: 0 !important;
}

@media (max-width: 991px) {
  .md-text-center {
    text-align: center;
  }
}

@media (max-width: 767px) {
  .sm-text-center {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .xs-text-center {
    text-align: center;
  }
}

img.alignleft {
  float: left;
  margin: 10px 20px 10px 0;
}

img.alignright {
  float: right;
  margin: 10px 0 10px 20px;
}

.animation-wrap {
  overflow: hidden;
}

::-moz-selection {
  color: #fff;
  background-color: #35bdff;
}

::-webkit-selection {
  color: #fff;
  background-color: #35bdff;
}

::selection {
  color: #fff;
  background-color: #35bdff;
}

:focus {
  outline: none;
}

body img {
  border: none;
  max-width: 100%;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

/* Row multiple items
-------------------------------------------------------*/
.items-grid .col-xs-6:nth-child(2n + 3) {
  clear: left;
}

.items-grid .col-xs-4:nth-child(3n + 4) {
  clear: left;
}

.items-grid .col-xs-3:nth-child(4n + 5) {
  clear: left;
}

.items-grid .col-xs-2:nth-child(6n + 7) {
  clear: left;
}

.items-grid .col-xs-1:nth-child(12n + 13) {
  clear: left;
}

@media (min-width: 768px) {
  .items-grid .col-xs-6:nth-child(2n + 3) {
    clear: none;
  }
  .items-grid .col-xs-4:nth-child(3n + 4) {
    clear: none;
  }
  .items-grid .col-xs-3:nth-child(4n + 5) {
    clear: none;
  }
  .items-grid .col-xs-2:nth-child(6n + 7) {
    clear: none;
  }
  .items-grid .col-xs-1:nth-child(12n + 13) {
    clear: none;
  }
  .items-grid .col-sm-6:nth-child(2n + 3) {
    clear: left;
  }
  .items-grid .col-sm-4:nth-child(3n + 4) {
    clear: left;
  }
  .items-grid .col-sm-3:nth-child(4n + 5) {
    clear: left;
  }
  .items-grid .col-sm-2:nth-child(6n + 7) {
    clear: left;
  }
  .items-grid .col-sm-1:nth-child(12n + 13) {
    clear: left;
  }
}

@media (min-width: 992px) {
  .items-grid .col-sm-6:nth-child(2n + 3) {
    clear: none;
  }
  .items-grid .col-sm-4:nth-child(3n + 4) {
    clear: none;
  }
  .items-grid .col-sm-3:nth-child(4n + 5) {
    clear: none;
  }
  .items-grid .col-sm-2:nth-child(6n + 7) {
    clear: none;
  }
  .items-grid .col-sm-1:nth-child(12n + 13) {
    clear: none;
  }
  .items-grid .col-md-6:nth-child(2n + 3) {
    clear: left;
  }
  .items-grid .col-md-4:nth-child(3n + 4) {
    clear: left;
  }
  .items-grid .col-md-3:nth-child(4n + 5) {
    clear: left;
  }
  .items-grid .col-md-2:nth-child(6n + 7) {
    clear: left;
  }
  .items-grid .col-md-1:nth-child(12n + 13) {
    clear: left;
  }
}

@media (min-width: 1200px) {
  .items-grid .col-md-6:nth-child(2n + 3) {
    clear: none;
  }
  .items-grid .col-md-4:nth-child(3n + 4) {
    clear: none;
  }
  .items-grid .col-md-3:nth-child(4n + 5) {
    clear: none;
  }
  .items-grid .col-md-2:nth-child(6n + 7) {
    clear: none;
  }
  .items-grid .col-md-1:nth-child(12n + 13) {
    clear: none;
  }
  .items-grid .col-lg-6:nth-child(2n + 3) {
    clear: left;
  }
  .items-grid .col-lg-4:nth-child(3n + 4) {
    clear: left;
  }
  .items-grid .col-lg-3:nth-child(4n + 5) {
    clear: left;
  }
  .items-grid .col-lg-2:nth-child(6n + 7) {
    clear: left;
  }
  .items-grid .col-lg-1:nth-child(12n + 13) {
    clear: left;
  }
}

/*-------------------------------------------------------*/
/* Buttons
/*-------------------------------------------------------*/
.section-buttons .btn {
  margin-bottom: 20px;
}

.section-buttons [class^="col"] a:last-child {
  margin-bottom: 50px;
}

.btn {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
  border: none;
  border-radius: 0;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  color: #fff;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  letter-spacing: 0.01em;
  text-transform: uppercase;
}

.btn:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.btn:after {
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  background: #171717;
  content: "";
  position: absolute;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.btn:hover {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  color: #fff;
}

.btn:hover:after {
  height: 100%;
}

.btn:hover span {
  color: #fff;
}

.btn:focus {
  color: #fff;
  outline: none !important;
}

.btn span {
  position: relative;
  z-index: 3;
  -webkit-transition: color 0.3s !important;
  -moz-transition: color 0.3s !important;
  -ms-transition: color 0.3s !important;
  -o-transition: color 0.3s !important;
  transition: color 0.3s !important;
}

.btn.btn-color:before {
  background-color: #35bdff;
}

.btn.btn-color:after {
  background-color: #171717;
}

.btn.btn-transparent {
  background-color: transparent;
}

.btn.btn-transparent:before {
  border: 2px solid #fff;
}

.btn.btn-transparent:hover {
  border-color: transparent;
}

.btn.btn-transparent:hover span {
  color: #fff;
}

.btn.btn-light {
  color: #000;
}

.btn.btn-light:before {
  background-color: #f7f8f9;
}

.btn.btn-stroke {
  background-color: transparent;
  color: #000;
}

.btn.btn-stroke:before {
  border: 2px solid #ebebeb;
}

.btn.btn-stroke:hover {
  border-color: transparent;
}

.btn.btn-dark {
  color: #fff;
}

.btn.btn-dark:before {
  background-color: #171717;
}

.btn.btn-dark:after {
  background-color: #35bdff;
}

.btn.btn-white {
  box-shadow: 1px 1.732px 3px 0px rgba(0, 0, 0, 0.05);
  color: #171717;
}

.btn.btn-white:before {
  background-color: #fff;
}

.btn.btn-white:after {
  background-color: #313131;
}

.btn.btn-pink:before {
  background-color: #d77592;
}

.btn.btn-violet:before {
  background-color: #b993c9;
}

.btn.btn-green:before {
  background-color: #39b378;
}

.btn.btn-orange:before {
  background-color: #e6965b;
}

.btn.btn-blue:before {
  background-color: #57b3c6;
}

.btn-lg {
  font-size: 12px;
  padding: 0 35px;
}

.btn-lg span {
  line-height: 44px;
}

.btn-md {
  font-size: 11px;
  padding: 0 30px;
}

.btn-md span {
  line-height: 38px;
}

.btn-sm {
  font-size: 10px;
  padding: 0 20px;
}

.btn-sm span {
  line-height: 34px;
}

.rounded,
.rounded:before {
  border-radius: 70px;
}

/*-------------------------------------------------------*/
/* Form Elements
/*-------------------------------------------------------*/
input[type="text"],
input[type="password"],
input[type="email"],
input[type="url"],
input[type="tel"],
input[type="number"],
input[type="date"],
input[type="search"],
select,
textarea {
  height: 44px;
  border: 1px solid #dedede;
  background-color: transparent;
  width: 100%;
  margin-bottom: 30px;
  font-size: 15px;
  padding: 0 16px;
  border-radius: 0;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none;
  box-shadow: none;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

textarea {
  height: auto;
  padding: 8px 16px;
  margin-bottom: 25px;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="date"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="month"]:focus,
input[type="week"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="time"]:focus,
input[type="url"]:focus,
textarea:focus {
  border-color: #35bdff;
  background-color: #fff;
  outline: none;
  box-shadow: none !important;
}

input:not([type="checkbox"]):not([type="radio"]),
textarea {
  -webkit-appearance: none;
}

/* Change Color of Placeholders */
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #7f7f7f;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #7f7f7f;
  opacity: 1;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #7f7f7f;
  opacity: 1;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #7f7f7f;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  padding-left: 12px;
  /* background-image: url(../img/dropdown.png); */
  background-repeat: no-repeat;
  background-position: 100% 50%;
}

select::-ms-expand {
  display: none;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  width: 100%;
  justify-content: flex-end;
}
.col-md-5.col-sm-12 {
  width: 50%;
}
.col-md-7 {
  width: 50%;
}
.row-12 input[type="text"],
.row-12 input[type="email"] {
  margin-bottom: 12px;
}

/* Checkboxes & Radio Buttons
-------------------------------------------------------*/
input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label:before {
  width: 17px;
  height: 17px;
  content: "";
  display: inline-block;
  font-size: 13px;
  margin: -4px 12px 0 0;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid #dedede;
}

input[type="checkbox"]:checked + label:before {
  content: "\f0c8";
  font-family: "FontAwesome";
  color: #000;
  font-size: 9px;
  line-height: 16px;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  cursor: pointer;
  margin-bottom: 0;
  text-transform: none;
  letter-spacing: normal;
  color: #000;
  font-size: 15px;
}

.radio-buttons > li,
.checkboxes > li {
  padding: 7px 0;
}

input[type="radio"] {
  display: none;
}

input[type="radio"] + label:before {
  display: inline-block;
  content: "";
  width: 17px;
  height: 17px;
  box-shadow: 0 0 0 1px #d4d4d4;
  border-radius: 40px;
  margin: -3px 10px 0 0;
  outline: none;
  vertical-align: middle;
  cursor: pointer;
  margin-bottom: 0;
}

input[type="radio"]:checked + label:before {
  background-color: #171717;
  border: 5px solid #fff;
  padding: 1px;
}

input[type="radio"]:focus {
  outline: none;
}

label {
  color: #000;
  font-size: 15px;
  vertical-align: middle;
  font-weight: 400;
  margin-bottom: 7px;
}

input.btn.btn-lg,
button.btn.btn-lg {
  padding: 0 34px;
  height: 44px;
  font-size: 12px;
}

input.btn.btn-md,
button.btn.btn-md {
  padding: 0 27px;
  height: 38px;
}

input.btn:hover,
button.btn:hover {
  background-color: #aa8b6b;
  color: #fff;
}

input.btn.btn-dark,
button.btn.btn-dark {
  background-color: #000;
}

input.btn.btn-dark:hover,
button.btn.btn-dark:hover {
  background-color: #35bdff;
}

input.btn.btn-stroke,
button.btn.btn-stroke {
  border: 2px solid #ebebeb;
}

input.btn.btn-stroke:hover,
button.btn.btn-stroke:hover {
  background-color: #35bdff;
}

/*-------------------------------------------------------*/
/* Tables
/*-------------------------------------------------------*/
table th {
  font-weight: normal;
}

.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  border-top: 1px solid #ebebeb;
  padding: 10px;
}

.table > thead > tr > th {
  border-bottom: none;
}

.table thead tr th {
  font-size: 14px;
}

.table-bordered,
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ebebeb;
}

.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f7f8f9;
}

/* Quantity
-------------------------------------------------------*/
.quantity.buttons_added {
  white-space: nowrap;
  position: relative;
  margin-right: 20px;
}

.quantity.buttons_added .quantity-adjust {
  float: left;
}

.quantity.buttons_added .minus,
.quantity.buttons_added .plus {
  width: 22px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  display: block;
  background-color: #fff;
  border: 1px solid #ebebeb;
  border-left: none;
  text-align: center;
  color: #000;
}

.quantity.buttons_added .plus {
  border-bottom: none;
}

.quantity .input-text.qty {
  width: 44px;
  height: 44px;
  padding: 0;
  margin-bottom: 0;
  text-align: center;
  float: left;
  border: 1px solid #ebebeb;
  background-color: transparent;
  line-height: 1;
  border-radius: 0;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.product_meta span {
  display: block;
  line-height: 32px;
  font-size: 13px;
  color: #7f7f7f;
}

.product_meta span a {
  color: #000;
}

.product_meta span a:hover {
  color: #35bdff;
}

.single-product .socials-share span,
.project-info .socials-share span {
  color: #7f7f7f;
  font-size: 13px;
}

.socials-share .social-icons {
  display: inline-block;
  margin-left: 18px;
}

.socials-share .social-icons a {
  color: #b2b2b2;
  font-size: 13px;
}

.socials-share .social-icons a:hover {
  color: #000;
}

/*-------------------------------------------------------*/
/* Cart Page
/*-------------------------------------------------------*/
.shopping-cart h2,
.checkout h2 {
  font-size: 16px;
}

.order-review-wrap {
  border: 1px solid #dedede;
  padding: 40px 30px;
}

.cart_totals h2,
.order-review-wrap h2 {
  margin-bottom: 15px;
}

.shop_table thead {
  border-bottom: 1px solid #ebebeb;
}

.shop_table tr td {
  vertical-align: middle !important;
}

.shop_table.cart {
  margin-bottom: 0;
}

.shop_table.cart thead tr th,
.shop_table.cart tr {
  padding: 14px 0;
  border-left: none;
}

.shop_table.cart tr:last-child {
  border-bottom: 1px solid #ebebeb;
}

.shop_table .product-thumbnail {
  padding: 30px 24px 30px 0;
  width: 130px;
  max-width: 130px;
  min-width: 80px;
}

@media only screen and (max-width: 991px) {
  .shop_table .product-thumbnail {
    padding: 15px;
  }
}

.shop_table td.product-name {
  width: 30%;
  line-height: 24px;
}

.shop_table td.product-quantity {
  min-width: 132px;
}

.shop_table .product-name > a,
.shop_table .product-price > span,
.shop_table .product-subtotal > span {
  color: #000;
}

.shop_table .product-name > a:hover {
  color: #35bdff;
}

.shop_table .product-remove {
  text-align: right;
  min-width: 30px;
}

.remove {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background-color: #f7f8f9;
  color: #7f7f7f;
}

.remove i {
  font-size: 18px;
  display: block;
}

.remove:hover {
  background-color: #35bdff;
  color: #fff;
}

.cart_totals {
  padding-left: 30px;
}

@media only screen and (max-width: 991px) {
  .cart_totals {
    padding-left: 0;
  }
}

.cart_totals table {
  margin-bottom: 15px;
  min-width: 100%;
}

.cart_totals .table > tbody > tr > td,
.cart_totals .table > tbody > tr > th,
.table.ecommerce-checkout-review-order-table > tbody > tr > td,
.table.ecommerce-checkout-review-order-table > tbody > tr > th {
  color: #000;
  padding: 14px 0;
}

.cart_totals tr:first-child th,
.cart_totals tr:first-child td,
.ecommerce-checkout-review-order-table tr:first-child th,
.ecommerce-checkout-review-order-table tr:first-child td {
  border-top: 0;
}

.cart_totals tr td,
.ecommerce-checkout-review-order tr td {
  text-align: right;
}

.order-total .amount {
  font-size: 16px;
}

.actions {
  float: right;
}

@media only screen and (max-width: 991px) {
  .actions {
    float: left;
  }
}

.actions > input,
.actions > div {
  display: inline-block;
  margin-left: 5px;
}

input.btn,
button.btn {
  padding: 12px 27px;
  font-size: 11px;
  background-color: #424242;
}

.coupon .input-text {
  width: 50%;
  display: inline-block;
  float: left;
  margin-right: 8px;
}

.form-row {
  float: left;
}

.form-row.form-row-wide {
  width: 100%;
}

.shipping-calculator-form p:last-child,
select.country_to_state {
  margin-bottom: 0;
}

#calc_shipping_postcode,
#calc_shipping_state {
  margin-bottom: 10px;
}

.table.shop_table tr td.product-name {
  line-height: 24px;
}

/*-------------------------------------------------------*/
/* Responsive Styles
/*-------------------------------------------------------*/
@media (max-width: 1199px) {
  #products-grid .product-item {
    width: 33.33333%;
  }
}

@media (max-width: 991px) {
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 25px;
  }
  h3 {
    font-size: 22px;
  }
  h4 {
    font-size: 19px;
  }
  .section-wrap {
    padding: 80px 0;
    background-attachment: scroll !important;
    background-position: 50% 50% !important;
  }
  .container-fluid.semi-fluid {
    padding: 0 30px;
  }
  .call-to-action h2 {
    font-size: 36px;
  }
  .footer-widgets .row > div {
    margin-bottom: 60px;
  }
  .title-text h1 {
    font-size: 24px;
  }
  .blog-standard .post-content {
    padding-right: 15px;
  }
  .project-description {
    padding-left: 15px;
    margin-top: 30px;
  }
  .heading-row {
    margin-bottom: 40px;
  }
  .testimonials .testimonial-text {
    font-size: 22px;
    line-height: 36px;
  }
  #products-grid .product-item {
    width: 50%;
  }
}

@media (max-width: 767px) {
  .container-fluid.semi-fluid {
    padding: 0 15px;
  }
  .call-to-action h3 {
    margin-bottom: 20px;
  }
  .entry-content {
    padding-left: 0;
    border-left: none;
    margin-top: 30px;
  }
  .entry-wrap {
    padding-top: 30px;
  }
  .ecommerce-ordering {
    width: 60%;
    float: none;
    margin: auto;
  }
}

@media (max-width: 640px) {
  .col-xxs-12 {
    width: 100%;
  }
  .col-xxs-6 {
    width: 50%;
  }
  .entry .blockquote-style-1 {
    padding: 40px;
  }
  .entry .blockquote-style-1 p:before {
    display: none;
  }
  .pagination a:first-child {
    margin-right: 5px;
    width: 20px;
  }
  .pagination a:last-child {
    margin-left: 5px;
    width: 20px;
  }
  .pagination a > i {
    font-size: 20px;
  }
}

@media (max-width: 540px) {
  .table-wrap {
    overflow-x: scroll;
  }
}

@media (max-width: 480px) {
  .page-404 h1 {
    font-size: 100px;
  }
  #products-grid .product-item,
  .product {
    width: 100%;
  }
  .newsletter .newsletter-form {
    width: 100%;
    margin-right: 0;
  }
  .vertical .nav-tabs,
  .nav-tabs > li {
    float: none;
    width: 100%;
  }
  .vertical .nav-tabs li {
    padding-bottom: 0;
  }
  .vertical .nav.nav-tabs > li.active > a {
    right: 0;
    padding-left: 20px;
  }
  .vertical .tab-content {
    border-top: 0;
  }
}


</style>
