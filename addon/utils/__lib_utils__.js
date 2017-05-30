import Ember from 'ember';

let isEmberEnv = true;

let isEmber = isEmberEnv || (window.Ember && Ember && Ember.VERSION);

export let set = isEmber ? Ember.set : (obj, key, val) => obj[key] = val;
export let get = isEmber ? Ember.get : (obj, key) => obj[key];
export let throwIfMissing = (missingParam = '', tip = '') => throw new Error(`Missing parameter ${missingParam}, ${tip}`);
