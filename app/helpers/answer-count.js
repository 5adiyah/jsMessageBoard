import Ember from 'ember';

export function answerCount(params) {
  var question = params[0];
  var numAnswers = question.get('answers').get('length');
  return Ember.String.htmlSafe(numAnswers);
}

export default Ember.Helper.helper(answerCount);
