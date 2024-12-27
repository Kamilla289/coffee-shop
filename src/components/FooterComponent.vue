<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">

            <page-link classItem="footer__item" :link="links.footer.link">
              <img :src="`logo/${links.footer.icon}`" :alt="links.footer.icon" />
            </page-link>

            <page-link v-for="link in links.other" :key="link.id" classItem="footer__item" :link="link.link"
              :text="link.text" />

          </ul>
        </div>
      </div>
      <img class="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo" />
    </div>
  </footer>
</template>

<script>
import PageLink from "@/components/PageLink.vue";

export default {
  components: {
    PageLink,
  },
  computed: {
    links() {
      return this.$store.getters["getFooterLinks"]
    }
  }
};
</script>