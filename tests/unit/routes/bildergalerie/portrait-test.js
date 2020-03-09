import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bildergalerie/portrait', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bildergalerie/portrait');
    assert.ok(route);
  });
});
