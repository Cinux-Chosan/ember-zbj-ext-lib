import Ember from 'ember';

let isEmberEnv = true;

let isEmber = isEmberEnv || (window.Ember && Ember && Ember.VERSION);

export const { defineProperty: defProp, setPrototypeOf: setProto, getPrototypeOf: getProto } = Object;
export const proto_array = getProto([]);
export const proto_string = getProto('');
export const proto_object = getProto({});
export const set = isEmber ? Ember.set : (obj, key, val) => obj[key] = val;
export const get = isEmber ? Ember.get : (obj, key) => obj[key];
export const throwIfMissing = (missingParam = '', tip = '') => { throw new Error(`Missing parameter ${missingParam}, ${tip}`); };
export const pip = (...funcs) => funcs.reduce((a, b) => b(a));  //  如果有初始值，初始值作为第一个参数
