<template>
  <div class="list">
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <!-- 递归 -->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/styles/varibles.styl"
.item-title
  line-height: .8rem
  font-size .32rem
  padding 0 .2rem
  .item-title-icon
    position relative
    top .12rem
    display inline-block
    width .36rem
    height .36rem
    background: url(../../../public/images/bill.png) no-repeat;
.item-children
  padding 0 .2rem
</style>
