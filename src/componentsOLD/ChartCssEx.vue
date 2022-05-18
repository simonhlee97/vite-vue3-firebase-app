<template>
<div id="my-chart">

  <ul class="charts-css legend">
  </ul>

  <table class="charts-css bar show-labels show-4-secondary-axes">
    <caption> (Public) Golf Courses in Korea </caption>

    <thead>
      <tr>
        <th scope="col"> Country </th>
        <th scope="col"> Gold </th>
        <th scope="col"> Silver </th>
        <th scope="col"> Bronze </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style="--size: calc( 40 / 100 )"> $40K </td>
      </tr>
      <tr>
        <td style="--size: calc( 60 / 100 )"> $60K </td>
      </tr>
      <tr>
        <td style="--size: calc( 75 / 100 )"> $75K </td>
      </tr>
      <tr>
        <td style="--size: calc( 90 / 100 )"> $90K </td>
      </tr>
      <tr>
        <td style="--size: calc( 100 / 100 )"> $100K </td>
      </tr>
    </tbody>
  </table>

</div>
</template>

<script>

</script>

<style scoped>
#my-chart .bar {
  height: 300px;
  max-width: 600px;
  margin: 0 auto;
  background-image: url(path/to/your/logo.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100px 100px;
}
</style>

