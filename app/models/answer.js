import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.belongsTo('city',{ async: true }),
  answerer: DS.attr()
});
