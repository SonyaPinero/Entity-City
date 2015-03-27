var NeighborhoodCollectionView = Backbone.View.extend({
	tagName: 'ul',
	className: 'neighborhoods-list',
	comparator: function(model){
		console.log('hit comparator');
		return model.get('id');
	},
	render: function(){
		this.$el.empty().html(this.template());
		this.collection.models.forEach(function(model){
			var newView = new NeighborhoodListView({model: model});
			this.$el.append(newView.$el);
		}.bind(this))
		$('#main').append(this.$el);
		return this;
	},
	initialize: function(){
		this.render();
		this.listenTo(this.collection, 'add', this.render.bind(this, {wait: true}))
	},
	template: function(){
    return HandlebarsTemplates.neighborhoodCollectionView();
  },
	events: {
		
	}
	
})