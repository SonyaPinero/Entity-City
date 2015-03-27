App.views['neighborhoodListView'] = Backbone.View.extend({
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
    return HandlebarsTemplates.neighborhodLi(this.model.attributes);
  }

})

