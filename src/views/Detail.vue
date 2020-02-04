<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "../components/detail/Banner";
import DetailHeader from "../components/detail/Header";
import DetailList from "../components/detail/List";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      list: [
        {
          title: "成人票",
          children: [
            {
              title: "成人三馆联票",
              children: [
                {
                  title: "成人三馆联票 ---某连锁店销售"
                }
              ]
            }
          ]
        },
        {
          title: "学生票",
          children: [
            {
              title: "成人三馆联票"
            }
          ]
        },
        {
          title: "儿童票",
          children: [
            {
              title: "成人三馆联票"
            }
          ]
        },
        {
          title: "特惠票",
          children: [
            {
              title: "成人三馆联票"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
