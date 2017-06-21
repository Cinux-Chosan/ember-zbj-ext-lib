import Ember from 'ember';
import layout from '../templates/components/test-databinding';

export default Ember.Component.extend({
  layout,
  a: {a:1, b:2}
});
