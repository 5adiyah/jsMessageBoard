import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteQuestion(question){
      if(confirm('You sure you want to delete this q?')){
        this.sendAction("deleteQuestion", question);
      }
    }
  }
});
