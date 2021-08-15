<template>
    <div class="LogIn" :class="this.$store.getters['getActiveForm']? 'activeForm' : ''">
      <div class="LogInForm">
        <form v-if="this.tab == 'LogIn'">
          <div class="closePopUp" @click="setActiveForm()"><img alt="" class="closePopUpImg lazyLoad isLoaded" src="/assets/icons/Close.svg"></div>
          <span class="FormTitle">Авторизация</span>
          <div class="form">
            <span>Email</span>
            <input id="LogInEmail" type="email" />

            <span>Пароль</span>
            <input id="LogInPass" type="password" />
          </div>
          <input type="button" value="Войти">
        </form>
        <form v-if="this.tab == 'Registration'">
          <div class="closePopUp" @click="setActiveForm()"><img alt="" class="closePopUpImg lazyLoad isLoaded" src="/assets/icons/Close.svg"></div>
          <span class="FormTitle">Регистрация</span>
          <div class="form">

            <span>Имя</span>
            <input id="RegName" type="text" />

            <span>Email</span>
            <input id="RegEmail" type="email" />

            <span>Пароль</span>
            <input id="RegPass" type="password" />

            <span>Повторите пароль</span>
            <input id="RegPass" type="password" />
          </div>
          <input type="button" value="Войти">
        </form>
        <span class="ChangeForm" v-html="tab == 'LogIn' ? 'Нет аккаунта?' : 'Есть аккаунт?'" @click="changeForm(tab)"></span>
      </div>

    </div>
</template>
<script>
export default {
  data() {
    return{
      tab: "LogIn"
    }
  },
  methods: {
    changeForm: function (value){
      this.tab = value == 'LogIn' ? 'Registration' : 'LogIn';

    },
    setActiveForm() {
      this.$store.commit('set_activeForm', false)
    }
  }
}
</script>
