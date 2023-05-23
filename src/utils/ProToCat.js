const proToCat = (products) => {
  return [...new Set(products.map(({ category }) => category))];
};

export default proToCat;
