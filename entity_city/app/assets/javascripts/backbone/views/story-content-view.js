App.views['storyContentView'] = Backbone.View.extend({
	tagName: 'div',
	className: 'story-content',
	render: function(mode){
		mode = mode || 'Show'
		this.$el.html(this.template(mode));
		$('#main').append(this.$el);
		return this;
	},
	initialize: function(){
		this.render();
	},
	template: function(mode){
		return HandlebarsTemplates['storyContent' + mode](this.model.attributes);
	},
	events: {
	
	},

})