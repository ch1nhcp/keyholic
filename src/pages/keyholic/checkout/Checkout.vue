<template>
  <!-- Checkout -->
  <div style="text-align:center; margin:100px;" v-if="is != true">
    <router-link to="/signin"><h2>Please Sign in</h2></router-link>
  </div>
  <section v-if="is == true" class="section-wrap checkout pb-70">
    <div class="container relative">
      <div class="row">
        <div class="ecommerce col-xs-12">
          <form name="checkout" class="checkout ecommerce-checkout row">
            <div class="col-md-8" style="width: 60%;" id="customer_details">
              <div>
                <h2 class="heading uppercase bottom-line full-grey mb-30">
                  billing address
                </h2>

                <p
                  class="
                    form-row form-row-last
                    validate-required
                    ecommerce-invalid ecommerce-invalid-required-field
                  "
                  id="billing_last_name_field"
                >
                  <label for="billing_last_name">
                    Name
                    <abbr class="required" title="required">*</abbr>
                  </label>
                  <input
                    type="text"
                    class="input-text"
                    placeholder=" Name"
                    :value="users.Name"
                    readonly
                    name="billing_last_name"
                    id="billing_last_name"
                  />
                </p>

                <p
                  class="
                    form-row form-row-wide
                    address-field
                    validate-required
                    ecommerce-invalid ecommerce-invalid-required-field
                  "
                  id="billing_address_1_field"
                >
                  <label for="billing_address_1"
                    >Address
                    <abbr class="required" title="required">*</abbr>
                  </label>
                  <input
                    v-model="address"
                    type="text"
                    class="input-text"
                    placeholder="Street address"
                    value
                    name="billing_address_1"
                    id="billing_address_1"
                  />
                </p>

                <p
                  class="
                    form-row form-row-last
                    validate-required validate-phone
                  "
                  id="billing_phone_field"
                >
                  <label for="billing_phone"
                    >Phone
                    <abbr class="required" title="required">*</abbr>
                  </label>
                  <input
                    type="text"
                    class="input-text"
                    placeholder="Phone"
                    v-model="phone"
                    value
                    name="billing_phone"
                    id="billing_phone"
                  />
                </p>

                <div class="clear"></div>
              </div>

              <p class="form-row form-row-wide create-account">
                <input
                  type="checkbox"
                  class="input-checkbox"
                  id="createaccount"
                  name="createaccount"
                  value="1"
                />
              </p>

              <div class="clear"></div>

              <div>
                <div class="ecommerce-shipping-fields">
                  <input
                    type="checkbox"
                    id="ship-to-different-address-checkbox"
                    class="input-checkbox"
                    name="ship_to_different_address"
                    value="1"
                  />
                </div>
                <p
                  class="form-row notes ecommerce-validated"
                  id="order_comments_field"
                >
                  <label for="order_comments">Order Notes</label>
                  <textarea
                    name="order_comments"
                    class="input-text"
                    id="order_comments"
                    v-model="note"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    rows="2"
                    cols="6"
                  ></textarea>
                </p>
              </div>

              <div class="clear"></div>
            </div>
            <!-- end col -->

            <!-- Your Order -->
            <div class="col-md-4">
              <div
                class="order-review-wrap ecommerce-checkout-review-order"
                id="order_review"
              >
                <h2 class="heading uppercase bottom-line full-grey">
                  Your Order
                </h2>
                <table
                  class="table shop_table ecommerce-checkout-review-order-table"
                >
                  <!-- {{cart}} -->
                  <tbody>
                    <tr v-for="(item, index) in cart" :key="index">
                      <th>
                        {{ item.Name
                        }}<span class="count"> x{{ item.quantity }}</span>
                      </th>
                      <td>
                        <span class="amount"
                          >${{ item.SalePrice * item.quantity }}.00</span
                        >
                      </td>
                    </tr>

                    <tr class="cart-subtotal">
                      <th>Cart Subtotal</th>
                      <td>
                        <span class="amount">${{ SubTotal }}.00</span>
                      </td>
                    </tr>
                    <tr class="shipping">
                      <th>Shipping</th>
                      <td>
                        <span>Free Shipping</span>
                      </td>
                    </tr>
                    <tr class="order-total">
                      <th><strong>Order Total</strong></th>
                      <td>
                        <strong
                          ><span class="amount"
                            >${{ SubTotal }}.00</span
                          ></strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div id="payment" class="ecommerce-checkout-payment">
                  <h2 class="heading uppercase bottom-line full-grey">
                    Payment Method
                  </h2>
                  <ul class="payment_methods methods">
                    <li class="payment_method_cheque">
                      <input
                        v-model="payment"
                        id="payment_method_cheque"
                        type="radio"
                        class="input-radio"
                        name="payment_method"
                        value="cheque"
                      />
                      <label for="payment_method_cheque">Cheque payment</label>
                      <div class="payment_box payment_method_cheque">
                        <p>
                          Please send your cheque to Store Name, Store Street,
                          Store Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                    </li>

                    <li class="payment_method_paypal">
                      <input
                        v-model="payment"
                        id="payment_method_paypal"
                        type="radio"
                        class="input-radio"
                        name="payment_method"
                        value="tripe"
                      />
                      <label for="payment_method_paypal">Paypal</label>
                      <img src="#" alt="" />
                      <div class="payment_box payment_method_paypal">
                        <p>
                          Pay via PayPal; you can pay with your credit card if
                          you don’t have a PayPal account.
                        </p>
                        <!-- paypal -->{{ payment }}
                        <div v-show="payment == 'tripe'">
                          <div id="paypal-button-container"></div>
                        </div>
                        <!-- end paypal -->
                      </div>
                    </li>
                  </ul>
                  <div v-show="payment != 'tripe'" class="form-row place-order">
                    <input
                      @click="submit"
                      name="ecommerce_checkout_place_order"
                      class="btn btn-lg btn-dark"
                      id="place_order"
                      value="Place order"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- end order review -->
          </form>
        </div>
        <!-- end ecommerce -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>

  <!-- end checkout -->
