App.routers['neighborhoodsRouter'] = Backbone.Router.extend({
	initialize: function(){
		this.collection = new App.collections.neighborhoodCollection()
		},
		routes: {
			'': 'home',
			'/': 'home',
			'neighborhoods': 'home',
			'neighborhoods/:id': 'neighborhoodContent'
		},
		home: function(){
			this.collection.fetch();
			this.resetContent();
			var neighborhoodCollectionView = new App.collectionViews.neighborhoodCollectionView({
				collection: this.collection
			})
		},
		neighborhoodContent: function(neighborhoodId){
			var neighborhoodView;
			this.resetContent();
			var neighborhood = this.collection.get(neighborhoodId);
			if (neighborhood) {
				neighborhoodView = new App.views.neighborhoodContentView({model: neighborhood});
			} else {
				this.collection.fetch({
					success: function(collection, data){
						neighborhood = collection.get(neighborhoodId);
						neighborhoodView = new App.views.neighborhoodContentView({model: neighborhood});
					}.bind(this)
				})
			}
		},
		resetContent: function(){
			$('#main').empty();
		}
})