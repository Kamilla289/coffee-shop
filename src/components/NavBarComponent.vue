<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <page-link classItem="header__item" :link="links.header.link">
        <img :src="`logo/${links.header.icon}`" :alt="links.header.icon" />
      </page-link>

      <page-link v-for="link in links.other" :key="link.id" classItem="header__item" :link="link.link"
        :text="link.text" />
    </ul>
  </header>
</template>

<script>
import PageLink from "@/components/PageLink.vue";
import { v4 as uuidv4 } from 'uuid';

export default {
  components: {
    PageLink,
  },
  data() {
    return {
      links: {
        header: {
          id: uuidv4(),
          link: "/",
          icon: "Logo.svg",
        },
        other: [
          {
            id: uuidv4(),
            text: "Our coffee",
            link: "/our-coffee",
          },
          {
            id: uuidv4(),
            text: "For your pleasure",
            link: "/pleasure",
          },
          {
            id: uuidv4(),
            text: "Contact us",
            link: "/contact",
          },
        ],
      }
    };
  },
};
</script>
