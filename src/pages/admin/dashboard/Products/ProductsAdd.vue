<template>
  <div class="container" style="margin: 0 auto;">
    <form id="contact" action="" method="post">
      <h3 style="margin-bottom:2rem">Add Product Form</h3>
      <!-- <h4>Contact us today, and get reply with in 24 hours!</h4> -->
      <fieldset>
        <input placeholder="ID" type="text" tabindex="1" autofocus />
      </fieldset>
      <fieldset>
        <input placeholder="Name *" type="text" tabindex="2" required />
      </fieldset>
      <fieldset>
        <input placeholder="Image *" type="text" tabindex="3" required />
      </fieldset>
      <fieldset>
        <input
          placeholder="Short_description *"
          type="text"
          tabindex="4"
          required
        />
      </fieldset>
      <fieldset>
        <textarea placeholder="Description *" tabindex="5" required></textarea>
      </fieldset>
      <fieldset>
        <input placeholder="Price *" type="number" tabindex="2" required />
      </fieldset>
      <fieldset>
        <input placeholder="Sale price *" type="number" tabindex="2" required />
      </fieldset>
      <fieldset>
        <label for="cars">Choose a brand:</label>
        <select name="brands" id="brands" style="width:150px;float: right;">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </select>
      </fieldset>
      <fieldset>
        <label for="cars">Choose a Category:</label>
        <select
          name="Categories"
          id="Categories"
          style="width:150px;float: right;"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </select>
      </fieldset>
      <fieldset>
        <button
          name="submit"
          type="submit"
          id="contact-submit"
          data-submit="...Sending"
          style="margin-top: 1rem"
        >
          Submit
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  /* font-smoothing: antialiased; */
  text-rendering: optimizeLegibility;
}

.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#contact input[type="text"],
#contact input[type="number"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Open Sans", Helvetica, Arial, sans-serif;
}

#contact {
  background: #f9f9f9;
  padding: 25px;
  margin: 50px 0;
}

#contact h3 {
  color: #35bdff;
  display: block;
  font-size: 30px;
  font-weight: 400;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="number"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #35bdff;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #2da1db;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #999;
}
::-webkit-input-placeholder {
  color: #888;
}
:-moz-placeholder {
  color: #888;
}
::-moz-placeholder {
  color: #888;
}
:-ms-input-placeholder {
  color: #888;
}
</style>
