<template>
  <h1 :class="classItem">{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: {
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