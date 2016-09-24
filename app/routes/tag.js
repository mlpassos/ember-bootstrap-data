import Ember from 'ember';

export default Ember.Route.extend({
	slug: '',
	model(params) {
		let tagId = params.tagid;
		this.set('slug', tagId);
		return this.store.query('post', {
			tagId
		});
	},
	setupController(controller) {
		this._super(...arguments);
		controller.set('slug', this.get('slug'));
	},
	actions: {
		willTransition() {
			console.log('gone off');
			// debugger;
			// this.controller.get('model').content.map(post => {
			// 	console.log(post.id);
			// 	if (this.store.recordIsLoaded('post', post.id)) {
			// 		console.log('apagando ' + post.id);
			// 		this.store.unloadRecord(post);
			// 	}
			// });
			// this.store.unloadAll('post');
		}	
	}
});