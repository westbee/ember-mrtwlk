import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pakete/cake-smash', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pakete/cake-smash');
    assert.ok(route);
  });
});
