import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  foo: 'bar',
  count: 0,
  other: 'no',

  computedFoo: Ember.computed('foo', function() {
    let foo = this.get('foo');
    return `computed ${foo}`;
  }),

  testMethod() {
    this.set('foo', 'baz');
  },

  calc() {
    this.incrementProperty('count');
    let count = this.get('count');
    return `count: ${count}`;
  },

  doSomething: Ember.observer('foo', function() {
    this.set('other', 'yes');
  })
});
