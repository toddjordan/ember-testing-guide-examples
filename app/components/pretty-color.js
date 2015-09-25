import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],

  style: Ember.computed('name', function() {
    let name = this.get('name');
    return `color: ${name}`;
  })
});
