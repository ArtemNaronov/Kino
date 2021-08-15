<template>
  <div>
    <Header />
    <div class="banner">
      <img src="/assets/img/OhCKaQSzkAs.jpg" />
    </div>
    <div class="Games">
      <div v-for="item in gamesList" :class="GameSelected == item.id ? 'activeGame' : ''" :key="item.game" @click="GameChange(item.id)">
        <img :src="'/assets/img/images/' + item.image">
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="content">
      <div class="card" v-for="item in cardList" :key="item" v-if="item.game == GameSelected">
        <div class="CardTitle">{{ item.title }}</div>
        <div class="CardContent">
          <a :href='"/movie/" + item.id'>
            <img :src="'https://i.ytimg.com/vi/' + item.link + '/hqdefault.jpg'">
          </a>
        </div>
        <div class="CardFooter">{{item.desc}}</div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cardList: this.$store.state.card.cardList.card,
        gamesList: this.$store.state.games.gameList.games,
        GameSelected: 0,
      }
    },
    methods: {
      GameChange(value){
        this.GameSelected = value
      }
    }
  }
</script>
