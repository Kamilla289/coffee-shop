<script>
import HeroView from "@/views/HeroView.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    HeroView,
    FooterComponent, // Футер остаётся общим для всех страниц
  },
};
</script>

<template>
  <div id="wrapper">
    <router-view />
    <!-- Динамическое отображение компонентов -->
    <footer-component />
    <!-- Футер всегда виден -->
  </div>
</template>
