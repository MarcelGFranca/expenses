<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Type</th>
        <th scope="col">Column heading</th>
        <th scope="col">Column heading</th>
        <th scope="col">Column heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-active">
        <th scope="row">Active</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
      <tr class="table-light">
        <th scope="row">Default</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'DashboardView',
  components: {
  }
}
</script>
