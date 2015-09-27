import { moduleFor, test } from 'ember-qunit';

let originalAlert;

moduleFor('route:application', 'Unit | Route | application', {
  beforeEach() {
    originalAlert = window.alert; // store a reference to window.alert
  },

  afterEach() {
    window.alert = originalAlert; // restore window.alert
  }
});

test('should display an alert', function(assert) {
  assert.expect(2);

  // with moduleFor, the subject returns an instance of the route
  let route = this.subject();

  // stub window.alert to perform a qunit test
  const expectedTextFoo = 'foo';
  window.alert = (text) => {
    assert.equal(text, expectedTextFoo, `expect alert to display ${expectedTextFoo}`);
  };

  // call the _displayAlert function which triggers the qunit test above
  route._displayAlert(expectedTextFoo);

  // set up a second stub to perform a test with the actual action
  const expectedTextBar = 'bar';
  window.alert = (text) => {
    assert.equal(text, expectedTextBar, `expected alert to display ${expectedTextBar}`);
  };

  // Now use the routes send method to test the actual action
  route.send('displayAlert', expectedTextBar);
});
