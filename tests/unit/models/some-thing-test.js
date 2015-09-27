import { moduleFor, test } from 'ember-qunit';

moduleFor('model:some-thing', 'Unit | Model | some thing', {
  // Specify the other units that are required for this test.
  needs: [],
  unit: true
});

test('should correctly concat foo', function(assert) {
  const someThing = this.subject();
  someThing.set('foo', 'baz');
  assert.equal(someThing.get('computedFoo'), 'computed baz');
});

test('should update foo on testMethod', function(assert) {
  const someThing = this.subject();
  someThing.testMethod();
  assert.equal(someThing.get('foo'), 'baz');
});

test('should return incremented count on calc', function(assert) {
  const someThing = this.subject();
  assert.equal(someThing.calc(), 'count: 1');
  assert.equal(someThing.calc(), 'count: 2');
});

test('should set other prop to yes when foo changes', function(assert) {
  const someThing = this.subject();
  someThing.set('foo', 'baz');
  assert.equal(someThing.get('other'), 'yes');
});
