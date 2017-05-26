import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { genArray } from 'ember-zbj-ext-lib/utils';

export default Ember.Route.extend({
  number: genArray(1, 10),
  @computed('number')getN(n) {
    return n;
  },
  model() {
    console.log(this.get('getN'));
    return null;
  }
});
