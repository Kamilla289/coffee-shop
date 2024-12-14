<script>
import HeroView from "@/views/HeroView.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HeroView,
    FooterComponent,
  },
};
</script>

<template>
  <div id="wrapper">
    <hero-view />
    <footer-component />
  </div>
</template>

<style scoped>
</style>
