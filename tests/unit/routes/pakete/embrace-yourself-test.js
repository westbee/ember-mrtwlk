import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Route | pakete/embrace-yourself", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    let route = this.owner.lookup("route:pakete/embrace-yourself");
    assert.ok(route);
  });
});
