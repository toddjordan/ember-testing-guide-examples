import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('comment-form', 'Integration | Component | comment form', {
  integration: true
});

test('should trigger external action on form submit', function (assert) {

  //test double for the external action
  this.set('externalAction', (attributes) => assert.deepEqual(attributes, { comment: 'You are not a wizard!' }, 'submitted input value gets passed to external action'));

  this.render(hbs`{{comment-form submitComment=(action externalAction)}}`);

  //fill out the form and force an onchange
  this.$('textarea').val('You are not a wizard!');
  this.$('textarea').change();

  //click the button to submit the form
  this.$('input').click();
});
