<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">

            <page-link classItem="footer__item" :link="links.header.link">
              <img :src="`logo/${links.header.icon}`" :alt="links.header.icon" />
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
          icon: "Logo_black.svg",
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
          }
        ],
      }
    };
  },
};
</script>