import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('addContact',
  function(app, assert, name, context) {
    fillIn('#name', name);
    click('button.create');
  }
);

// addContact('Bob');
// addContact('Dan');
