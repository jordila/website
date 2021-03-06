import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('playground');
  this.route('test-galeria');
  this.route('index_v2');
  this.route('carousel-test');
});

export default Router;
