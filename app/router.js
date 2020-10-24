import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { inject as service } from '@ember/service';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;

  @service router;

  init() {
    super.init(...arguments);

    this.on('routeDidChange', function() {
      window.scrollTo(0, 0);
    });
  }
}

Router.map(function() {
  this.route('impressum');
  this.route('datenschutz');
  this.route('fotografin');
  this.route('kontakt');
  this.route('pakete', function() {
    this.route('babybauch');
    this.route('neugeborene');
    this.route('kinder-und-familien');
    this.route('portrait');
    this.route('cake-smash');
  });
  this.route('bildergalerie', function() {
    this.route('gallery', { path: '/:gallery_id' });
  });
});
