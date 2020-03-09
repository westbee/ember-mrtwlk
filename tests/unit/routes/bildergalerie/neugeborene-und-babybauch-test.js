import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bildergalerie/neugeborene-und-babybauch', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bildergalerie/neugeborene-und-babybauch');
    assert.ok(route);
  });
});
