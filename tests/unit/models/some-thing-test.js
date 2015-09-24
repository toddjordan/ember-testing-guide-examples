import { moduleForModel, test } from 'ember-qunit';

moduleForModel('some-thing', 'Unit | Model | some thing', {
  // Specify the other units that are required for this test.
  needs: []
});

test('computedFoo correctly concats foo', function(assert) {
  var someThing = this.subject();

  someThing.set('foo', 'baz');

  assert.equal(someThing.get('computedFoo'), 'computed baz');
});

test('calling testMethod updated foo', function(assert) {
  var someThing = this.subject();

  someThing.testMethod();

  assert.equal(someThing.get('foo'), 'baz');
});

test('calc returns incremented count', function(assert) {
  var someThing = this.subject();
  assert.equal(someThing.calc(), 'count: 1');
  assert.equal(someThing.calc(), 'count: 2');
});

test('doSomething observer sets other prop', function(assert) {
  var someThing = this.subject();
  someThing.set('foo', 'baz');
  assert.equal(someThing.get('other'), 'yes');
});