</template>

<script>
import { PostData } from "../../../service/service";
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      phone: "",
      address: "",
      note: "",
      payment: "cheque",
      data: "",
      orderitem: "",
    };
  },
  methods: {
    //Thanh Toán PayPal
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.cart.length,
                  amount: {
                    currency_code: "USD",
                    value: this.SubTotal,
                  },
                },
              ],
            });
          },
          //Xử lý sau thanh toán
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
            let savedata = {};
            savedata.UserId = Number(this.users.Id);
            savedata.Name = this.users.Name;
            savedata.Phone = Number(this.phone);
            savedata.Address = this.address;
            savedata.TotalProducts = Number(this.TotalProducts);
            savedata.Price = Number(this.SubTotal);
            savedata.TotalPrice = Number(this.SubTotal);
            let respond = PostData("/api/order", savedata);
            this.data = await respond;
            if (this.data.Id > 0) {
              for (let i = 0; i < this.cart.length; i++) {
                let data = {};
                data.OrderId = this.data.Id;
                data.ProductId = this.cart[i].Id;
                data.Quantity = this.cart[i].quantity;
                let respond = PostData("/api/orderitem", data);
                this.orderitem = await respond;
              }
              if (this.orderitem.Id > 0) {
                this.$store.commit("product/DelAllCart");
              }
              alert("success");
              this.$router.push({ path: "/signin" });
            } else {
              alert("something wrong");
            }
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render("#paypal-button-container");
    },
    async submit() {
      if (this.phone == "" || this.address == "" || this.name == "") {
        alert("điền đủ thông tin");
        return;
      }
      if (this.payment == "") {
        alert("chọn phương thức thanh toán ");
        return;
      }
      let data = {};
      data.UserId = Number(this.users.Id);
      data.Name = this.users.Name;
      data.Phone = Number(this.phone);
      data.Address = this.address;
      data.TotalProducts = Number(this.TotalProducts);
      data.Price = Number(this.SubTotal);
      data.TotalPrice = Number(this.SubTotal);
      let respond = PostData("/api/order", data);
      this.data = await respond;
      if (this.data.Id > 0) {
        for (let i = 0; i < this.cart.length; i++) {
          let data = {};
          data.OrderId = this.data.Id;
          data.ProductId = this.cart[i].Id;
          data.Quantity = this.cart[i].quantity;
          let respond = PostData("/api/orderitem", data);
          this.orderitem = await respond;
        }
        if (this.orderitem.Id > 0) {
          this.$store.commit("product/DelAllCart");
        }
        alert("success");
        this.$router.push({ path: "/signin" });
      } else {
        alert("something wrong");
      }
    },
  },
  computed: {
    ...mapState("user", ["is", "users"]),
    ...mapState("product", ["cart"]),
    //tổng sản phẩm
    TotalProducts: function() {
      let total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].quantity;
      }
      return total;
    },
    //tổng tiền
    SubTotal: function() {
      let total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].SalePrice * this.cart[i].quantity;
      }
      return total;
    },
  },
  mounted: function() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AQ9F7YFI2uDgG2coszPXLv9XwEORERFAni7Zt1NgT09YHljQv5q688w000033jrn09YiSgASHO9ar08o";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
};
</script>

