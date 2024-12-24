function coffeeFactory({ title, price, image }) {
  let id = 0;
  return {
    id: id++,
    image: "coffee-3.jpg",
    title: "Solimo Coffee Beans 2kg",
    country: "Brazil",
    price: 10.73,
  };
}


export default coffeeFactory;