export const getHighestId = (array) => {
  let highestId = -Infinity;

  for (const object of array) {
    object.id > highestId && (highestId = object.id);
  }

  return highestId;
};
