import Ember from 'ember';

export default Ember.Component.extend({
  comment: '',

  actions: {
    submitComment() {
      this.attrs.submitComment({ comment: this.get('comment') });
    }
  }
});
