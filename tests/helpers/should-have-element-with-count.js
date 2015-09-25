import Ember from 'ember';

export default Ember.Test.registerHelper('shouldHaveElementWithCount', function(app, assert, selector, n, context) {
  const el = findWithAssert(selector, context);
  const count = el.length;
  assert.equal(n, count, `found ${count} times`);
});
// shouldHaveElementWithCount(assert, 'ul li', 3);
