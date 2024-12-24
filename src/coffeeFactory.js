function coffeeFactory({ title, price, image, country }) {
  let id = 0;
  return {
    id: id++,
    image,
    title,
    country,
    price,
  };
}

export default coffeeFactory;