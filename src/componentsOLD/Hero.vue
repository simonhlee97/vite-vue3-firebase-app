<script>
export default {
  data() {
    return {
      hero: 0
    }
  }
}
</script>

<template>
  <div class="hero">
    <h1 class="site-name text-white text-6xl font-bold">PLAY GOLF KOREA</h1>
    <button @click="hero++">Learn More</button>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
.hero {
  background-image: url('https://images.unsplash.com/photo-1591701284171-b6b4af1ce95a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
}
.site-name {
  padding-top: 4em;
}
</style>