import Ember from 'ember';

export default Ember.Component.extend({
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
