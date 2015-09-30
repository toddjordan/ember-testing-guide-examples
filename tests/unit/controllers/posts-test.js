import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:posts', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('should update A and B on setProps action', function(assert) {
  assert.expect(4);

  // get the controller instance
  const ctrl = this.subject();

  // check the properties before the action is triggered
  assert.equal(ctrl.get('propA'), 'You need to write tests', 'propA initialized');
  assert.equal(ctrl.get('propB'), 'And write one for me too', 'propB initialized');

  // trigger the action on the controller by using the `send` method,
  // passing in any params that our action may be expecting
  ctrl.send('setProps', 'Testing Rocks!');

  // finally we assert that our values have been updated
  // by triggering our action.
  assert.equal(ctrl.get('propA'), 'Testing is cool', 'propA updated');
  assert.equal(ctrl.get('propB'), 'Testing Rocks!', 'propB updated');
});
