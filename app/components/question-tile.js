import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    upVote(question){
      console.log("________________________");
      console.log("Question score question-tile: " + question.get('score'));
      var score = question.get('score') + 1;
      console.log("score in question-tile: " + score);
      this.sendAction('upVote', question, score)
    },

    downVote(question){
      var score = question.get('score') - 1;
      this.sendAction('upVote', question, score)
    },


  }
});
