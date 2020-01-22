<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe618;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe60c;</span>
      请输入你要搜索的城市/地点
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe608;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "homeheader",
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/varibles.styl"
.header
  display: flex
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  color: $nextGreen
  .header-left
    width: 0.64rem
    float: left
    .back-icon
      display: block
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    padding-left: .2rem
    margin-top: .12rem
    margin-left: .2rem
    background: $nextGreen
    border-radius: .1rem
    color: $moreGreen
  .header-right
    width: 1.24rem
    float: right
    text-align: center
    color: $nextGreen
    .arrow-icon
      margin-left: -0.08rem
</style>
