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
                  <tr class="cart_item">
                    <td class="product-thumbnail">
                      <a href="#">
                        <img
                          src="https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
                          alt=""
                        />
                      </a>
                    </td>
                    <td class="product-name">
                      <a href="#">Fashion Shorts</a>
                      <ul>
                        <li>Size: XL</li>
                        <li>Color: White</li>
                      </ul>
                    </td>
                    <td class="product-price">
                      <span class="amount">$1250.00</span>
                    </td>
                    <td class="product-quantity">
                      <div class="quantity buttons_added">
                        <input
                          type="number"
                          step="1"
                          min="0"
                          value="1"
                          title="Qty"
                          class="input-text qty text"
                        />
                        <div class="quantity-adjust">
                          <a href="#" class="plus">
                            <i class="bx bxs-chevron-up"></i>
                          </a>
                          <a href="#" class="minus">
                            <i class="bx bxs-chevron-down"></i>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td class="product-subtotal">
                      <span class="amount">$1250.00</span>
                    </td>
                    <td class="product-remove">
                      <a href="#" class="remove" title="Remove this item">
                        <!-- <i class="bx bxs-x-circle"></i> -->
                        x
                      </a>
                    </td>
                  </tr>
                  <!-- end item -->
                  <!-- item -->
                  <tr class="cart_item">
                    <td class="product-thumbnail">
                      <a href="#">
                        <img
                          src="https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
                          alt=""
                        />
                      </a>
                    </td>
                    <td class="product-name">
                      <a href="#">Fashion Shorts</a>
                      <ul>
                        <li>Size: XL</li>
                        <li>Color: White</li>
                      </ul>
                    </td>
                    <td class="product-price">
                      <span class="amount">$1250.00</span>
                    </td>
                    <td class="product-quantity">
                      <div class="quantity buttons_added">
                        <input
                          type="number"
                          step="1"
                          min="0"
                          value="1"
                          title="Qty"
                          class="input-text qty text"
                        />
                        <div class="quantity-adjust">
                          <a href="#" class="plus">
                            <i class="bx bxs-chevron-up"></i>
                          </a>
                          <a href="#" class="minus">
                            <i class="bx bxs-chevron-down"></i>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td class="product-subtotal">
                      <span class="amount">$1250.00</span>
                    </td>
                    <td class="product-remove">
                      <a href="#" class="remove" title="Remove this item">
                        <!-- <i class="bx bxs-x-circle"></i> -->
                        x
                      </a>
                    </td>
                  </tr>
                  <!-- end item -->
                  <!-- item -->
                  <tr class="cart_item">
                    <td class="product-thumbnail">
                      <a href="#">
                        <img
                          src="https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80"
                          alt=""
                        />
                      </a>
                    </td>
                    <td class="product-name">
                      <a href="#">Fashion Shorts</a>
                      <ul>
                        <li>Size: XL</li>
                        <li>Color: White</li>
                      </ul>
                    </td>
                    <td class="product-price">
                      <span class="amount">$1250.00</span>
                    </td>
                    <td class="product-quantity">
                      <div class="quantity buttons_added">
                        <input
                          type="number"
                          step="1"
                          min="0"
                          value="1"
                          title="Qty"
                          class="input-text qty text"
                        />
                        <div class="quantity-adjust">
                          <a href="#" class="plus">
                            <i class="bx bxs-chevron-up"></i>
                          </a>
                          <a href="#" class="minus">
                            <i class="bx bxs-chevron-down"></i>
                          </a>
                        </div>
                      </div>
                    </td>
                    <td class="product-subtotal">
                      <span class="amount">$1250.00</span>
                    </td>
                    <td class="product-remove">
                      <a href="#" class="remove" title="Remove this item">
                        <!-- <i class="bx bxs-x-circle"></i> -->
                        x
                      </a>
                    </td>
                  </tr>
                  <!-- end item -->
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
                    <router-link to="/checkout" class="btn btn-lg btn-dark"
                      ><span>proceed to checkout</span></router-link
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
                      <span class="amount">$1490.00</span>
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
                      <strong><span class="amount">$1490.00</span></strong>
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
export default {};
</script>

