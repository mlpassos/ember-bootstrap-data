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
	}
});