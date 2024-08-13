function setFromArray(array) {
  let set = new Set();
  for (number in array) {
    set.add(array[number]);
  }
  return set;
}

export default setFromArray;
