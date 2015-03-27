App.views['storyListView'] = Backbone.View.extend({
	tagName: 'li',
	className: 'stories-list',
	render: function(){
		this.$el.html(this.template());
		return this;
	},

	initialize: function(){
		this.render();
		this.model.on('change', this.render.bind(this))
	},

	template: function(){
    return HandlebarsTemplates.storyLi(this.model.attributes);
  }

})