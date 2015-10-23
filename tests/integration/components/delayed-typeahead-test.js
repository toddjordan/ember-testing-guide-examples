import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('delayed-typeahead', 'Integration | Component | delayed typeahead', {
  integration: true
});

const stubResults = [
  { name: 'result 1' },
  { name: 'result 2' }
];

test('should render results after typing a term', function(assert) {
  assert.expect(2);

  this.set('results', []);
  this.set('fetchResults', (value) => {
    assert.equal(value, 'test', 'fetch closure action called with search value');
    this.set('results', stubResults);
  });

  this.render(hbs`{{delayed-typeahead fetchResults=fetchResults results=results}}`);
  this.$('input').val('test');
  this.$('input').trigger('keyup');

  return wait().then(() => {
    assert.equal(this.$('.result').length, 2, 'two results rendered');
  });

});
