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


// 转换值为 false 的元素为指定元素
let symbol_convertFalse = Symbol('convert false to what you want');
defProp(proto_array, symbol_convertFalse, {
  get() {
    return dest => Array.from(this, (el, i) => this[i] = el ? el : dest);
  }
});

export let convertFalse = symbol_convertFalse;

// 返回数组中每一个元素的类型
let symbol_typesof = Symbol('return all types of elements');
defProp(proto_array, symbol_typesof, {
  get() {
    return Array.from(this, el => typeof el);
  }
})

export let typesOf = symbol_typesof;

// 该返回值能够正确处理Unicode字符, 解决JavaScript将大于\uFFFF的Unicode字符，算作两个字符的bug。
let symbol_str_length = Symbol('return string length, Unicode friendly');
defProp(proto_string, symbol_str_length, {
  get() {
    return Array.from(this).length;
  }
})

export let str_length = symbol_str_length;


export let setP = setProto;
