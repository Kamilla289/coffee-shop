<template>
  <main>
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
              <input id="filter" type="text" placeholder="start typing here..." class="shop__search-input" />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn">Brazil</button>
                <button class="shop__filter-btn">Kenya</button>
                <button class="shop__filter-btn">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <card-coffee v-for="card in coffee" :key="card.id" classItem="shop__item" :image="card.image"
                :title="card.title" :price="card.price" :country="card.country" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import CardCoffee from "@/components/CardCoffee.vue";
import TitleHeader from "@/components/TitleHeader.vue";
import coffeeFactory from "@/CoffeeFactory.js";

export default {
  components: {
    NavBarComponent,
    CardCoffee,
    TitleHeader
  },
  data() {
    return {
      coffee: [
        coffeeFactory({
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
        }),
        coffeeFactory({
          title: "Presto Coffee Beans 1kg",
          price: 15.99,
        }),
        coffeeFactory({
          title: "AROMISTICO Coffee 1kg",
          price: 6.99,
        }),
        coffeeFactory({
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
        }),
        coffeeFactory({
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
        }),
        coffeeFactory({
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
        })
      ],
      title: [
        {
          id: 0,
          text: "Our Coffee",
        },
      ],
    };
  },
};
</script>