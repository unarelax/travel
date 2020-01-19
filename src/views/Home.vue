<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <HomeRecommend></HomeRecommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "../components/Header";
import HomeSwiper from "../components/swiper";
import HomeIcons from "../components/icons";
import HomeRecommend from "../components/recommend";
import HomeWeekend from "../components/weekend";
export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
};
</script>

<style></style>
