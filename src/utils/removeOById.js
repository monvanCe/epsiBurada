export const removeObjectById = (array, id) => {
  const newArray = [...array];

  const index = newArray.findIndex((obj) => obj.id === id);

  if (index !== -1) {
    newArray.splice(index, 1);
  }

  return newArray;
};
