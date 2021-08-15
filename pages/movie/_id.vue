<template>
  <div>
    <Header />
    <LogIn />
    <breadcrumbs />
    <div class="Movie" v-if="cardList[this.product_id].link != undefined">
      <iframe width="100%" height="100%" :src="'https://www.youtube.com/embed/' + cardList[this.product_id].link" />
      <div class="playlist swiper-container swiper-wrapper">
        <div class="swiper-wrapper">
          <div v-for="card in cardList" :key="card" v-if="cardList[product_id].game == card.game" class="swiper-slide">
            <div class="video" :class="card.id == product_id ? 'active' : ''">
              <a :href='"/movie/" + card.id' v-if="card.id != product_id" style="width: 100%">
                <img :src="'https://i.ytimg.com/vi/' + card.link + '/hqdefault.jpg'" style="width: inherit;">
                <span>{{ card.title }}</span>
              </a>
              <div v-if="card.id == product_id" style="width: 100%">
                <img :src="'https://i.ytimg.com/vi/' + card.link + '/hqdefault.jpg'"  style="width: inherit;">
                <span>{{ card.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
  import "@/static/assets/css/index.css";
  import "@/static/swiper-bundle.css";
import breadcrumbs from '../../components/breadcrumbs.vue';
  export default {
  components: { breadcrumbs },
    data() {
      return {
        cardList: this.$store.state.card.cardList.card,
        gamesList: this.$store.state.games.gameList.games,
        film: [],
      }
    },
    async asyncData({ $axios, route, store, redirect, res }) {
      try {
        let temp = route.params.id;
        let product_id = temp;

        return {
          temp,
          product_id
        };
      }
      catch (error) {
        // res.statusCode = 404;
        // store.commit("set_show_error", true);
      }
    },
    mounted() {
      this.init_swiper();
    },
    methods: {
      init_swiper() {
        var mySwiper = new Swiper(".swiper-container", {
          speed: 1000,
          spaceBetween: 10,
          slidesPerView: "3",
        });
      }
    },
  }
</script>