<style scoped>
input {
  border-radius: 6px;
  margin-bottom: 6px;
  padding: 12px;
  border: 1px solid rgba(50, 50, 93, 0.1);
  height: 44px;
  font-size: 16px;
  width: 100%;
  background: white;
}
.result-message {
  line-height: 22px;
  font-size: 16px;
}
.result-message a {
  color: rgb(89, 111, 214);
  font-weight: 600;
  text-decoration: none;
}
.hidden {
  display: none;
}
#card-error {
  color: rgb(105, 115, 134);
  text-align: left;
  font-size: 13px;
  line-height: 17px;
  margin-top: 12px;
}
#card-element {
  border-radius: 4px 4px 0 0;
  padding: 12px;
  border: 1px solid rgba(50, 50, 93, 0.1);
  height: 44px;
  width: 100%;
  background: white;
}
#payment-request-button {
  margin-bottom: 32px;
}
/* Buttons and links */
button {
  background: #5469d4;
  color: #ffffff;
  font-family: Arial, sans-serif;
  border-radius: 0 0 4px 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
}
button:hover {
  filter: contrast(115%);
}
button:disabled {
  opacity: 0.5;
  cursor: default;
}
/* spinner/processing state, errors */
.spinner,
.spinner:before,
.spinner:after {
  border-radius: 50%;
}
.spinner {
  color: #ffffff;
  font-size: 22px;
  text-indent: -99999px;
  margin: 0px auto;
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 2px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.spinner:before,
.spinner:after {
  position: absolute;
  content: "";
}
.spinner:before {
  width: 10.4px;
  height: 20.4px;
  background: #5469d4;
  border-radius: 20.4px 0 0 20.4px;
  top: -0.2px;
  left: -0.2px;
  -webkit-transform-origin: 10.4px 10.2px;
  transform-origin: 10.4px 10.2px;
  -webkit-animation: loading 2s infinite ease 1.5s;
  animation: loading 2s infinite ease 1.5s;
}
.spinner:after {
  width: 10.4px;
  height: 10.2px;
  background: #5469d4;
  border-radius: 0 10.2px 10.2px 0;
  top: -0.1px;
  left: 10.2px;
  -webkit-transform-origin: 0px 10.2px;
  transform-origin: 0px 10.2px;
  -webkit-animation: loading 2s infinite ease;
  animation: loading 2s infinite ease;
}
@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@media only screen and (max-width: 600px) {
  form {
    width: 80vw;
  }
}
/* payment */
.checkout .col-md-8 {
  width: 60 !important;
}
.col-md-4 {
  width: 40%;
}
.clearfix:after {
  clear: both;
}

.clear {
  clear: both;
}

.oh {
  overflow: hidden;
}

.ov {
  overflow: visible;
}

.relative {
  position: relative;
}

.section-wrap {
  padding: 80px 0;
  overflow: hidden;
  background-attachment: fixed;
  background-size: cover;
}

.main-container {
  margin: auto;
}

@media (min-width: 1200px) {
  .rev_slider_wrapper.container {
    width: 1170px;
  }
}

.mobile section {
  background-attachment: scroll !important;
}

.bg-dark {
  background-color: #171717;
}

.bg-darkblue {
  background-color: #152332;
}

.bg-light {
  background-color: #f7f8f9;
}

.bg-white {
  background-color: #fff;
}

.bg-color {
  background-color: #b79d82;
}

.white {
  color: #fff;
}

.static {
  position: static;
}

.block {
  display: block;
}

.left {
  float: left;
}

.right {
  float: right;
}

.valign {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.container-fluid.semi-fluid {
  padding: 0 50px;
}

.img-fw {
  width: 100%;
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
  background-color: #b79d82;
}

::-webkit-selection {
  color: #fff;
  background-color: #b79d82;
}

::selection {
  color: #fff;
  background-color: #b79d82;
}

:focus {
  outline: none;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  background: #fff;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  color: #7f7f7f;
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

video {
  height: 100%;
  width: 100%;
}

/* 5 columns
-------------------------------------------------------*/
.col-xs-5ths,
.col-sm-5ths,
.col-md-5ths,
.col-lg-5ths {
  position: relative;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
}

.col-xs-5ths {
  width: 20%;
  float: left;
}

@media (min-width: 767px) {
  .col-sm-5ths {
    width: 20%;
    float: left;
  }
}

@media (min-width: 992px) {
  .col-md-5ths {
    width: 50%;
    float: left;
  }
}

@media (min-width: 1200px) {
  .col-lg-5ths {
    width: 20%;
    float: left;
  }
}

/* Hover Overlays
-------------------------------------------------------*/
.hover-overlay {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  backface-visibility: hidden;
  -webkit-transform: translateZ(0, 0, 0);
  -moz-transform: translateZ(0, 0, 0);
  -ms-transform: translateZ(0, 0, 0);
  -o-transform: translateZ(0, 0, 0);
  transform: translateZ(0, 0, 0);
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hover-trigger:hover .hover-overlay {
  opacity: 1;
  visibility: visible;
}

/* Hover Scale
-------------------------------------------------------*/
.hover-scale img {
  -webkit-transition: all 1.5s ease-out;
  -moz-transition: all 1.5s ease-out;
  -ms-transition: all 1.5s ease-out;
  -o-transition: all 1.5s ease-out;
  transition: all 1.5s ease-out;
}

.hover-scale:hover img {
  -webkit-transform: scale(1.1, 1.1);
  -moz-transform: scale(1.1, 1.1);
  -ms-transform: scale(1.1, 1.1);
  -o-transform: scale(1.1, 1.1);
  transform: scale(1.1, 1.1);
}

/* List Items
-------------------------------------------------------*/
.list-dividers > li {
  position: relative;
  padding: 9px 0;
  border-bottom: 1px solid #ebebeb;
}

.list-dividers > li:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.list-no-dividers > li {
  position: relative;
  padding: 5px 0;
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
  cursor: pointer;
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
  cursor: pointer;
}

.btn:after {
  cursor: pointer;
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
  cursor: pointer;
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
  background-color: #b79d82;
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
  background-color: #b79d82;
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
  border-color: #b79d82;
  background-color: #fff;
  outline: none;
  box-shadow: none !important;
}

input:not([type="checkbox"]):not([type="radio"]),
textarea {
  -webkit-appearance: none;
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
  background-color: #b79d82;
}

input.btn.btn-stroke,
button.btn.btn-stroke {
  border: 2px solid #ebebeb;
}

input.btn.btn-stroke:hover,
button.btn.btn-stroke:hover {
  background-color: #b79d82;
}

/*-------------------------------------------------------*/
/* Checkout
/*-------------------------------------------------------*/
#customer_details {
  padding-right: 30px;
}

@media only screen and (max-width: 991px) {
  #customer_details {
    padding-right: 15px;
  }
}

.ecommerce form #customer_details p {
  display: block;
  width: 100%;
  margin-bottom: 20px;
}

.ecommerce form .form-row:after {
  clear: both;
}

.ecommerce form #customer_details .form-row input,
.ecommerce form #customer_details .form-row select,
.ecommerce form #customer_details .form-row textarea {
  margin-bottom: 0;
}

