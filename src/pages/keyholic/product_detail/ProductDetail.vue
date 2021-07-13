<template>
  <!-- product-detail content -->
  <div class="bg-main">
    <div class="container">
      <div class="box">
        <div class="breadcumb">
          <a href="#">home</a>
          <span><i class="bx bxs-chevrons-right"></i></span>
          <a href="#">all products</a>
          <span><i class="bx bxs-chevrons-right"></i></span>
          <a href="#">Mechanical Keyboard</a>
        </div>
      </div>
      <div class="row product-row">
        <div class="col-5 col-md-12">
          <div class="product-img" id="product-img">
            <img
              src="../../../assets/4.jpg"
              alt=""
            />
          </div>
          <div class="box">
            <div class="product-img-list">
              <div class="product-img-item">
                <img
                  src="../../../assets/3.jpg"
                  alt=""
                />
              </div>
              <div class="product-img-item">
                <img
                  src="../../../assets/4.jpg"
                  alt=""
                />
              </div>
              <div class="product-img-item">
                <img
                  src="../../../assets/2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-7 col-md-12">
          <div class="product-info">
            <h1>Mechanical Keyboard</h1>
            <div class="product-info-detail">
              <span class="product-info-detail-title">Brand:</span>
              <a href="#">Leopold</a>
            </div>
            <div class="product-info-detail">
              <span class="product-info-detail-title">Rated:</span>
              <span class="rating">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
              </span>
            </div>
            <p class="product-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              libero alias officiis dolore doloremque eveniet culpa dignissimos,
              itaque, cum animi excepturi sed veritatis asperiores soluta, nisi
              atque quae illum. Ipsum.
            </p>
            <div class="product-info-price">$2345</div>
            <div class="product-quantity-wrapper">
              <span class="product-quantity-btn">
                <i class="bx bx-minus"></i>
              </span>
              <span class="product-quantity">1</span>
              <span class="product-quantity-btn">
                <i class="bx bx-plus"></i>
              </span>
            </div>
            <div>
              <button class="btn-flat btn-hover">add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box-header">description</div>
        <div class="product-detail-description">
          <button
            class="btn-flat btn-hover btn-view-description"
            id="view-all-description"
          >
            view all
          </button>
          <div class="product-detail-description-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              laudantium obcaecati odit dolorem, doloremque accusamus esse neque
              ipsa dignissimos saepe quisquam tempore perferendis deserunt
              sapiente! Recusandae illum totam earum ratione. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Aliquam incidunt maxime
              rerum reprehenderit voluptas asperiores ipsam quas consequuntur
              maiores, at odit obcaecati vero sunt! Reiciendis aperiam
              perferendis consequuntur odio quas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ut quaerat eum veniam doloremque
              nihil repudiandae odio ratione culpa libero tempora. Expedita, quo
              molestias. Minus illo quis dignissimos aliquid sapiente error!
            </p>
            <!-- <img
              src="./images/JBL_Quantum_400_Product Image_Hero 02.png"
              alt=""
            /> -->
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              accusantium officia, quae fuga in exercitationem aliquam labore ex
              doloribus repellendus beatae facilis ipsam. Veritatis vero
              obcaecati iste atque aspernatur ducimus. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Repellat quam praesentium id
              sit amet magnam ad, dolorum, cumque iste optio itaque expedita
              eius similique, ab adipisci dicta. Quod, quibusdam quas. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Odit, in
              corrupti ipsam sint error possimus commodi incidunt suscipit sit
              voluptatum quibusdam enim eligendi animi deserunt recusandae earum
              natus voluptas blanditiis?
            </p>
            <!-- <img
              src="./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png"
              alt=""
            /> -->
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              ullam quam fugit veniam ipsum recusandae incidunt, ex ratione,
              magnam labore ad tenetur officia! In, totam. Molestias sapiente
              deserunt animi porro?
            </p>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="box-header">related products</div>
        <div class="row" id="related-products">
          <!-- Related products -->
          <div class="col-4 col-md-6 col-sm-12">
            <div class="product-card">
              <div class="product-card-img">
                <img src="../../../assets/3.jpg" alt="" />
                <img src="../../../assets/4.jpg" alt="" />
              </div>
              <div class="product-card-info">
                <div class="product-btn">
                  <a
                    href="./product-detail.html"
                    class="btn-flat btn-hover btn-shop-now"
                    >shop now</a
                  >
                  <button class="btn-flat btn-hover btn-cart-add">
                    <i class="bx bxs-cart-add"></i>
                  </button>
                </div>
                <div class="product-card-name">Mechanical Keyboard</div>
                <div class="product-card-price">
                  <span><del>$300</del></span>
                  <span class="curr-price">$200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end product-detail content -->
</template>

<script>
import "../../../css/app.css";
import "../../../css/grid.css";
export default {
  mounted() {
    // Hàm bấm vào ảnh để chuyển ảnh phụ sang khung ảnh chính
    document.querySelectorAll(".product-img-item").forEach((e) => {
      e.addEventListener("click", () => {
        let img = e.querySelector("img").getAttribute("src");
        document.querySelector("#product-img > img").setAttribute("src", img);
      });
    });

    // Hàm show/hide phần product detail
    document
      .querySelector("#view-all-description")
      .addEventListener("click", () => {
        let content = document.querySelector(
          ".product-detail-description-content"
        );
        content.classList.toggle("active");
        document.querySelector("#view-all-description").innerHTML =
          content.classList.contains("active") ? "view less" : "view all";
      });
  },
};
</script>

<style>
</style>