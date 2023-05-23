import proToCat from "./ProToCat";

const catToLis = (products) => {
  const categories = proToCat(products);
  let lists = {};

  categories.forEach((category) => {
    lists[category] = products.filter(
      (product) => product.category === category
    );
  });

  return lists;
};

export default catToLis;
