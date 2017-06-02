
export let genArray = (start = 0, end = 0, step = 1) => {
  function * gArr() {
    do {
      yield start;
    } while((start += step) <= end);
  }
  return [...gArr()];
}