<style scoped>
.col-md-12{
  width: 100%;
}
.shop_table.cart.table{
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
.col-md-5.col-sm-12{
  width: 50%;
}
.col-md-7{
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

/*-------------------------------------------------------*/
/* Spacings
/*-------------------------------------------------------*/
/* .nomargin {
  margin: 0 !important;
}

.nopadding {
  padding: 0 !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-10 {
  margin-top: 10px;
}

.mt-20 {
  margin-top: 20px;
}

.mt-30 {
  margin-top: 30px;
}

.mt-40 {
  margin-top: 40px;
}

.mt-50 {
  margin-top: 50px;
}

.mt-60 {
  margin-top: 60px;
}

.mt-70 {
  margin-top: 70px;
}

.mt-80 {
  margin-top: 80px;
}

.mt-90 {
  margin-top: 90px;
}

.mt-100 {
  margin-top: 100px;
}

.mt-110 {
  margin-top: 110px;
}

.mt-120 {
  margin-top: 120px;
}

.mt-130 {
  margin-top: 130px;
}

.mt-140 {
  margin-top: 140px;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mb-10 {
  margin-bottom: 10px;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mb-40 {
  margin-bottom: 40px;
}

.mb-50 {
  margin-bottom: 50px;
}

.mb-60 {
  margin-bottom: 60px;
}

.mb-70 {
  margin-bottom: 70px;
}

.mb-80 {
  margin-bottom: 80px;
}

.mb-90 {
  margin-bottom: 90px;
}

.mb-100 {
  margin-bottom: 100px;
}

.mb-110 {
  margin-bottom: 110px;
}

.mb-120 {
  margin-bottom: 120px;
}

.mb-130 {
  margin-bottom: 130px;
}

.mb-140 {
  margin-bottom: 140px;
}

.pt-0 {
  padding-top: 0;
}

.pt-10 {
  padding-top: 10px;
}

.pt-20 {
  padding-top: 20px;
}

.pt-30 {
  padding-top: 30px;
}

.pt-40 {
  padding-top: 40px;
}

.pt-50 {
  padding-top: 50px;
}

.pt-60 {
  padding-top: 60px;
}

.pt-70 {
  padding-top: 70px;
}

.pt-80 {
  padding-top: 80px;
}

.pt-90 {
  padding-top: 90px;
}

.pt-100 {
  padding-top: 100px;
}

.pt-110 {
  padding-top: 110px;
}

.pt-120 {
  padding-top: 120px;
}

.pt-130 {
  padding-top: 130px;
}

.pt-140 {
  padding-top: 140px;
}

.pt-150 {
  padding-top: 150px;
}

.pt-160 {
  padding-top: 160px;
}

.pt-170 {
  padding-top: 170px;
}

.pt-180 {
  padding-top: 180px;
}

.pt-190 {
  padding-top: 190px;
}

.pt-200 {
  padding-top: 200px;
}

.pb-0 {
  padding-bottom: 0;
}

.pb-10 {
  padding-bottom: 10px;
}

.pb-20 {
  padding-bottom: 20px;
}

.pb-30 {
  padding-bottom: 30px;
}

.pb-40 {
  padding-bottom: 40px;
}

.pb-50 {
  padding-bottom: 50px;
}

.pb-60 {
  padding-bottom: 60px;
}

.pb-70 {
  padding-bottom: 70px;
}

.pb-80 {
  padding-bottom: 80px;
}

.pb-90 {
  padding-bottom: 90px;
}

.pb-100 {
  padding-bottom: 100px;
}

.pb-110 {
  padding-bottom: 110px;
}

.pb-120 {
  padding-bottom: 120px;
}

.pb-130 {
  padding-bottom: 130px;
}

.pb-140 {
  padding-bottom: 140px;
}

.pb-150 {
  padding-bottom: 150px;
}

.pb-160 {
  padding-bottom: 160px;
}

.pb-170 {
  padding-bottom: 170px;
}

.pb-180 {
  padding-bottom: 180px;
}

.pb-190 {
  padding-bottom: 190px;
}

.pb-200 {
  padding-bottom: 200px;
} */
/* 
@media only screen and (max-width: 1199px) {
  .mt-lrg-0 {
    margin-top: 0 !important;
  }
  .mt-lrg-10 {
    margin-top: 10px;
  }
  .mt-lrg-20 {
    margin-top: 20px;
  }
  .mt-lrg-30 {
    margin-top: 30px;
  }
  .mt-lrg-40 {
    margin-top: 40px;
  }
  .mt-lrg-50 {
    margin-top: 50px;
  }
  .mt-lrg-60 {
    margin-top: 60px;
  }
  .mt-lrg-70 {
    margin-top: 70px;
  }
  .mt-lrg-80 {
    margin-top: 80px;
  }
  .mt-lrg-90 {
    margin-top: 90px;
  }
  .mt-lrg-100 {
    margin-top: 100px;
  }
  .mt-lrg-110 {
    margin-top: 110px;
  }
  .mt-lrg-120 {
    margin-top: 120px;
  }
  .mt-lrg-130 {
    margin-top: 130px;
  }
  .mt-lrg-140 {
    margin-top: 140px;
  }
  .mb-lrg-0 {
    margin-bottom: 0 !important;
  }
  .mb-lrg-10 {
    margin-bottom: 10px;
  }
  .mb-lrg-20 {
    margin-bottom: 20px;
  }
  .mb-lrg-30 {
    margin-bottom: 30px;
  }
  .mb-lrg-40 {
    margin-bottom: 40px;
  }
  .mb-lrg-50 {
    margin-bottom: 50px;
  }
  .mb-lrg-60 {
    margin-bottom: 60px;
  }
  .mb-lrg-70 {
    margin-bottom: 70px;
  }
  .mb-lrg-80 {
    margin-bottom: 80px;
  }
  .mb-lrg-90 {
    margin-bottom: 90px;
  }
  .mb-lrg-100 {
    margin-bottom: 100px;
  }
  .mb-lrg-110 {
    margin-bottom: 110px;
  }
  .mb-lrg-120 {
    margin-bottom: 120px;
  }
  .mb-lrg-130 {
    margin-bottom: 130px;
  }
  .mb-lrg-140 {
    margin-bottom: 140px;
  }
  .pt-lrg-0 {
    padding-top: 0;
  }
  .pt-lrg-10 {
    padding-top: 10px;
  }
  .pt-lrg-20 {
    padding-top: 20px;
  }
  .pt-lrg-30 {
    padding-top: 30px;
  }
  .pt-lrg-40 {
    padding-top: 40px;
  }
  .pt-lrg-50 {
    padding-top: 50px;
  }
  .pt-lrg-60 {
    padding-top: 60px;
  }
  .pt-lrg-70 {
    padding-top: 70px;
  }
  .pt-lrg-80 {
    padding-top: 80px;
  }
  .pt-lrg-90 {
    padding-top: 90px;
  }
  .pt-lrg-100 {
    padding-top: 100px;
  }
  .pt-lrg-110 {
    padding-top: 110px;
  }
  .pt-lrg-120 {
    padding-top: 120px;
  }
  .pt-lrg-130 {
    padding-top: 130px;
  }
  .pt-lrg-140 {
    padding-top: 140px;
  }
  .pb-lrg-0 {
    padding-bottom: 0;
  }
  .pb-lrg-10 {
    padding-bottom: 10px;
  }
  .pb-lrg-20 {
    padding-bottom: 20px;
  }
  .pb-lrg-30 {
    padding-bottom: 30px;
  }
  .pb-lrg-40 {
    padding-bottom: 40px;
  }
  .pb-lrg-50 {
    padding-bottom: 50px;
  }
  .pb-lrg-60 {
    padding-bottom: 60px;
  }
  .pb-lrg-70 {
    padding-bottom: 70px;
  }
  .pb-lrg-80 {
    padding-bottom: 80px;
  }
  .pb-lrg-90 {
    padding-bottom: 90px;
  }
  .pb-lrg-100 {
    padding-bottom: 100px;
  }
  .pb-lrg-110 {
    padding-bottom: 110px;
  }
  .pb-lrg-120 {
    padding-bottom: 120px;
  }
  .pb-lrg-130 {
    padding-bottom: 130px;
  }
  .pb-lrg-140 {
    padding-bottom: 140px;
  }
} */
/* 
@media only screen and (max-width: 991px) {
  .mt-mdm-0 {
    margin-top: 0 !important;
  }
  .mt-mdm-10 {
    margin-top: 10px;
  }
  .mt-mdm-20 {
    margin-top: 20px;
  }
  .mt-mdm-30 {
    margin-top: 30px;
  }
  .mt-mdm-40 {
    margin-top: 40px;
  }
  .mt-mdm-50 {
    margin-top: 50px;
  }
  .mt-mdm-60 {
    margin-top: 60px;
  }
  .mt-mdm-70 {
    margin-top: 70px;
  }
  .mt-mdm-80 {
    margin-top: 80px;
  }
  .mt-mdm-90 {
    margin-top: 90px;
  }
  .mt-mdm-100 {
    margin-top: 100px;
  }
  .mt-mdm-110 {
    margin-top: 110px;
  }
  .mt-mdm-120 {
    margin-top: 120px;
  }
  .mt-mdm-130 {
    margin-top: 130px;
  }
  .mt-mdm-140 {
    margin-top: 140px;
  }
  .mb-mdm-0 {
    margin-bottom: 0 !important;
  }
  .mb-mdm-10 {
    margin-bottom: 10px;
  }
  .mb-mdm-20 {
    margin-bottom: 20px;
  }
  .mb-mdm-30 {
    margin-bottom: 30px;
  }
  .mb-mdm-40 {
    margin-bottom: 40px;
  }
  .mb-mdm-50 {
    margin-bottom: 50px;
  }
  .mb-mdm-60 {
    margin-bottom: 60px;
  }
  .mb-mdm-70 {
    margin-bottom: 70px;
  }
  .mb-mdm-80 {
    margin-bottom: 80px;
  }
  .mb-mdm-90 {
    margin-bottom: 90px;
  }
  .mb-mdm-100 {
    margin-bottom: 100px;
  }
  .mb-mdm-110 {
    margin-bottom: 110px;
  }
  .mb-mdm-120 {
    margin-bottom: 120px;
  }
  .mb-mdm-130 {
    margin-bottom: 130px;
  }
  .mb-mdm-140 {
    margin-bottom: 140px;
  }
  .pt-mdm-0 {
    padding-top: 0;
  }
  .pt-mdm-10 {
    padding-top: 10px;
  }
  .pt-mdm-20 {
    padding-top: 20px;
  }
  .pt-mdm-30 {
    padding-top: 30px;
  }
  .pt-mdm-40 {
    padding-top: 40px;
  }
  .pt-mdm-50 {
    padding-top: 50px;
  }
  .pt-mdm-60 {
    padding-top: 60px;
  }
  .pt-mdm-70 {
    padding-top: 70px;
  }
  .pt-mdm-80 {
    padding-top: 80px;
  }
  .pt-mdm-90 {
    padding-top: 90px;
  }
  .pt-mdm-100 {
    padding-top: 100px;
  }
  .pt-mdm-110 {
    padding-top: 110px;
  }
  .pt-mdm-120 {
    padding-top: 120px;
  }
  .pt-mdm-130 {
    padding-top: 130px;
  }
  .pt-mdm-140 {
    padding-top: 140px;
  }
  .pt-mdm-150 {
    padding-top: 150px;
  }
  .pb-mdm-0 {
    padding-bottom: 0;
  }
  .pb-mdm-10 {
    padding-bottom: 10px;
  }
  .pb-mdm-20 {
    padding-bottom: 20px;
  }
  .pb-mdm-30 {
    padding-bottom: 30px;
  }
  .pb-mdm-40 {
    padding-bottom: 40px;
  }
  .pb-mdm-50 {
    padding-bottom: 50px;
  }
  .pb-mdm-60 {
    padding-bottom: 60px;
  }
  .pb-mdm-70 {
    padding-bottom: 70px;
  }
  .pb-mdm-80 {
    padding-bottom: 80px;
  }
  .pb-mdm-90 {
    padding-bottom: 90px;
  }
  .pb-mdm-100 {
    padding-bottom: 100px;
  }
  .pb-mdm-110 {
    padding-bottom: 110px;
  }
  .pb-mdm-120 {
    padding-bottom: 120px;
  }
  .pb-mdm-130 {
    padding-bottom: 130px;
  }
  .pb-mdm-140 {
    padding-bottom: 140px;
  }
  .pb-mdm-150 {
    padding-bottom: 150px;
  }
}

@media only screen and (max-width: 767px) {
  .mt-sml-0 {
    margin-top: 0 !important;
  }
  .mt-sml-10 {
    margin-top: 10px;
  }
  .mt-sml-20 {
    margin-top: 20px;
  }
  .mt-sml-30 {
    margin-top: 30px;
  }
  .mt-sml-40 {
    margin-top: 40px;
  }
  .mt-sml-50 {
    margin-top: 50px;
  }
  .mt-sml-60 {
    margin-top: 60px;
  }
  .mt-sml-70 {
    margin-top: 70px;
  }
  .mt-sml-80 {
    margin-top: 80px;
  }
  .mt-sml-90 {
    margin-top: 90px;
  }
  .mt-sml-100 {
    margin-top: 100px;
  }
  .mt-sml-110 {
    margin-top: 110px;
  }
  .mt-sml-120 {
    margin-top: 120px;
  }
  .mt-sml-130 {
    margin-top: 130px;
  }
  .mt-sml-140 {
    margin-top: 140px;
  }
  .mb-sml-0 {
    margin-bottom: 0 !important;
  }
  .mb-sml-10 {
    margin-bottom: 10px;
  }
  .mb-sml-20 {
    margin-bottom: 20px;
  }
  .mb-sml-30 {
    margin-bottom: 30px;
  }
  .mb-sml-40 {
    margin-bottom: 40px;
  }
  .mb-sml-50 {
    margin-bottom: 50px;
  }
  .mb-sml-60 {
    margin-bottom: 60px;
  }
  .mb-sml-70 {
    margin-bottom: 70px;
  }
  .mb-sml-80 {
    margin-bottom: 80px;
  }
  .mb-sml-90 {
    margin-bottom: 90px;
  }
  .mb-sml-100 {
    margin-bottom: 100px;
  }
  .mb-sml-110 {
    margin-bottom: 110px;
  }
  .mb-sml-120 {
    margin-bottom: 120px;
  }
  .mb-sml-130 {
    margin-bottom: 130px;
  }
  .mb-sml-140 {
    margin-bottom: 140px;
  }
  .pt-sml-0 {
    padding-top: 0;
  }
  .pt-sml-10 {
    padding-top: 10px;
  }
  .pt-sml-20 {
    padding-top: 20px;
  }
  .pt-sml-30 {
    padding-top: 30px;
  }
  .pt-sml-40 {
    padding-top: 40px;
  }
  .pt-sml-50 {
    padding-top: 50px;
  }
  .pt-sml-60 {
    padding-top: 60px;
  }
  .pt-sml-70 {
    padding-top: 70px;
  }
  .pt-sml-80 {
    padding-top: 80px;
  }
  .pt-sml-90 {
    padding-top: 90px;
  }
  .pt-sml-100 {
    padding-top: 100px;
  }
  .pt-sml-110 {
    padding-top: 110px;
  }
  .pt-sml-120 {
    padding-top: 120px;
  }
  .pt-sml-130 {
    padding-top: 130px;
  }
  .pt-sml-140 {
    padding-top: 140px;
  }
  .pb-sml-0 {
    padding-bottom: 0;
  }
  .pb-sml-10 {
    padding-bottom: 10px;
  }
  .pb-sml-20 {
    padding-bottom: 20px;
  }
  .pb-sml-30 {
    padding-bottom: 30px;
  }
  .pb-sml-40 {
    padding-bottom: 40px;
  }
  .pb-sml-50 {
    padding-bottom: 50px;
  }
  .pb-sml-60 {
    padding-bottom: 60px;
  }
  .pb-sml-70 {
    padding-bottom: 70px;
  }
  .pb-sml-80 {
    padding-bottom: 80px;
  }
  .pb-sml-90 {
    padding-bottom: 90px;
  }
  .pb-sml-100 {
    padding-bottom: 100px;
  }
  .pb-sml-110 {
    padding-bottom: 110px;
  }
  .pb-sml-120 {
    padding-bottom: 120px;
  }
  .pb-sml-130 {
    padding-bottom: 130px;
  }
  .pb-sml-140 {
    padding-bottom: 140px;
  }
}

@media only screen and (max-width: 480px) {
  .mt-xsm-0 {
    margin-top: 0 !important;
  }
  .mt-xsm-10 {
    margin-top: 10px;
  }
  .mt-xsm-20 {
    margin-top: 20px;
  }
  .mt-xsm-30 {
    margin-top: 30px;
  }
  .mt-xsm-40 {
    margin-top: 40px;
  }
  .mt-xsm-50 {
    margin-top: 50px;
  }
  .mt-xsm-60 {
    margin-top: 60px;
  }
  .mt-xsm-70 {
    margin-top: 70px;
  }
  .mt-xsm-80 {
    margin-top: 80px;
  }
  .mt-xsm-90 {
    margin-top: 90px;
  }
  .mt-xsm-100 {
    margin-top: 100px;
  }
  .mt-xsm-110 {
    margin-top: 110px;
  }
  .mt-xsm-120 {
    margin-top: 120px;
  }
  .mt-xsm-130 {
    margin-top: 130px;
  }
  .mt-xsm-140 {
    margin-top: 140px;
  }
  .mb-xsm-0 {
    margin-bottom: 0 !important;
  }
  .mb-xsm-10 {
    margin-bottom: 10px;
  }
  .mb-xsm-20 {
    margin-bottom: 20px;
  }
  .mb-xsm-30 {
    margin-bottom: 30px;
  }
  .mb-xsm-40 {
    margin-bottom: 40px;
  }
  .mb-xsm-50 {
    margin-bottom: 50px;
  }
  .mb-xsm-60 {
    margin-bottom: 60px;
  }
  .mb-xsm-70 {
    margin-bottom: 70px;
  }
  .mb-xsm-80 {
    margin-bottom: 80px;
  }
  .mb-xsm-90 {
    margin-bottom: 90px;
  }
  .mb-xsm-100 {
    margin-bottom: 100px;
  }
  .mb-xsm-110 {
    margin-bottom: 110px;
  }
  .mb-xsm-120 {
    margin-bottom: 120px;
  }
  .mb-xsm-130 {
    margin-bottom: 130px;
  }
  .mb-xsm-140 {
    margin-bottom: 140px;
  }
  .pt-xsm-0 {
    padding-top: 0;
  }
  .pt-xsm-10 {
    padding-top: 10px;
  }
  .pt-xsm-20 {
    padding-top: 20px;
  }
  .pt-xsm-30 {
    padding-top: 30px;
  }
  .pt-xsm-40 {
    padding-top: 40px;
  }
  .pt-xsm-50 {
    padding-top: 50px;
  }
  .pt-xsm-60 {
    padding-top: 60px;
  }
  .pt-xsm-70 {
    padding-top: 70px;
  }
  .pt-xsm-80 {
    padding-top: 80px;
  }
  .pt-xsm-90 {
    padding-top: 90px;
  }
  .pt-xsm-100 {
    padding-top: 100px;
  }
  .pt-xsm-110 {
    padding-top: 110px;
  }
  .pt-xsm-120 {
    padding-top: 120px;
  }
  .pt-xsm-130 {
    padding-top: 130px;
  }
  .pt-xsm-140 {
    padding-top: 140px;
  }
  .pb-xsm-0 {
    padding-bottom: 0;
  }
  .pb-xsm-10 {
    padding-bottom: 10px;
  }
  .pb-xsm-20 {
    padding-bottom: 20px;
  }
  .pb-xsm-30 {
    padding-bottom: 30px;
  }
  .pb-xsm-40 {
    padding-bottom: 40px;
  }
  .pb-xsm-50 {
    padding-bottom: 50px;
  }
  .pb-xsm-60 {
    padding-bottom: 60px;
  }
  .pb-xsm-70 {
    padding-bottom: 70px;
  }
  .pb-xsm-80 {
    padding-bottom: 80px;
  }
  .pb-xsm-90 {
    padding-bottom: 90px;
  }
  .pb-xsm-100 {
    padding-bottom: 100px;
  }
  .pb-xsm-110 {
    padding-bottom: 110px;
  }
  .pb-xsm-120 {
    padding-bottom: 120px;
  }
  .pb-xsm-130 {
    padding-bottom: 130px;
  }
  .pb-xsm-140 {
    padding-bottom: 140px;
  }
} */

/*# sourceMappingURL=style.css.map */
</style>