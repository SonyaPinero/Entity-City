var StoryListView = Backbone.View.extend({
	tagName: 'li',
	className: 'stories-li',
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