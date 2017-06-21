
export let genArray = (start = 0, end = 0, step = 1) => {
  function * gArr() {
    do {
      yield start;
    } while((start += step) <= end);
  }
  return [...gArr()];
}

// iter an obj
export let iterEntries = function* (obj) {
  let keys = Object.keys(obj);
  for (let i=0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key]];
  }
}
