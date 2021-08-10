<template>
  <div>
    <Header />
    <LogIn />
    <div class="Movie" v-if="cardList[this.product_id].link != undefined">
      <iframe width="100%" height="100%" :src="'https://www.youtube.com/embed/' + cardList[this.product_id].link" />
    </div>
  </div>
</template>
<script>
  import "@/static/assets/css/index.css";
  export default {
    data() {
      return {
        cardList: this.$store.state.card.cardList.card
      }
    },
    async asyncData({ $axios, route, store, redirect, res }) {
      try {
        let temp = route.params.id;
        let product_id = temp;
        let film = [];

        return {
          temp,
          product_id
        };
      }
      catch (error) {
        // res.statusCode = 404;
        // store.commit("set_show_error", true);
      }
    }
  }
</script>
