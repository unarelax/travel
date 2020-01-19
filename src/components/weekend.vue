<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
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
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl: require("../assets/images/weekend3.jpg"),
          title: "德纳里山",
          desc: "位于美国阿拉斯加州的中南部"
        },
        {
          id: "0002",
          imgUrl: require("../assets/images/weekend2.jpg"),
          title: "德纳里山",
          desc: "为北美洲的第一高峰。"
        },
        {
          id: "0003",
          imgUrl: require("../assets/images/weekend1.jpg"),
          title: "德纳里山",
          desc: "为北美洲的第一高峰。"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
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
