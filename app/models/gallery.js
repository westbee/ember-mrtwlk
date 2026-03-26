import Model, { attr } from "@ember-data/model";

export default class GalleryModel extends Model {
  @attr name;
  @attr title;
  @attr link;
  @attr description;
  @attr url;
  @attr images;
}
