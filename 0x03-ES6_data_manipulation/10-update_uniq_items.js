const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  map.forEach((quantity, name) => {
    if (quantity === 1) {
      map.delete(name);
      map.set(name, 100);
    }
  });
  return map;
};

export default updateUniqueItems;
