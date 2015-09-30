import Ember from 'ember';

export default Ember.Controller.extend({
  post: Ember.inject.controller(),
  title: Ember.computed.alias('post.title')
});
