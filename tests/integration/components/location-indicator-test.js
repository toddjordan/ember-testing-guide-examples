import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const locationStub = Ember.Service.extend({
  city: 'New York',
  country: 'USA',
  currentLocation: {
    x: 1234,
    y: 5678
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
    this.registry.register('service:location-service', locationStub);
  }
});

test('should reveal current location', function(assert) {
  this.render(hbs`{{location-indicator}}`);
  assert.equal(this.$().text().trim(), 'You currently are located in New York, USA');
});

test('should change displayed location when current location changes', function(assert) {
  this.render(hbs`{{location-indicator}}`);
  assert.equal(this.$().text().trim(), 'You currently are located in New York, USA', 'origin location should display');
  let locationService = this.container.lookup('service:location-service');
  Ember.run(() => {
    locationService.set('city', 'Beijing');
    locationService.set('country', 'China');
    locationService.set('currentLocation', { x: 11111, y: 222222 });
  });
  assert.equal(this.$().text().trim(), 'You currently are located in Beijing, China', 'location display should change');
});
