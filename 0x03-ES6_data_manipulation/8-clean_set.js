function cleanSet(set, startString) {
  if (startString === '') return '';

  let ret = '';

  set.forEach(element => {
    if (element.startsWith(startString)) {
      ret += element.slice(startString.length);
      ret += '-';
    }
  });

  if (ret.length > 0) {
    ret = ret.slice(0, -1);
  }
  return ret;
}

export default cleanSet;