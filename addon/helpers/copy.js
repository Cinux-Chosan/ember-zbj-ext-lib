import Ember from 'ember';

export function oneWay([param]) {
  return Ember.copy(param, true);
}

export default Ember.Helper.helper(oneWay);
