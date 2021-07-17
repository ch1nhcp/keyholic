<template>
  <div class="container">
    <div class="sidebar">
      <!-- <div class="logo">KEYHOLIC</div> -->
      <div class="menu-wrapper">
        <router-link to="/admin/products" class="menulink"
          >Products Management</router-link
        >
        <router-link to="/admin/users" class="menulink"
          >Users Management</router-link
        >
        <!-- <div class="menulink">Products</div> -->
        <!-- <div class="menulink">Users</div> -->
        <!-- <div class="menulink">Categories</div>
        <div class="menulink">Brands</div> -->
      </div>
    </div>
    <div class="dashboard">
      <!-- <h1>Hello admin</h1> -->
      <router-view />
    </div>
  </div>
</template>

<script>
// import ProductCrud from "./ProductCrud";
export default {
  components: {
    // ProductCrud,
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.menulink {
  margin-top: 3rem;
  font-weight: bold;
  cursor: pointer;
  /* font-size: 30px; */
}
.menulink:hover {
  background-color: #35BDFF;
  /* text-decoration: line-through; */
}
.sidebar {
  width: 10%;
  /* height: 100vh;*/
  /* background-color: red; */
  margin-top: 30px;
}
.menu-wrapper {
  width: 100%;
}
.dashboard {
  width: 90%;
  /* height: 100vh; */
}
</style>
