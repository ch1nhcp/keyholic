<template>
  <div class="form-wrapper">
    <span style="color:red">{{ alert }}</span>
    <span style="color:green">{{ success }}</span>
    <h1>Sign Up</h1>
    <form @submit.prevent="onregister">
      <div class="form-item">
        <label for="username"></label>
        <input
          type="username"
          name="username"
          v-model="username"
          required="required"
          placeholder="Username"
        />
      </div>
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
      <div class="form-item">
        <label for="confirm password"></label>
        <input
          type="password"
          v-model="passwordconfirm"
          name="passwordconfirm"
          required="required"
          placeholder="Confirm password"
        />
      </div>
      <div class="button-panel">
        <input type="submit" class="button" title="Sign Up" value="Sign Up" />
      </div>
    </form>
    <div class="form-footer">
      <p>
        <router-link to="/signin">Already have an account?</router-link>
      </p>
      <!-- <p><a href="#">Forgot password?</a></p> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "signup",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordconfirm: "",
      alert: "",
      success: "",
    };
  },
  computed: {
    ...mapState("user", ["regiser", "is"]),
  },
  methods: {
    async onregister() {
      var data = {};
      var username = this.username;
      var email = this.email;
      var password = this.password;
      var passwordconfirm = this.passwordconfirm;
      if (
        username == "" ||
        email == "" ||
        password == "" || 
        passwordconfirm == "" ||
        password != passwordconfirm
      ) {
        alert("Value is not valid!");
        return;
      }
      data.Name = this.username;
      data.Email = this.email;
      data.Password = this.password;
      await this.$store.dispatch("user/signup", data);
      console.log(this.regiser);
      if (this.regiser == true) {
        this.success = "Register success";
        this.alert = "";
        return;
      }
      this.success = "";
      this.alert = "user exist";
    },
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
