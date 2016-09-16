import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	// normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
	// 	let target = primaryModelClass.modelName;
	// 	console.log('app.query: ', target);
	// 	payload = {data:payload};
	// 	payload = payload.data.posts.map(noticia => {
	// 		return noticia;
	// 	});
	// 	payload = {noticiastags: payload};
	// 	return this._super(store, primaryModelClass, payload, id, requestType);
	// },
	modelNameFromPayloadKey: function(payloadKey) {
		console.log('tag.key: ', payloadKey);
		return this._super(payloadKey);
	},
	normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
		let target = primaryModelClass.modelName;
		console.log('app.findRecord: ', target);
		payload = {data:payload};
		// switch(target) {
		// 	case 'noticia':
		// 		payload.data.post.thumburl = payload.data.post.thumbnail_images.full.url;
		// 		payload = payload.data.post;
		// 		payload = {noticias: payload};
		// 		break;
		// 	case 'tag':
				payload.data.tags = payload.data.posts;
				payload = payload.data.tags;
				// primaryModelClass.set('modelName', 'noticia');
				payload = {tag: payload};
		// 		break;
		// 	default:
		// 		break;
		// }
		// console.log(payload);
		return this._super(store, primaryModelClass, payload, id, requestType);
	},
	normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
		let target = primaryModelClass.modelName;
		console.log('app.findAll: ', target);
		payload = {data:payload};
		// switch(target) {
		// 	case 'noticia':
		// 		payload = payload.data.posts.map(noticia => {
		// 			noticia.thumburl = noticia.thumbnail_images.full.url;
		// 			return noticia;
		// 		});
		// 		payload = {noticias: payload};
		// 		console.log(payload);
		// 		break;
		// 	case 'tag':
				payload = payload.data.tags.map(tag => {
					return tag;
				});
				payload = {tag: payload};
		// 		break;
		// 	default:
		// 		break;	
		// }
		
		return this._super(store, primaryModelClass, payload, id, requestType);
	}
});
