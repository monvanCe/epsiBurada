export const handleFavoriteToggle = (setProducts, productId) => {
  setProducts((prevState) =>
    prevState.map((obj) => {
      if (obj.id === productId) {
        if (obj.hasOwnProperty("favorite")) {
          return { ...obj, favorite: !obj.favorite };
        } else {
          return { ...obj, favorite: true };
        }
      }
      return obj;
    })
  );
};
