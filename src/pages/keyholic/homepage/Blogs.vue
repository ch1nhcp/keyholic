<template>
  <!-- blogs -->
  <div class="section">
    <div class="container">
      <div class="section-header">
        <h2>latest blog</h2>
      </div>
      <div class="blog">
        <div class="blog-img">
          <img
            src="https://images.unsplash.com/photo-1555532538-dcdbd01d373d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1431&q=80"
            alt=""
          />
        </div>
        <div class="blog-info">
          <div class="blog-title">Lorem ipsum dolor sit amet</div>
          <div class="blog-preview">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
            eligendi dolore. Sapiente omnis numquam mollitia asperiores animi,
            veritatis sint illo magnam, voluptatum labore, quam ducimus! Nisi
            doloremque praesentium laudantium repellat.
          </div>
          <router-link to="/blog" class="btn-flat btn-hover"
            >read more</router-link
          >
        </div>
      </div>
      <div class="blog row-revere">
        <div class="blog-img">
          <img
            src="https://images.unsplash.com/photo-1613297294358-c12089606e42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
            alt=""
          />
        </div>
        <div class="blog-info">
          <div class="blog-title">Lorem ipsum dolor sit amet</div>
          <div class="blog-preview">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
            eligendi dolore. Sapiente omnis numquam mollitia asperiores animi,
            veritatis sint illo magnam, voluptatum labore, quam ducimus! Nisi
            doloremque praesentium laudantium repellat.
          </div>
          <router-link to="/blog" class="btn-flat btn-hover"
            >read more</router-link
          >
        </div>
      </div>
      <div class="section-footer">
        <router-link to="/blog" class="btn-flat btn-hover"
          >View all</router-link
        >
      </div>
    </div>
  </div>
  <!-- end blogs -->
</template>

<script>
export default {};
</script>

<style scoped>
.section {
  padding: 0 !important;
}
</style>
