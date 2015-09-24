import Ember from 'ember';

export default Ember.Component.extend({
  locationService: Ember.inject.service('location-service'),

  city: Ember.computed('locationService.currentLocation', function () {
    return this.get('locationService').getCurrentCity();
  }),

  country: Ember.computed('locationService.currentLocation', function () {
    return this.get('locationService').getCurrentCountry();
  })
});
