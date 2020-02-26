import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | kontakt', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:kontakt');
    assert.ok(route);
  });
});
