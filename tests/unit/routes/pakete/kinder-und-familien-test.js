import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pakete/kinder-und-familien', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pakete/kinder-und-familien');
    assert.ok(route);
  });
});
