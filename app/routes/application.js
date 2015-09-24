import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
    displayAlert(text) {
      this._displayAlert(text);
    }
  },

  _displayAlert(text) {
    alert(text);
  }
});