.ecommerce form #customer_details .form-row textarea {
  min-height: 120px;
  line-height: 20px;
}

.ecommerce form #customer_details label {
  float: left;
  width: 20%;
  line-height: 39px;
  margin: 0;
}

@media only screen and (max-width: 767px) {
  .ecommerce form #customer_details label {
    width: 100%;
  }
}

.ecommerce .checkout #createaccount,
.ecommerce .checkout #ship-to-different-address-checkbox {
  float: none !important;
  width: auto !important;
}

.ecommerce .checkout label.checkbox {
  float: none !important;
  width: auto !important;
  line-height: 1.5 !important;
}

.ecommerce .create-account {
  margin-top: 30px;
}

.ecommerce .form-row.place-order {
  float: none;
  margin-top: 30px;
}

abbr.required {
  color: #f34937;
}

.ecommerce form #customer_details .form-row input,
.ecommerce form #customer_details .form-row select,
.ecommerce form #customer_details .form-row textarea {
  float: right;
  width: 80%;
  margin-bottom: 0;
}

@media only screen and (max-width: 767px) {
  .ecommerce form #customer_details .form-row input,
  .ecommerce form #customer_details .form-row select,
  .ecommerce form #customer_details .form-row textarea {
    float: none;
    width: 100%;
  }
}

abbr.required {
  color: #e7604a;
}

#billing_address_1_field {
  margin-bottom: 10px !important;
}

.ecommerce-shipping-fields {
  margin-bottom: 50px;
}

.order-review-wrap table {
  margin-bottom: 40px;
}

.ecommerce-checkout-review-order-table .order-total {
  font-size: 15px;
}

.order-review .payment_methods.methods li {
  padding-bottom: 10px;
}

.form-row.place-order input {
  width: 100%;
}

.payment_methods li {
  padding: 15px 0;
  border-bottom: 1px solid #ebebeb;
}

.payment_method_paypal img {
  margin-left: 15px;
}

.payment_box p {
  margin-top: 10px;
  margin-bottom: 0;
}

.payment_methods label {
  color: #000;
  vertical-align: middle;
  margin-bottom: 0;
}
</style>
