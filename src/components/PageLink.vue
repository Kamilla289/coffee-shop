<template>
  <li :class="classItem">
    <router-link :to="link">{{ text }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    classItem: {
      type: String,
      required: false
    }
  }
}
</script>