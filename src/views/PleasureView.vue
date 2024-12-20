<template>
  <main>
    <div class="banner goodspage-banner">
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
            <img class="shop__girl" src="/img/coffee_goods.jpg" alt="girl" />
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
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <card-coffee classItem="shop__item" :image="goods[0].image" :title="goods[0].title"
                :country="goods[0].country" :price="goods[0].price" />
              <card-coffee classItem="shop__item" :image="goods[1].image" :title="goods[1].title"
                :country="goods[1].country" :price="goods[1].price" />
              <card-coffee classItem="shop__item" :image="goods[2].image" :title="goods[2].title"
                :country="goods[2].country" :price="goods[2].price" />
              <card-coffee classItem="shop__item" :image="goods[3].image" :title="goods[3].title"
                :country="goods[3].country" :price="goods[3].price" />
              <card-coffee classItem="shop__item" :image="goods[4].image" :title="goods[4].title"
                :country="goods[4].country" :price="goods[4].price" />
              <card-coffee classItem="shop__item" :image="goods[5].image" :title="goods[5].title"
                :country="goods[5].country" :price="goods[5].price" />
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

export default {
  components: {
    NavBarComponent,
    CardCoffee,
    TitleHeader
  },
  data() {
    return {
      goods: [
        {
          id: 0,
          image: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: "10.73",
        },
        {
          id: 1,
          image: "good-1.jpg",
          title: "Presto Coffee Beans 1kg",
          country: "Brazil",
          price: "15.99",
        },
        {
          id: 2,
          image: "good-1.jpg",
          title: "AROMISTICO Coffee 1kg",
          country: "Brazil",
          price: "6.99",
        },
        {
          id: 3,
          image: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: "10.73",
        },
        {
          id: 4,
          image: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: "10.73",
        },
        {
          id: 5,
          image: "good-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: "10.73",
        },
      ],
      title: [
        {
          id: 0,
          text: "For your pleasure",
        },
      ],
    };
  },
};
</script>