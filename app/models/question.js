import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  author: attr(),
  avatar: attr(),
  date: attr(),
  content: attr(),
  answers: hasMany('answer', {async: true})
});
