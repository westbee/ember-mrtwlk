import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;

  didTransition() {
    window.scrollTo(0, 0);
  }
}

Router.map(function() {
  this.route('impressum');
  this.route('datenschutz');
  this.route('fotografin');
});
