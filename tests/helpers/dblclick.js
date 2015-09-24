import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('dblclick',
  function(app, assert, selector, context) {
    var $el = findWithAssert(selector, context);
    Ember.run(function() {
      $el.dblclick();
    });
  }
);

// dblclick('#person-1')
