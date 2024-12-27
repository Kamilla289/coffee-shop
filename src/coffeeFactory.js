function coffeeFactory({ id, title, price, image }) {
  return {
    id,
    image: "coffee-3.jpg",
    title,
    country: "Brazil",
    price,
  };
}


export default coffeeFactory;