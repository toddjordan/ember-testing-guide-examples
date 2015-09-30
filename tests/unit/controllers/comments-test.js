import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:comments', {
  needs: ['controller:post']
});

test('should modify the post model', function(assert) {
  assert.expect(2);

  // grab an instance of `CommentsController` and `PostController`
  const ctrl = this.subject();
  const postCtrl = ctrl.get('post');

  // wrap the test in the run loop because we are dealing with async functions
  Ember.run(function() {

    // set a generic model on the post controller
    postCtrl.set('model', Ember.Object.create({ title: 'foo' }));

    // check the values before we modify the post
    assert.equal(ctrl.get('title'), 'foo', 'title is set');

    // modify the title of the post
    postCtrl.get('model').set('title', 'bar');

    // assert that the controllers title has changed
    assert.equal(ctrl.get('title'), 'bar', 'title is updated');
  });
});
