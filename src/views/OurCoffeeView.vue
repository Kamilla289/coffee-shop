<template>
  <main>
    <spinner v-if="isLoading" />
    <div v-else>
      <div class="banner coffepage-banner">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <nav-bar-component />
            </div>
          </div>
          <title-header classItem="title-big" :title="title[0].text" />
        </div>
      </div>
      <section class="shop">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 offset-2">
              <img class="shop__girl" src="/img/coffee_girl.jpg" alt="girl" />
            </div>
            <div class="col-lg-4">
              <div class="title">About our beans</div>
              <img class="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo" />
              <div class="shop__text">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible.
                <br /><br />
                Afraid at highly months do things on at. Situation recommend
                objection do intention<br />
                so questions. <br />
                As greatly removed calling pleased improve an. Last ask him cold
                feel<br />
                met spot shy want. Children me laughing we prospect answered
                followed. At it went<br />
                is song that held help face.
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="row">
            <div class="col-lg-4 offset-2">
              <form action="#" class="shop__search">
                <label class="shop__search-label" for="filter">Looking for</label>
                <input id="filter" type="text" placeholder="start typing here..." class="shop__search-input"
                  @input="onSearch($event)" />
              </form>
            </div>
            <div class="col-lg-4">
              <div class="shop__filter">
                <div class="shop__filter-label" @click="resetFilters">Or filter</div>
                <div class="shop__filter-group">
                  <button class="shop__filter-btn" @click="onSort('Brazil')">Brazil</button>
                  <button class="shop__filter-btn" @click="onSort('Kenya')">Kenya</button>
                  <button class="shop__filter-btn" @click="onSort('Columbia')">Columbia</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="shop__wrapper">
                <card-coffee v-for="card in cardStore.coffee" :key="card.id" classItem="shop__item" :card="card"
                  @onNavigate="navigate" />
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
import CardCoffee from "@/components/CardCoffee.vue";
import TitleHeader from "@/components/TitleHeader.vue";
import { navigate } from "../mixins/navigate";
import Spinner from "@/components/Spinner.vue";
import loadingMixin from "@/mixins/loadingMixin";
import debounce from 'debounce';

export default {
  components: {
    NavBarComponent,
    CardCoffee,
    TitleHeader,
    Spinner,
  },
  computed: {
    cardStore() {
      return this.$store.getters["getCoffeeOur"]
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    searchValue: {
      set(value) {
        this.$store.dispatch("SetSearchValue", value);
      },
      get() {
        return this.$store.getters["getSearchValue"];
      }
    }
  },
  data() {
    return {
      name: 'CoffeeSection',
      title: [
        {
          id: 0,
          text: "Our Coffee",
        },
      ],
    };
  },
  mixins: [navigate, loadingMixin],
  mounted() {
    fetch('http://localhost:3000/CoffeeSection')
      .then(res => res.json())
      .then(data => {
        this.$store.dispatch("setCoffeeData", data);
      });
    this.fetchData(this.loadProduct);
  },
  methods: {
    async loadProduct() {
      const response = await fetch(`http://localhost:3000/CoffeeSection`);
      const data = await response.json();
      this.$store.dispatch("setCoffeeData", data);
    },
    onSort(value) {
      fetch(`http://localhost:3000/CoffeeSection?country=${value}`)
        .then(res => res.json())
        .then(data => {
          this.$store.dispatch("setCoffeeData", data);
        });
    },
    onSearch: debounce(function (event) {
      const searchValue = event.target.value.toLowerCase();
      this.$store.dispatch("SetSearchValue", searchValue)
    }, 500),
    resetFilters() {
      this.searchValue = '';
      this.loadProduct();
    }
  },
};
</script>