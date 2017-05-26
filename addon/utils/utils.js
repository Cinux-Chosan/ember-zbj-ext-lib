
export var genArray = (start = 0, end = 0, step = 1) => {
  let __genArr__ = function *() {
    do {
      yield start;
    } while((start += step) <= end);
  }
  return [...__genArr__()];
}
