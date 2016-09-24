import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		let count = '-1';
		return this.store.query('post', {count});
		// return this.store.findAll('post');
		// return $.get(`http://www.instadev.com.br/ember-bootstrap-api/recent-posts.php`).then(results => {
		// 	let json = JSON.parse(results);
		// 	let posts = json['posts'];
		// 	return posts.map(post => {
		// 		return post;
		// 	});						
		// });
	}
});