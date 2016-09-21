import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://www.instadev.com.br/ember-bootstrap-api',
	// shouldReloadAll: function(store, snapshotRecordArray) {
	//   // var snapshots = snapshotArray.snapshots();
	//   console.log('store: ', snapshotRecordArray.length);
	//   if (snapshotRecordArray.length > 0) {
	//   	console.log('aqui maior que zero');
	//   	return true;
	//   } else {
	//   	return false;
	//   }
	// },
	urlForFindAll(modelName) {
		console.log('post.findAll');
		return `${this.get('host')}/recent-posts.php`;
	},
	urlForFindRecord(id, modelName) {
		console.log('post.findRecord');
		return `${this.get('host')}/post-slug.php?slug=${id}`;
	},
	urlForQuery(query, modelName) {
		console.log('post.query');
		return `${this.get('host')}/tag-slug.php?slug=${query.tagId}`;
	}
});