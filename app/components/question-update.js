import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm(){
      this.set('updateQuestionForm', true);
    },

    updateQuestion(question){
      var params = {
        author: this.get('author'),
        avatar: this.get('avatar'),
        date: this.get('date'),
        content: this.get('content'),
      };

      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
