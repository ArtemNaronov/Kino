<template>
  <div class="Header">
    <!--<div class="logo">
      <img src='/assets/img/logo.png' />
    </div>-->
    <div class="title">
      <span>Кинотеатр</span>
      {{ this.$store.show_error }}
    </div>
    <div class="end" @click="setActiveForm()">
      <img src="/assets/img/account.png">
      <span>LogIn</span>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      setActiveForm() {
        this.$store.commit('set_activeForm', true)
      }
    }
  }
</script>
