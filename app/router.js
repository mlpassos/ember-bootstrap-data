import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('noticias', {path: 'noticias/:page'}, function() {
    
  });
  this.route('noticia', {path: 'noticia/:slug'}, function() {

  });
  this.route('links');
  this.route('downloads');
  this.route('contato');
  this.route('sobre');

  this.route('tags', {});
  this.route('tag', {path: 'tag/:slug/:pageid'}, function() {
  });
});

export default Router;