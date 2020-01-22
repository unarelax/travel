<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe618;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/varibles.styl"
.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color $nextGreen
  background $bgColor
  .header-back
    position absolute
    top 0
    left 0
    width: 0.64rem
    text-align: center
    font-size: .4rem
    color $nextGreen
</style>
