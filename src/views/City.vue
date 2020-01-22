<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from "@/components/city/Header";
import CitySearch from "@/components/city/Search";
export default {
  name: "city",
  components: {
    CityHeader,
    CitySearch
  }
};
</script>

<style lang="stylus" scoped></style>
