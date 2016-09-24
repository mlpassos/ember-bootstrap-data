import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://www.secom.pa.gov.br/site/api',
	urlForFindAll(modelName) {
		console.log('post.findAll');
		return `${this.get('host')}/get_recent_posts/?count=-1`;
	},
	urlForFindRecord(id, modelName) {
		console.log('post.findRecord');
		return `${this.get('host')}/get_post/?slug=${id}`;
	},
	urlForQuery(query, modelName) {
		console.log('post.query');
		console.log(query);
		for (var key in query) {
		  // via noticias
		  if (key == "count") {
		  	console.log(key);
		  	return `${this.get('host')}/get_recent_posts/?count=-1`;
		  	break;
		  }
		}
		// via tag
		console.log(key);
		return `${this.get('host')}/get_tag_posts/?slug=${query.tagId}&count=-1`;
	}
});