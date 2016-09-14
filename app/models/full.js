import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
	url: attr('string'),
	width: attr('string'),
	height: attr('string')
	// noticia: DS.belongsTo('noticia', { async: true })
});