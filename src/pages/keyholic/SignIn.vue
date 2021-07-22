<template>
  <div class="user" v-if="is == true">
    <div class="user_item left">
      <div>
        <span>ID:{{ users.Id }}</span>
      </div>
      <div>
        <span>Hello {{ users.Name }} !</span>
      </div>
      <span>Email: {{ users.Email }}</span>
    </div>
    <div class="user_item right">
      <h3 style="text-align:center">history</h3>
      <table class="table">
        <tr>
           <th>Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Total Product</th>
          <th>Total Price</th>
        </tr>
        <tr v-for="(item,index) in data" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.Name}}</td>
          <td>{{item.Phone}}</td>
          <td>{{item.Address}}</td>
          <td>{{item.TotalProducts}}</td>
          <td>${{item.TotalPrice}}.00</td>
        </tr>
      </table>
      <div @click="reload" class="loadmore"><button>Show all</button></div>

    </div>
  </div>

  <div class="form-wrapper" v-if="is == false">
    <!-- {{users}} -->
    <h1>Sign In</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-item">
        <label for="email"></label>
        <input
          type="email"
          name="email"
          v-model="email"
          required="required"
          placeholder="Email Address"
        />
      </div>
      <div class="form-item">
        <label for="password"></label>
        <input
          type="password"
          name="password"
          v-model="password"
          required="required"
          placeholder="Password"
        />
      </div>
      <div class="button-panel">
        <input type="submit" class="button" title="Sign In" value="Sign In" />
      </div>
    </form>
    <div class="form-footer">
      <p><router-link to="/signup">Create an account</router-link></p>
      <!-- <p><a href="#">Forgot password?</a></p> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { GetData } from "../../service/service";
export default {
  name: "signin",
  data() {
    return {
      email: "",
      password: "",
      success: "",
      data:[]
    };
  },
  methods: {
    async onSubmit() {
      //  this.$store.commit("updateUser", "aaa")
      var data = {};
      data.Email = this.email;
      data.Password = this.password;
      await this.$store.dispatch("user/login", data);
      if (this.is == true) {
        this.$router.push({ path: "/" });
      } else {
        alert("wrong user or password");
      }
    },
    async reload(){
   var respond = await GetData("/order/"+this.users.Id)
    this.data = await respond
    },
  },
  computed: {
    ...mapState("user", ["users", "is"]),
  },
   async created() {
    var respond = await GetData("/order/"+this.users.Id)
    console.log(respond)
  },
};
</script>

<style scoped>
/* Fonts */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);

/* fontawesome */
@import url(http://weloveiconfonts.com/api/?family=fontawesome);
[class*="fontawesome-"]:before {
  font-family: "FontAwesome", sans-serif;
}

/* Simple Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* body */
body {
  background: #e9e9e9;
  color: #5e5e5e;
  font: 400 87.5%/1.5em "Open Sans", sans-serif;
}
.user {
  display: flex;
  width: 80%;
  margin: 0 auto;
}
.table{
  width: 100%;
}
.loadmore{
  text-align: center;
}
.user_item.left {
  width: 30%;
}
.user_item.right {
  width: 70%;
}
/* Form Layout */
.form-wrapper {
  background: #fafafa;
  margin: 3em auto;
  padding: 0 1em;
  max-width: 370px;
}

h1 {
  text-align: center;
  padding: 1em 0;
}

form {
  padding: 0 1.5em;
}

.form-item {
  margin-bottom: 0.75em;
  width: 100%;
}

.form-item input {
  background: #fafafa;
  border: none;
  border-bottom: 2px solid #e9e9e9;
  color: #666;
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  height: 50px;
  transition: border-color 0.3s;
  width: 100%;
}

.form-item input:focus {
  border-bottom: 2px solid #c0c0c0;
  outline: none;
}

.button-panel {
  margin: 2em 0 0;
  width: 100%;
}

.button-panel .button {
  background: #35bdff;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 50px;
  font-family: "Open Sans", sans-serif;
  font-size: 1.2em;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.3s ease-in-out;
  width: 100%;
}

.button:hover {
  background: #00a5f8;
}

.form-footer {
  font-size: 1em;
  padding: 2em 0;
  text-align: center;
}

.form-footer a {
  color: #8c8c8c;
  text-decoration: none;
  transition: border-color 0.3s;
}

.form-footer a:hover {
  border-bottom: 1px dotted #8c8c8c;
}
</style>
