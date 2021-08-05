<template>
  <div>
    <Header />
    <div class="banner">
      <img src="/assets/img/OhCKaQSzkAs.jpg" />
    </div>
    <div class="content">
      <div class="card" v-for="item in cardList" :key="item">
        <div class="CardTitle">{{ item.title }}</div>
        <div class="CardContent">
          <a :href='"/movie/" + item.id'>
            <img :src="'/assets/img/testGal/' + item.image">
          </a>
        </div>
        <div class="CardFooter">{{item.desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cardList: this.$store.state.card.cardList.card
      }
    }
  }
</script>
