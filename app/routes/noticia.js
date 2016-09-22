import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		let id = params.slug;
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
});