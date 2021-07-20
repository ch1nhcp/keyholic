<template>
  <!-- promotion section -->
  <div class="promotion">
    <div class="row">
      <div class="col-4 col-md-12 col-sm-12">
        <div class="promotion-box">
          <div class="text">
            <h3>Keyboard</h3>
            <button class="btn-flat btn-hover">
              <router-link to="/products?category=keyboard">
                <span>shop collection</span>
              </router-link>
            </button>
          </div>
          <img src="../../../assets/7.png" alt="" />
        </div>
      </div>
      <div class="col-4 col-md-12 col-sm-12">
        <div class="promotion-box">
          <div class="text">
            <h3>Keycap</h3>
            <button class="btn-flat btn-hover">
              <router-link to="/products?category=keycap">
                <span>shop collection</span>
              </router-link>
            </button>
          </div>
          <img src="../../../assets/6.png" alt="" />
        </div>
      </div>
      <div class="col-4 col-md-12 col-sm-12">
        <div class="promotion-box">
          <div class="text">
            <h3>Palm rest</h3>
            <button class="btn-flat btn-hover">
              <router-link to="/products?category=palmrest">
                <span>shop collection</span>
              </router-link>
            </button>
          </div>
          <img src="../../../assets/8.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!-- end promotion section -->
</template>

<script>
export default {};
</script>

<style></style>
