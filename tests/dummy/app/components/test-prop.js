import Ember from 'ember';
import layout from '../templates/components/test-prop';
Ember.Component.reopen({
  attributeBindings: ['data-a', 'data-b']
});
export default Ember.Component.extend({
  layout,
  didInsertElement() {
    this._super(...arguments);
    console.log(this.getAttr);
    this.getAttr('on-load')();
  }
});
