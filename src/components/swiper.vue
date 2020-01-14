<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiperimg" :src="item.imgUrl" />
      </swiper-slide>
      <swiper-slide>
        <img class="swiperimg" src="../assets/images/1.png" />
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
        pagination: ".swiper-pagination"
      },
      swiperList: [{
        id: "0001",
        imgUrl: "../assets/images/1.png"
      },{
        id:"0002",
        imgUrl: "../assets/images/2.jpg"
        }]
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