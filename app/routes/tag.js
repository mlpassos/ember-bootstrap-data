import Ember from 'ember';

export default Ember.Route.extend({
	slug: '',
	model(params) {
		let tagId = params.tagid;//Ember.get(this.modelFor('tag'), 'tagid');
		console.log('opa: ', tagId);
		this.set('slug', tagId);
		// se nao tiver listados os posts, pegar via get
		// caso ja tenha ido em notícias, pegar do store
		return this.store.query('post', {
			tagId
		});
	},
	setupController(controller) {
		this._super(...arguments);
		controller.set('slug', this.get('slug'));
	}
});