import Ember from 'ember';

export default Ember.Controller.extend({
  title: Ember.computed.alias('model.title')
});
