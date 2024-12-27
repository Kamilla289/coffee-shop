<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <page-link classItem="header__item" :link="links.header.link">
        <img :src="`/logo/${links.header.icon}`" :alt="links.header.icon" />
      </page-link>

      <page-link v-for="link in links.other" :key="link.id" classItem="header__item" :link="link.link"
        :text="link.text" />
    </ul>
  </header>
</template>

<script>
import PageLink from "@/components/PageLink.vue";

export default {
  components: {
    PageLink,
  },
  computed: {
    links() {
      return this.$store.getters["getHeaderLinks"]
    }
  }
};
</script>
