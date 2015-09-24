import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  foo: 'bar',
  count: 0,
  other: 'no',

  computedFoo: Ember.computed('foo', function() {
    return 'computed ' + this.get('foo');
  }),

  testMethod() {
    this.set('foo', 'baz');
  },

  calc() {
    this.incrementProperty('count');
    return 'count: ' + this.get('count');
  },

  doSomething: Ember.observer('foo', function(){
    this.set('other', 'yes');
  })
});
