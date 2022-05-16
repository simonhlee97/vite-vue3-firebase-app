<script>
import TheHeader from './components/layout/TheHeader.vue'
import Hero from './components/Hero.vue'
import Navbar from './components/Navbar.vue'
import Card from './components/Card.vue'
import LoginModal from './components/LoginModal.vue'
import firebase from './utils/firebase'
export default {
  components: {
    Hero,
    Navbar,
    Card,
    LoginModal,
    TheHeader
  },
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {}
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
        console.log(user);
      } else {
        this.isLoggedIn = false
        this.authUser = {}
      }
    })
  }
}
</script>


<template>
  <div id="app">
    <!-- <Navbar @open-login-modal="isLoginOpen=true"/> -->
    <TheHeader />
    <main>
      <router-view :key="$route.fullPath"></router-view>
    </main>
    <!-- <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen=false" /> -->
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", Helvetica, sans-serif;
}

body {
  margin: 0;
}
</style>




