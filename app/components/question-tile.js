import Ember from 'ember';

export default Ember.Component.extend({
  // ratingScore: Ember.computed('model.questions', function(){
  //   var score = this.get('question').get('answers').get('length');
  //   console.log("score = " + score);
  //   return score;
  // })
  actions: {
    upVote(question){
      console.log("________________________");
      console.log("Question score question-tile: " + question.get('score'));
      var score = question.get('score') + 1;
      console.log("score in question-tile: " + score);
      this.sendAction('upVote', question, score)
    },

    downVote(question){
      console.log("________________________");
      console.log("Question score question-tile: " + question.get('score'));
      var score = question.get('score') - 1;
      console.log("score in question-tile: " + score);
      this.sendAction('upVote', question, score)
    },


  }
});
