import Ember from 'ember';

export default Ember.Component.extend({
  numAnswers: Ember.computed('model', function(){
    var numAnswers = this.get('model').get('answers').get('length');
    return numAnswers;
  }),

  actions: {
    saveAnswer(params){
      this.sendAction('saveAnswer', params);
    },

    deleteAnswer(answer){
      if(confirm("You sure you want to delete this answer?")){
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
