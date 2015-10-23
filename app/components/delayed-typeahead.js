import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    handleTyping() {
      Ember.run.debounce(this, this.get('fetchResults'), this.get('searchValue'), 250);
    }
  }
});
