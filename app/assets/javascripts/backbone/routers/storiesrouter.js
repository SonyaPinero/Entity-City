// App.routers['storiesRouter'] = Backbone.Router.extend({
// 	initialize: function(){
// 		this.collection = new App.collections.storyCollection()
// 		},
// 		routes: {
// 			'': 'home',
// 			'/': 'home',
// 			'stories': 'home',
// 			'stories/:id': 'storyContent'
// 		},
// 		home: function(){
// 			this.collection.fetch();
// 			this.resetContent();
// 			var storyCollectionView = new App.collectionViews.storyCollectionView({
// 				collection: this.collection
// 			})
// 		},
// 		storyContent: function(storyId){
// 			var storyView;
// 			this.resetContent();
// 			var story = this.collection.get(storyId);
// 			if (story) {
// 				storyView = new App.views.storyContentView({model: story});
// 			} else {
// 				this.collection.fetch({
// 					success: function(collection, data){
// 						story = collection.get(storyId);
// 						storyView = new App.views.storyContentView({model: story});
// 					}.bind(this)
// 				})
// 			}
// 		},
// 		resetContent: function(){
// 			$('#main').empty();
// 		}
// })