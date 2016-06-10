import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1(params){
      this.sendAction('save1', params);
    }
  }
});
