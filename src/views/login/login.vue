<template>
  <div id="login">
    <LoginBance />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginBance from './cpns/loain-bance.vue'

export default defineComponent({
  components: {
    LoginBance,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
#login {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: url('../../assets/img/67785155_p0.jpg');
}
</style>
