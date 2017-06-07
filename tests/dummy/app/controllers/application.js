import Ember from 'ember';

export default Ember.Controller.extend({
  me: '张建军',
  actions: {
    load() {
      console.log(this.get('me'));
      console.log(this.getAttr);
    }
  }
});
