import Ember from 'ember';
import computed from 'ember-computed-decorators';
<<<<<<< HEAD
import { genArray, findby } from 'ember-zbj-ext-lib';
=======
import { genArray, findby2, removeBy } from 'ember-zbj-ext-lib';
>>>>>>> eca350f43830771e0e93f948dce8a7555bf27ce8

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
    console.log(removeBy);
    arr[removeBy]('id', 1);
    console.log(arr);
    return null;
  }
});
