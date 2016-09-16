import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://www.instadev.com.br/ember-bootstrap-api',
	urlForFindAll(modelName) {
		// console.log('adapter:', modelName);
		switch(modelName) {
			case 'noticia':
				return `${this.get('host')}/recent-posts.php`;
				// break;
			case 'tag':
				return `${this.get('host')}/tags.php`;
				// break;
			default:
				return this._super(...arguments);
		}
	},
	urlForFindRecord(id, modelName) {
		console.log('adapter: ', id);
		switch(modelName) {
			case 'noticia':
				return `${this.get('host')}/post-slug.php?slug=${id}`;
				// break;
			case 'tag':
				return `${this.get('host')}/tag-slug.php?slug=${id}`;
			default:
				return this._super(...arguments);
		}
	},
	urlForQuery(query, modelName) {
		console.log('modelname: ', modelName);
		switch(modelName) {
			case 'noticia':
				return `${this.get('host')}/tag-slug.php?slug=${query.tagId}`;
				// break;
			default:
				return this._super(...arguments);
		}
	}
});