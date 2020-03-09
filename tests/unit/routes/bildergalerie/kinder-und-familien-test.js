import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bildergalerie/kinder-und-familien', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bildergalerie/kinder-und-familien');
    assert.ok(route);
  });
});
