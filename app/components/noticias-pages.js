import Ember from 'ember';

export default Ember.Component.extend({
	// prev: '',
	// next: '',
	didRender() {
		this._super(...arguments);
		let current = this.get('current');
		let total = this.get('total');
		// this.set('prev', parseInt(current-1));
		// this.set('next', parseInt(current+1));
		for (var i = total; i >= 1; i--) {
			this.$('ul.pagination')
				.children('li:first-of-type')
				.after('<li><a href="/noticias/' + i + '">' + i + '</a></li>');
				// .after('{{link-to noticias ' + i + '}}');
		}
	}
	// ,
	// setupController(controller) {
	// 	this._super(...arguments);
	// 	controller.set('prev', this.get('prev'));
	// 	controller.set('next', this.get('next'));
	// }
});