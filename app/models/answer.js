import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  answerer: DS.attr();
});
