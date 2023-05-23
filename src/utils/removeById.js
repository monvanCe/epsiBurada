export const removeObjectById = (array, id) => {
  const newArray = [...array]; // Create a copy of the input array

  const index = newArray.findIndex((obj) => obj.id === id);

  if (index !== -1) {
    newArray.splice(index, 1);
  }

  return newArray;
};
