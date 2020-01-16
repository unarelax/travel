<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiperimg" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "homeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        { id: "0001", imgUrl: require("../assets/images/banner1.png") },
        { id: "0002", imgUrl: require("../assets/images/banner2.jpg") }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/varibles.styl"
.wrapper >>> .swiper-pagination-bullet-active
  background: $nextGreen
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 31.25%
  .swiperimg
    width: 100%
</style>
