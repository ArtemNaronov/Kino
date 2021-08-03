<template>
  <div>
    <Header />
    <div class="content">
      <
      <div class="card" v-for="item in cardList" :key="item">
        <div class="CardTitle">{{ item.title }}</div>
        <div class="CardContent">
          <img :src="'/assets/img/testGal/' + item.image">
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
