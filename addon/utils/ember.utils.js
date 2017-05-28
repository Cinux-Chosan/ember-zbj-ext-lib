import { set, get, isEmber } from './__lib_utils__';

const { defineProperty: defProp, setPrototypeOf: setProto, getPrototypeOf: getProto } = Object;

let proto_array = getProto([]);

// 扩展 findBy with ==
let symbol_findby2 = Symbol('findBy with ==, not ===');
defProp(proto_array, symbol_findby2, {
  get() {
    return (key, val) => {
      let iter = (key, val) => el => get(el, key) == val;
      return this.find(iter(key, val));
    }
  }
});
export let findBy = findby2;
export let findby = findby2;

// 扩展 removeBy
let symbol_removeBy = Symbol('removeBy with ==, not ===');
defProp(proto_array, symbol_removeBy, {
  get() {
    return (key, val) => {
      if (isEmber) {
        return this.removeObject(this[symbol_findby2](key, val));
      } else {
        return this.splice(this.findIndex(el => el[key] == val), 1);
      }
    }
  }
});
export let removeBy = symbol_removeBy;
export let removeby = removeBy;
export let setP = setProto;
