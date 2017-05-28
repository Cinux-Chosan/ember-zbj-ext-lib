import Ember from 'ember';

let isEmber = window.Ember && Ember && Ember.VERSION;

export let set = isEmber ? Ember.set : (obj, key, val) => obj[key] = val;
export let get = isEmber ? Ember.get : (obj, key) => obj[key];
