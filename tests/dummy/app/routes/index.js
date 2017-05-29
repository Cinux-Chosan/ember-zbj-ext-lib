import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { genArray, findby, removeBy, convertFalse, typesOf, str_length } from 'ember-zbj-ext-lib';

export default Ember.Route.extend({
  number: genArray(1, 10),
  @computed('number') getN(n) {
    return n;
  },
  arr: [{id: 1, name: 'zhang'}, 0],
  model() {
    let arr = this.get('arr');
    console.log(arr[findby]('id', '1'));
    console.log(this.get('getN'));
    console.log(removeBy);
    // arr[removeBy]('id', 1);
    console.log(arr[typesOf]);
    console.log('zhang建军'[str_length]);
    arr[convertFalse]('');
    console.log(arr);
    return null;
  }
});
