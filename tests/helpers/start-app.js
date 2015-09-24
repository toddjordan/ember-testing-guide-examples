import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';
import './should-have-element-with-count';
import './dblclick';
import './add-contact';

export default function startApp(attrs) {
  var application;

  var attributes = Ember.merge({}, config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(function() {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
