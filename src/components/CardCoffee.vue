<template>
  <div :class="classItem">
    <img :src="`img/${image}`" :alt="image" />
    <div class="best__item-title">{{ title }}</div>
    <div class="shop__item-country">{{ country }}</div>
    <div class="best__item-price">{{ price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    country: {
      type: String,
      required: false
    },
    classItem: {
      type: String,
      required: false
    }
  }
}
</script>