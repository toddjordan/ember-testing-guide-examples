import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let locationService;
const locationStub = Ember.Service.extend({
  city: 'New York',
  country: 'USA',
  currentLocation: {
    x: 1234,
    y: 5678
  },
  init() {
    this._super(...arguments);
    locationService = this;
  },
  getCurrentCity() {
    return this.get('city');
  },
  getCurrentCountry() {
    return this.get('country');
  }
});

moduleForComponent('location-indicator', 'Integration | Component | location indicator', {
  integration: true,

  beforeEach() {
    this.register('service:location-service', locationStub);
  }
});

test('should reveal current location', function(assert) {
  this.render(hbs`{{location-indicator}}`);
  assert.equal(this.$().text().trim(), 'You currently are located in New York, USA');
});

test('should change displayed location when current location changes', function(assert) {
  this.render(hbs`{{location-indicator}}`);
  assert.equal(this.$().text().trim(), 'You currently are located in New York, USA', 'origin location should display');
  Ember.run(() => {
    locationService.set('city', 'Beijing');
    locationService.set('country', 'China');
    locationService.set('currentLocation', { x: 11111, y: 222222 });
  });
  assert.equal(this.$().text().trim(), 'You currently are located in Beijing, China', 'location display should change');
});
