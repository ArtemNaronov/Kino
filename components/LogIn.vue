<template>
  <div class="LogIn activeForm" v-if="activeForm" @click="setActiveForm()">
    <div class="LogInForm" @click.stop>
      <form>
        <div class="closePopUp" @click="setActiveForm()"><img alt="" class="closePopUpImg lazyLoad isLoaded"
            src="/assets/icons/Close.svg"></div>
        <span class="FormTitle">{{ tab == 'LogIn' ? 'Авторизация' : 'Регистрация' }}</span>
        <div class="form">
          <div v-if="tab == 'LogIn'">
            <span>Email</span>
            <input id="LogInEmail" type="email" />
          </div>
          <div v-if="tab == 'LogIn'">
            <span>Пароль</span>
            <input id="LogInPass" type="password" />
          </div>
          <div v-if="tab == 'Registration'">
            <span>Имя</span>
            <input id="RegName" type="text" />
          </div>
          <div v-if="tab == 'Registration'">
            <span>Email</span>
            <input id="RegEmail" type="email" />
          </div>
          <div v-if="tab == 'Registration'">
            <span>Пароль</span>
            <input id="RegPass" type="password" />
          </div>
          <div v-if="tab == 'Registration'">
            <span>Повторите пароль</span>
            <input id="RegPass" type="password" />
          </div>
        </div>
        <input type="button" :value="tab == 'LogIn' ? 'Войти' : 'Регистрация'">
      </form>

      <span class="ChangeForm" v-html="tab == 'LogIn' ? 'Нет аккаунта?' : 'Есть аккаунт?'"
        @click="changeForm(tab)"></span>
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
  },
  computed: {
    activeForm() {
      return this.$store.getters['getActiveForm']
    }
  }
}
</script>
