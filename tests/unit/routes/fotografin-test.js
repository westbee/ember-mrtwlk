import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fotografin', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fotografin');
    assert.ok(route);
  });
});
