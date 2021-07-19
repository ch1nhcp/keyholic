<template>
  <section class="home-section">
    <div
      class="text"
      style="text-align: center; font-size:40px; font-weight: bold;padding: 3rem"
    >
      Product Manager
    </div>
    <table width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Short_description</th>
          <th>Description</th>
          <th>Price</th>
          <th>Sale_price</th>
          <th>Brand_id</th>
          <th>Category_id</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-title="ID">1</td>
          <td data-title="Name">data</td>
          <td data-title="Image">data</td>
          <td data-title="Short_description">data</td>
          <td data-title="Description">data</td>
          <td data-title="Price">data</td>
          <td data-title="Sale_price">data</td>
          <td data-title="Brand_id">data</td>
          <td data-title="Category_id">data</td>
          <td>
            <a href="#editEmployeeModal" class="edit" data-toggle="modal"
              ><i class="bx bx-edit"></i
            ></a>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
              ><i class="bx bx-trash"></i
            ></a>
          </td>
        </tr>
        <tr>
          <td data-title="Name">Shyam</td>
          <td data-title="ID">101</td>
          <td data-title="designation">Quality Analyst</td>
        </tr>
        <tr>
          <td data-title="Name">Mark</td>
          <td data-title="ID">102</td>
          <td data-title="designation">Software Engineer</td>
        </tr>
        <tr>
          <td data-title="Name">Bill</td>
          <td data-title="ID">104</td>
          <td data-title="designation">Quality Analyst</td>
        </tr>
        <tr>
          <td data-title="Name">Arjun</td>
          <td data-title="ID">105</td>
          <td data-title="designation">Human Resources</td>
        </tr>
        <tr>
          <td data-title="Name">Pratyush</td>
          <td data-title="ID">106</td>
          <td data-title="designation">Software Engineer</td>
        </tr>
        <tr>
          <td data-title="Name">Anant</td>
          <td data-title="ID">101</td>
          <td data-title="designation">Administrative Dept</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Table */
table tr td,
table tr td {
  text-align: center;
}
@media only screen and (max-width: 500px) {
  table,
  head,
  tbody,
  th,
  td,
  tr {
    display: block;
  }
  thead tr {
    display: none;
  }
  tr {
    border: 1px solid #ccc;
  }
  td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
    white-space: normal;
    text-align: left;
    min-height: 30px;
    overflow: hidden;
    word-break: break-all;
  }
  td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    text-align: left;
    font-weight: bold;
  }
  td:before {
    content: attr(data-title);
  }
}
</style>
