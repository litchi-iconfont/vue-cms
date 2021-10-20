<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './views/login/login.vue'
import Main from './views/main/Main.vue'
export default {
  components: {
    Login,
    Main,
  },
}
</script>

<style scoped>
#app {
  height: 100%;
}
</style>
