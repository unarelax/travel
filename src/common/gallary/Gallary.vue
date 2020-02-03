<template>
  <div class="continer" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallery-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        autoplay: false,
        observer: true,
        observeParents: true
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.continer >>> .swiper-container
// 规定应该从父元素继承 overflow 属性的值
  overflow inherit
.continer
  display flex
  flex-direction column
  justify-content center
  position absolute
  overflow hidden
  z-index 999
  top 0
  left 0
  right 0
  bottom 0
  background #000
  .wrapper
    height 0
    width 100%
    padding-bottom 100%
    .gallery-img
      width 100%
    .swiper-pagination
      color #fff
      bottom: -1rem
</style>
