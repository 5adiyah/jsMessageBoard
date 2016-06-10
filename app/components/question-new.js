import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow(){
      this.set('addNewQuestion', true);
    },

    saveQuestion(){
      var params = {
        author: this.get('author'),
        avatar: this.get('avatar'),
        date: this.get('date'),
        content: this.get('content'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
