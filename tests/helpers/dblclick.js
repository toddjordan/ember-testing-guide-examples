import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('dblclick',
  function(app, assert, selector, context) {
    let $el = findWithAssert(selector, context);
    Ember.run(() => $el.dblclick());
  }
);

// dblclick('#person-1')
