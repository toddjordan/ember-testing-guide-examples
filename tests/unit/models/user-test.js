import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: ['model:profile']
});

test('should own a profile', function(assert) {
  const User = this.store().modelFor('user');
  const relationship = Ember.get(User, 'relationshipsByName').get('profile');

  assert.equal(relationship.key, 'profile', 'has relationship with profile');
  assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
});
