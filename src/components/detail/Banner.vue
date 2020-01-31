<template>
  <div class="banner">
    <img class="banner-img" src="../../../public/images/detailBanner.jpg" />
    <div class="banner-info">
      <div class="banner-title">大连盛亚海洋世界（AAAAA景区）</div>
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe630;</span>
        39
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBanner"
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/varibles.styl"
import
.banner
  position relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color $fontColor
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      height .32rem
      line-height .32rem
      margin-top .14rem
      padding 0 .4rem
      font-size .24rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      .banner-icon
        font-size .24rem
</style>
