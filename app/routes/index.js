import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    upVote(question, score){
      console.log("Question in index: " + question.get('content'));
      console.log("score in index: " + score);
      question.set("score", score);
      question.save();
      console.log("score in index after save: " + question.get('score'));
      this.transitionTo('index');
    },

    downVote(question, score){
      console.log("Question in index: " + question.get('content'));
      console.log("score in index: " + score);
      question.set("score", score);
      question.save();
      console.log("score in index after save: " + question.get('score'));
      this.transitionTo('index');
    }
  }
  });
