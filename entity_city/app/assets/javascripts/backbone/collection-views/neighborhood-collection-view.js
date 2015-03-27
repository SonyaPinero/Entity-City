App.collectionViews['neighborhoodCollectionView'] = Backbone.View.extend({
	tagName: 'div',
	className: 'neighborhoods',
	comparator: function(model){
		console.log('hit comparator');
		return model.get('id');
	},
	render: function(){
		this.$el.empty().html(this.template());
		this.collection.models.forEach(function(model){
			var newView = new App.views.storyListView({model: model});
			this.$el.children('.neighborhoods-list').append(newView.$el);
		}.bind(this))
		$('#main').append(this.$el);
		return this;
	},
	initialize: function(){
		this.render();
		this.listenTo(this.collection, 'add', this.render.bind(this, {wait: true}))
	},
	events: {
		
	}
	
})