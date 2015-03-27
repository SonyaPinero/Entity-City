var NeighborhoodListView = Backbone.View.extend({
	tagName: 'li',
	className: 'neighborhoods-list',
	render: function(){
		this.$el.html(this.template());
		return this;
	},

	initialize: function(){
		this.render();
		this.model.on('change', this.render.bind(this));
	},

	template: function(){
    return HandlebarsTemplates.neighborhoodLi(this.model.attributes);
  }

})

