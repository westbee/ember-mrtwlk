import Model, { attr } from '@ember-data/model';

export default class GalleryModel extends Model {
  @attr name;
  @attr title;
  @attr image;
  @attr link;
  @attr description;
}