<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <!-- Логотип -->
      <li class="header__item">
        <router-link :to="links[0].link">
          <img :src="`logo/${links[0].icon}`" :alt="links[0].icon" />
        </router-link>
      </li>

      <!-- Ссылки на страницы -->
      <page-link class="header__item" :link="links[1].link" :text="links[1].text" />
      <page-link class="header__item" :link="links[2].link" :text="links[2].text" />
      <page-link class="header__item" :link="links[3].link" :text="links[3].text" />
    </ul>
  </header>
</template>

<script>
import PageLink from "@/components/PageLink.vue";

export default {
  components: {
    PageLink,
  },
  data() {
    return {
      links: [
        {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
        {
          id: 1,
          text: "Our coffee",
          link: "/our-coffee",
        },
        {
          id: 2,
          text: "For your pleasure",
          link: "/pleasure",
        },
        {
          id: 3,
          text: "Contact us",
          link: "/contact",
        },
      ],
    };
  },
};
</script>
