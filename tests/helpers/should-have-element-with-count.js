import Ember from 'ember';

export default Ember.Test.registerHelper('shouldHaveElementWithCount', function(app, assert, selector, n, context) {
  var el = findWithAssert(selector, context);
  var count = el.length;
  assert.equal(n, count, 'found ' + count + ' times');
});
//shouldHaveElementWithCount(assert, 'ul li', 3);
