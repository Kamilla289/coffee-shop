<template>
  <main>
    <spinner v-if="isLoading" />
    <div v-else>
      <div class="banner" :class="pageName === 'CoffeeSection' ? 'coffepage-banner' : 'goodspage-banner'">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <nav-bar-component />
            </div>
          </div>
          <h1 class="title-big" v-if="product"> {{ product.title }} </h1>
        </div>
      </div>
      <section class="shop" v-if="product">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 offset-1">
              <img class="shop__girl" :src="product.image" alt="coffee_item">
            </div>
            <div class="col-lg-4">
              <div class="title">About it</div>
              <img class="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo">
              <div class="shop__point">
                <span>Country:</span>
                {{ product.country }}
              </div>
              <div class="shop__point">
                <span>Description:</span>
                {{ product.description }}
              </div>
              <div class="shop__point">
                <span>Price:</span>
                <span class="shop__point-price"> {{ " " + product.price }} </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import Spinner from "@/components/Spinner.vue";
import loadingMixin from "@/mixins/loadingMixin";

export default {
  components: {
    NavBarComponent,
    Spinner,
  },
  data() {
    return {
      product: null,
    }
  },
  mounted() {
    fetch(`http://localhost:3000/CoffeeSection/${this.$route.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.product = data;
      });
    this.fetchData(this.loadProduct);
  },
  destroyed() {
    this.product = null;
  },
  mixins: [loadingMixin],
  computed: {
    pageName() {
      return this.$route.name
    },
    card() {
      const pageGetter = this.pageName === 'CoffeeSection' ? 'getCoffeeById' : 'getGoodsById'
      return this.$store.getters[pageGetter](this.$route.params.id)
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  methods: {
    async loadProduct() {
      const response = await fetch(`http://localhost:3000/CoffeeSection/${this.$route.params.id}`);
      const data = await response.json();
    },
  },
};
</script>