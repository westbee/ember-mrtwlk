import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GalleryRoute extends Route {
  @service store;

  async model(params) {
    return this.store.find('gallery', params.gallery_id);
  }
}
