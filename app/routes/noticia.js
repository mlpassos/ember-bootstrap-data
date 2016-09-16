import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		let id = params.slug;
		console.log('route: ', id);
		return this.store.findRecord('post', id);
	}
});