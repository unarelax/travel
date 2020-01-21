<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/varibles.styl"
@import "~@/assets/styles/mixins.styl"
.recommend-title
  line-height: .6rem
  background: $fontColor
  text-indent: .2rem
  color: $moreGreen
.item
  overflow: hidden
  height: 3.9rem
  .item-img
    width: 100%
    height: 2.5rem
  .item-info
    padding: .2rem
    color: $moreGreen
    min-width: 0
    .item-title
      line-height: .5rem
      font-weight: bold
      ellipsis()
    .item-desc
      line-height: .4rem
      ellipsis()
</style>
