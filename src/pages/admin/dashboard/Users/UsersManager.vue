<template>
  <section class="home-section">
    <div
      class="text"
      style="text-align: center; font-size:40px; font-weight: bold;padding: 3rem"
    >
      User Manager
    </div>
    <div class="col-sm-6" style="float: right">
      <router-link
        to="/admin/users/add"
        class="btn btn-success"
        data-toggle="modal"
        ><i class="bx bx-add-to-queue"></i> <span>Add New</span></router-link
      >
    </div>
    <table width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Name</th>
          <th>Password</th>
          <th>Permission</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-title="ID">data</td>
          <td data-title="Email">data</td>
          <td data-title="Name">data</td>
          <td data-title="Password">data</td>
          <td data-title="Permission">data</td>
          <td>
            <router-link to="/admin/users/edit" class="edit" data-toggle="modal"
              ><i class="bx bx-edit"></i
            ></router-link>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
              ><i class="bx bx-trash"></i
            ></a>
          </td>
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
