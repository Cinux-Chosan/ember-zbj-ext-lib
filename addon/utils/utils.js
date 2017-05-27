
export let genArray = (start = 0, end = 0, step = 1) => {
  let arr_g = function *() {
    do {
      yield start;
    } while((start += step) <= end);
  }
  return [...arr_g()];
}
