import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
	  categories: { embedded: 'always' },
	  tags: { embedded: 'always' }
	},
	modelNameFromPayloadKey: function(payloadKey) {
		console.log('noticia.key: ', payloadKey);
		return this._super(payloadKey);
	},
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		let target = primaryModelClass.modelName;
		switch(requestType) {
			case 'query':
				console.log('noticia.query: ', target);
				payload = payload.posts;
				// .map(noticia => {
				// 	return noticia;
				// });
				payload = {post: payload};
				break;
			case 'findAll':
				console.log('noticia.findAll: ', target);
				payload = payload.posts;
				// .map(post => {
				// 	return post;
				// });
				payload = {post: payload};
				break;
			case 'findRecord':
				console.log('noticia.findRecord: ', target);
				payload = payload.post;
				payload = {post: payload};
				break;
			default:
				console.log('default');
		}
		return this._super(store, primaryModelClass, payload, id, requestType);
	}
});