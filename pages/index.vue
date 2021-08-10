<template>
  <div class="body">
    <div class="LogIn" :class="this.$store.getters['getActiveForm']? 'activeForm' : ''">
      <div class="LogInForm">
        <form v-if="this.tab == 'LogIn'">
          <div class="closePopUp" @click="$store.commit('set_activeForm', false)"><img alt="" class="closePopUpImg lazyLoad isLoaded" src="/assets/icons/Close.svg"></div>
          <span class="FormTitle">Авторизация</span>
          <div class="form">
            <span>Email</span>
            <input id="LogInEmail" type="email" />

            <span>Password</span>
            <input id="LogInPass" type="password" />
          </div>
          <input type="button" value="Войти">
        </form>
        <form v-if="this.tab == 'Registration'">
          <div class="closePopUp" @click="$store.commit('set_activeForm', false)"><img alt="" class="closePopUpImg lazyLoad isLoaded" src="/assets/icons/Close.svg"></div>
          <span class="FormTitle">Регистрация</span>
          <div class="form">
            <span>Email</span>
            <input id="RegEmail" type="email" />

            <span>Password</span>
            <input id="RegPass" type="password" />

            <span>Repeat the password</span>
            <input id="RegPass" type="password" />
          </div>
          <input type="button" value="Войти">
        </form>
        <span class="ChangeForm" @click="changeForm(tab == 'LogIn' ? 'Registration' : 'LogIn')">Нет аккаунта?</span>
      </div>

    </div>
    <Tutorial/>
  </div>
</template>

<script>

import "@/static/assets/css/index.css";

export default {
  data() {
    return{
      tab: "LogIn"
    }
  },
  methods: {
    changeForm: function (value){
      this.tab = value;
    }
  }
}
</script>
