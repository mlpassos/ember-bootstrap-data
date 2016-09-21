import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel() {
	// 	let postContent = this.store.recordIsLoaded('post', 1368);
	// 	if (postContent) {
	// 		console.log("tem post entao limpa");
	// 		this.store.unloadAll('post');
	// 	}
		console.log("unload");
		this.store.unloadAll('post');
	},
	model() {
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