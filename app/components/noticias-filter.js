import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		handleFilterEntry() {
			let value = this.get('value');
			console.log(value);
		}
	}
});
