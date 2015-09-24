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
  var expectedText = 'foo';
  window.alert = function(text) {
    assert.equal(text, expectedText, 'expected ' + text + ' to be ' + expectedText);
  };

  // call the _displayAlert function which triggers the qunit test above
  route._displayAlert(expectedText);

  // set up a second stub to perform a test with the actual action
  expectedText = 'bar';
  window.alert = function(text) {
    assert.equal(text, expectedText, 'expected ' + text + ' to be ' + expectedText);
  };

  // Now use the routes send method to test the actual action
  route.send('displayAlert', expectedText);
});
