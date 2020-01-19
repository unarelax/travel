<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl: require("../assets/images/recommend1.jpg"),
          title: "德纳里山",
          desc:
            "位于美国阿拉斯加州的中南部，是阿拉斯加山脉的中段，它海拔 6193 米，为北美洲的第一高峰。"
        },
        {
          id: "0002",
          imgUrl: require("../assets/images/recommend2.jpg"),
          title: "德纳里山",
          desc:
            "位于美国阿拉斯加州的中南部，是阿拉斯加山脉的中段，它海拔 6193 米，为北美洲的第一高峰。"
        },
        {
          id: "0003",
          imgUrl: require("../assets/images/recommend3.jpg"),
          title: "德纳里山",
          desc:
            "位于美国阿拉斯加州的中南部，是阿拉斯加山脉的中段，它海拔 6193 米，为北美洲的第一高峰。"
        },
        {
          id: "0004",
          imgUrl: require("../assets/images/recommend2.jpg"),
          title: "德纳里山",
          desc:
            "位于美国阿拉斯加州的中南部，是阿拉斯加山脉的中段，它海拔 6193 米，为北美洲的第一高峰。"
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
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    color: $moreGreen
    min-width: 0
    .item-title
      line-height: .56rem
      font-weight: bold
      ellipsis()
    .item-desc
      line-height: .4rem
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: $nextGreen
      padding: 0 .1rem
      border-radius: .06rem
      color: $moreGreen
      font-size: .26rem
</style>
