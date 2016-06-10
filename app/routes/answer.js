import Ember from 'ember';

export default Ember.Route.extend({
  model(parms){
    return this.store.findRecord('answer', params.answer_id);
  }

  actions: {
    destroyAnswer(answer) {
      answer.destroyRecord().then(function(){
      });
      this.transitionTo('question');
    },
  }
});
