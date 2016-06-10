import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow(){
      this.set('addNewQuestion', true);
    },

    save1(){
      var params = {
        author: this.get('author'),
        avatar: this.get('avatar'),
        date: this.get('date'),
        question: this.get('question'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
