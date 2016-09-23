import Ember from 'ember';

export default Ember.Route.extend({
	slug:'',
	model(params) {
		let id = params.slug;
		this.set('slug', id);
		// console.log('route: ', id);
		// let postContent = this.store.recordIsLoaded('post', id);
		// console.log(postContent);
		// if (postContent == false) {
		return this.store.findRecord('post', id);	
		// } else {
		// 	console.log('post já carregado, chamando cache...');
		// 	return this.store.peekRecord('post', id);
		// }
	}
	// ,
	// actions: {
	// 	willTransition() {
	// 		console.log('gone off single');
	// 		// let slugId = this.get('slug');
	// 		// let st = this.store;
	// 		// st.findRecord('post', slugId).then(function(post) {
	// 		// 	let postId = post.get('id');
	// 		// 	console.log(post.get('title'));
	// 		// 	console.log(post.get('slug'));
	// 		// 	if (st.recordIsLoaded('post', postId)) {
	// 		// 		console.log('unloaded...');
	// 		// 		st.unloadRecord(post);
	// 		// 	}
	// 		// });
	// 		// this.store.unloadAll('post');
	// 	}	
	// }
});