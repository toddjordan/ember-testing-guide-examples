import DS from 'ember-data';

export default DS.Model.extend({
  profile: DS.belongsTo('profile')
});
