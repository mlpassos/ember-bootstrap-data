import Ember from 'ember';

export default Ember.Route.extend({
	slug: '',
	model(params) {
		let tagId = params.tagid;//Ember.get(this.modelFor('tag'), 'tagid');
		console.log('opa: ', tagId);
		this.set('slug', tagId);
		return this.store.query('noticia', {
			tagId
		});
	},
	setupController(controller) {
		this._super(...arguments);
		controller.set('slug', this.get('slug'));
	}
});