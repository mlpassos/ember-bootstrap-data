import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('noticias', {}, function() {

  });
  this.route('noticia', {path: 'noticia/:slug'}, function() {

  });
  this.route('links');
  this.route('downloads');
  this.route('contato');
  this.route('sobre');

  this.route('tags', {});
  this.route('tag', {path: 'tag/:tagid'}, function() {
    // this.route('noticias', {});
  });
});

export default Router;

// this.route('tag', {path: 'tag/:slug'}, function() {
//   // org/emberjs
//   this.route('repos', {});
//   this.route('repo', {path: ':repoid'}, function() {
//     this.route('contributors', {});
//     this.route('issues', {});
//   });
//   // org/jquery/jquery-ui
//   this.route('notfound', {});
// });