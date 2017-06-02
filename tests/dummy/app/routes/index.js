import Ember from 'ember';
import computed from 'ember-computed-decorators';
import { genArray, findby, removeBy, convertFalse, typesOf, length, is } from 'ember-zbj-ext-lib';

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
    console.log('zhang建军'[length]);
    arr[convertFalse](undefined);
    console.log(arr);
    let o1 = { name: 'zhangjianjun', b: undefined};
    let o2 = { name: 'zhangjianjun', b: 0};
    console.log(Object[is](o1, o2, 1));

    return null;
  }
});
