import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { genArray, findby } from 'ember-zbj-ext-lib';

export default Ember.Route.extend({
  number: genArray(1, 10),
  @computed('number') getN(n) {
    return n;
  },
  arr: [{id: 1, name: 'zhang'}],
  model() {
    let arr = this.get('arr');
    console.log(arr[findby]('id', '1'));
    console.log(this.get('getN'));
    return null;
  }
});
