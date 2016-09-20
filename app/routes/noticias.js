import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel() {
		// let postsContent = this.store.peekAll('post');
		// console.log('pc: ', postsContent);
		this.store.unloadAll('post');
	},
	model() {
		// this.store.unloadAll('post');
		return this.store.findAll('post');
		// return $.get(`http://www.instadev.com.br/ember-bootstrap-api/recent-posts.php`).then(results => {
		// 	let json = JSON.parse(results);
		// 	let posts = json['posts'];
		// 	return posts.map(post => {
		// 		return post;
		// 	});						
		// });
	}
});
