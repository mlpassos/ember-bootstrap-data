import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
	slug: attr('string'),
	title: attr('string'),
	content: attr('string'),
	excerpt: attr('string'),
	thumbnail: attr('string'),
	// thumbnailImages: DS.hasMany('full', { async: true })
	thumburl: attr('string')
	// featuredimage: attr('string')
});
