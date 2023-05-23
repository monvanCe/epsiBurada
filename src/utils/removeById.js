export const removeObjectById = (array, id) => {
  var index = array.findIndex(function (obj) {
    return obj.id === id;
  });

  if (index !== -1) {
    array.splice(index, 1);
  }
};
