import Ember from 'ember';

export default Ember.Route.extend({
	page: '',
	model(params) {
		console.log('page: ', params.page);
		this.set('page', params.page);
		params.count = 10;
		// console.log('newparams', params);
		return this.store.query('post',{page: params.page, count: params.count}).then(post => {
			let meta = post.get('meta');
			// post.page = params.page;
			// this.set('meta', meta);
			// console.log(meta);
			return post;
			
		});
		// return this.store.findAll('post');
		// return $.get(`http://www.instadev.com.br/ember-bootstrap-api/recent-posts.php`).then(results => {
		// 	let json = JSON.parse(results);
		// 	let posts = json['posts'];
		// 	return posts.map(post => {
		// 		return post;
		// 	});						
		// });
	},
	setupController(controller) {
		this._super(...arguments);
		controller.set('page', this.get('page'));
	}
});