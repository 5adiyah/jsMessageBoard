import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm(){
      this.set('updateQuestionForm', true);
    },

    update(question){
      var params = {
        author: this.get('author'),
        avatar: this.get('avatar'),
        date: this.get('date'),
        question: this.get('question'),
      };

      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
