<template>

<nav>
  <ul>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button class="mx-2" @click="$emit('open-login-modal')">Login</button>
  </ul>
</nav>

</template>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
}
li {
  margin: 0 auto;
}
</style>