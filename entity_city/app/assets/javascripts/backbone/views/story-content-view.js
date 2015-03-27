var StoryContentView = Backbone.View.extend({
	tagName: 'div',
	className: 'story-content',
	render: function(){
		this.$el.html(this.template());
		$('#main').append(this.$el);
		return this;
	},
	initialize: function(){
		this.render();
	},
	template: function(){
		return HandlebarsTemplates.storyContentShow(this.model.attributes);
	},
	events: {
	
	},

})