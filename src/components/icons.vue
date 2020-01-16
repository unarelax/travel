<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-imgcontent" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "homeicons",
  data() {
    return {
      iconsList: [
        {
          id: "0001",
          imgUrl: require("../assets/images/icon1.png"),
          desc: "hellosdghfshjgksj"
        },
        {
          id: "0002",
          imgUrl: require("../assets/images/icon2.png"),
          desc: "hello"
        },
        {
          id: "0003",
          imgUrl: require("../assets/images/icon3.png"),
          desc: "hello"
        },
        {
          id: "0004",
          imgUrl: require("../assets/images/icon4.png"),
          desc: "hello"
        },
        {
          id: "0005",
          imgUrl: require("../assets/images/icon5.png"),
          desc: "hello"
        },
        {
          id: "0006",
          imgUrl: require("../assets/images/icon6.png"),
          desc: "hello"
        },
        {
          id: "0007",
          imgUrl: require("../assets/images/icon7.png"),
          desc: "hello"
        },
        {
          id: "0008",
          imgUrl: require("../assets/images/icon8.png"),
          desc: "hello"
        },
        {
          id: "0009",
          imgUrl: require("../assets/images/icon1.png"),
          desc: "hello"
        },
        {
          id: "0001",
          imgUrl: require("../assets/images/icon1.png"),
          desc: "hello"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      if (this.iconsList) {
        this.iconsList.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
      }
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
@import "~styles/mixins.styl"
.icons
  margin: 0.1rem
  overflow: hidden
  height: 0
  width: 100%
  padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    height: 0
    width: 25%
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .25rem
      .icon-imgcontent
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      //line-height: .44rem
      text-align: center
      font-weight: bold
      color: $bgColor
      ellipsis()
</style>
