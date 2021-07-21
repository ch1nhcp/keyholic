<template>
  <!-- hero section -->
  <div class="hero">
    <div class="slider">
      <div class="container">
        <!-- slide item -->
        <div class="slide active">
          <div class="info">
            <div class="info-content">
              <h3 class="top-down">LEOPOLD FC750R PD</h3>
              <h2 class="top-down trans-delay-0-2">Next-gen design</h2>
              <p class="top-down trans-delay-0-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati dolor commodi dignissimos culpa, eaque eos
                necessitatibus possimus veniam, cupiditate rerum deleniti?
                Libero, ducimus error? Beatae velit dolore sint explicabo!
                Fugit.
              </p>
              <div class="top-down trans-delay-0-6">
                <button class="btn-flat btn-hover">
                  <!-- <span>shop now</span> -->
                  <router-link
                    to="/productdetail?name=Leopold%20FC750R%20PD%20White%20DarkGray"
                    >shop now</router-link
                  >
                </button>
              </div>
            </div>
          </div>
          <div class="img top-down">
            <img src="../../../assets/4.jpg" alt="" />
          </div>
        </div>
        <!-- end slide item -->
        <!-- slide item -->
        <div class="slide">
          <div class="info">
            <div class="info-content">
              <h3 class="top-down">LEOPOLD FC980M</h3>
              <h2 class="top-down trans-delay-0-2">Ipsum dolor</h2>
              <p class="top-down trans-delay-0-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                optio, voluptatum aperiam nobis quis maxime corporis porro alias
                soluta sunt quae consectetur aliquid blanditiis perspiciatis
                labore cumque, ullam, quam eligendi!
              </p>
              <div class="top-down trans-delay-0-6">
                <button class="btn-flat btn-hover">
                  <!-- <span>shop now</span> -->
                  <router-link
                    to="/productdetail?name=Leopold%20FC980M%20PD%20White%20Grey"
                    >shop now</router-link
                  >
                </button>
              </div>
            </div>
          </div>
          <div class="img right-left">
            <img
              src="https://images.unsplash.com/photo-1614921003749-e04bd7f27a1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
              alt=""
            />
          </div>
        </div>
        <!-- end slide item -->
        <!-- slide item -->
        <div class="slide">
          <div class="info">
            <div class="info-content">
              <h3 class="top-down">Keychron K8</h3>
              <h2 class="top-down trans-delay-0-2">Consectetur Elit</h2>
              <p class="top-down trans-delay-0-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo aut fugiat, libero magnam nemo inventore in tempora
                beatae officiis temporibus odit deserunt molestiae amet quam,
                asperiores, iure recusandae nulla labore!
              </p>
              <div class="top-down trans-delay-0-6">
                <button class="btn-flat btn-hover">
                  <!-- <span>shop now</span> -->
                  <router-link to="/productdetail?name=Keychron%20K8%20(2)"
                    >shop now</router-link
                  >
                </button>
              </div>
            </div>
          </div>
          <div class="img left-right">
            <img src="../../../assets/3.jpg" alt="" />
          </div>
        </div>
        <!-- end slide item -->
      </div>
      <!-- slider controller -->
      <button class="slide-controll slide-next">
        <i class="bx bxs-chevron-right"></i>
      </button>
      <button class="slide-controll slide-prev">
        <i class="bx bxs-chevron-left"></i>
      </button>
      <!-- end slider controller -->
    </div>
  </div>
  <!-- end hero section -->
</template>

<script>
import "../../../css/app.css";
import "../../../css/grid.css";
export default {
  mounted() {
    let slide_index = 0;
    let slides = document.querySelectorAll(".slide");

    const hideAllSlide = () => {
      slides.forEach((e) => {
        e.classList.remove("active");
      });
    };

    const showSlide = () => {
      hideAllSlide();
      slides[slide_index].classList.add("active");
    };

    const nextSlide = () =>
      (slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1);

    const prevSlide = () =>
      (slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1);

    document.querySelector(".slide-next").addEventListener("click", () => {
      nextSlide();
      showSlide();
    });

    document.querySelector(".slide-prev").addEventListener("click", () => {
      prevSlide();
      showSlide();
    });
  },
};
</script>

<style></style>
