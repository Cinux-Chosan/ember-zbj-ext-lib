import { set, get, isEmber } from './__lib_utils__';

const { defineProperty: defProp, setPrototypeOf: setProto, getPrototypeOf: getProto } = Object;

let proto_array = getProto([]);
let proto_string = getProto('');

// 扩展 findBy with ==
let symbol_findBy = Symbol('findBy with ==, not ===');
defProp(proto_array, symbol_findBy, {
  get() {
    return (key, val) => {
      let iter = (key, val) => el => get(el, key) == val;
      return this.find(iter(key, val));
    }
  }
});
export let findBy = symbol_findBy;
export let findby = symbol_findBy;

// 扩展 removeBy
let symbol_removeBy = Symbol('removeBy with ==, not ===');
defProp(proto_array, symbol_removeBy, {
  get() {
    return (key, val) => {
      if (isEmber) {
        return this.removeObject(this[symbol_findBy](key, val));
      } else {
        return this.splice(this.findIndex(el => el[key] == val), 1);
      }
    }
  }
});
export let removeBy = symbol_removeBy;
export let removeby = symbol_removeBy;


// not finished
let symbol_convertFalse = Symbol('convert false to what you want');
defProp(proto_array, symbol_convertFalse, {
  get() {
    return dest => Array.from(this, el => el ? el : dest, this);
  }
});

export let convertFalse = symbol_convertFalse;

//
let symbol_typesof = Symbol('return all types of elements');
defProp(proto_array, symbol_typesof, {
  get() {
    return Array.from(this, el => typeof el);
  }
})

export let typesOf = symbol_typesof;

//
let symbol_str_length = Symbol('return string length, Unicode friendly');
defProp(proto_string, symbol_str_length, {
  get() {
    return Array.from(this).length;
  }
})

export let str_length = symbol_str_length;


export let setP = setProto;
