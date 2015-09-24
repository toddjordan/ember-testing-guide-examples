import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('player', 'Unit | Model | player', {
  // Specify the other units that are required for this test.
  needs: []
});

test('should increment level when told to', function(assert) {
  // this.subject aliases the createRecord method on the model
  var player = this.subject({ level: 4 });

  // wrap asynchronous call in run loop
  Ember.run(function() {
    player.levelUp();
  });

  assert.equal(player.get('level'), 5, 'level gets incremented');
  assert.equal(player.get('levelName'), 'Professional', 'new level is called professional');
});



