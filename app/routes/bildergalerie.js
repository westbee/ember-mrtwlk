import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BildergalerieRoute extends Route {
  @service store;
  @service router;

  async model() {
    return this.store.findAll('gallery');
  }

  redirect(model, transition) {
    if (transition.targetName === 'bildergalerie.index') {
      this.router.transitionTo('bildergalerie.gallery', model.get('firstObject'));
    }
  }
}
