
export let genArray = (start = 0, end = 0, step = 1) => {
  let arr = function *() {
    do {
      yield start;
    } while((start += step) <= end);
  }
  return [...arr()];
}
