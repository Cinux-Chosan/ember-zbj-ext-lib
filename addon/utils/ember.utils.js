import Ember from 'ember';

const { defineProperty: defProp, setPrototypeOf: setProto, getPrototypeOf: getProto } = Object;

let symbol_findby2 = Symbol('findBy with ==, not ===');
let proto_array = getProto([]);

defProp(proto_array, symbol_findby2, {
  get() {
    return (key, val) => {
      let iter = (key, val) => i => Ember.get(i, key) == val;
      return this.find(iter(key, val));
    }
  }
});

export let setP = setProto;
export let findby2 = symbol_findby2;
export let findby = findby2;