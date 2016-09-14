import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		let id = params.slug;
		console.log('route: ', id);
		return this.store.findRecord('noticia', id);
		// return $.get(`http://www.instadev.com.br/ember-bootstrap-api/post-slug.php?slug=${slug}`).then(results => {
		// 	let json = JSON.parse(results);
		// 	let post = json['post'];
		// 	return post;				
		// });
	}
});