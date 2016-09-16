import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: {
	  categories: { embedded: 'always' },
	  tags: { embedded: 'always' }
	},
	modelNameFromPayloadKey: function(payloadKey) {
		console.log('noticia.key: ', payloadKey);
		// if (payloadKey === 'noticiastags') {
		// 	return this._super('noticias');//.replace('blog/', ''));
		// } else {
		// 	return this._super(payloadKey);
		// }  
		return this._super(payloadKey);
	},
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		let target = primaryModelClass.modelName;
		switch(requestType) {
			case 'query':
				console.log('noticia.query: ', target);
				payload = {data:payload};
				payload = payload.data.posts.map(noticia => {
					return noticia;
				});
				payload = {noticiastags: payload};
				break;
			case 'findAll':
				console.log('noticia.findAll: ', target);
				payload = {data:payload};
				payload = payload.data.posts.map(noticia => {
					return noticia;
				});
				payload = {noticias: payload};
				break;
			case 'findRecord':
				console.log('noticia.findRecord: ', target);
				payload = {data:payload};
				payload = payload.data.post;
				payload = {noticias: payload};
				break;
			default:
				console.log('default');
		}
		return this._super(store, primaryModelClass, payload, id, requestType);
	}
});