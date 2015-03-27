// var StoryContentView = Backbone.View.extend({
// 	tagName: 'div',
// 	className: 'story-content',
// 	events:{
// 			"click": 'renderStory'
// 	},//events
// 	render: function(){
// 		this.$el.html(this.template());
// 		$('#main').append(this.$el);
// 		return this;
// 	},
// 	initialize: function(options){
// 		this.render();
// 	},
// 	template: function(){
// 		return HandlebarsTemplates.storyContentShow(this.model.attributes);
// 	},
// 	renderStory: function(){
// 		this.$el.html(this.template());
// 		console.log("IT HAS BEEN RENDERED???");
// 	}

// })

var StoryView = Backbone.View.extend({
	tagName: 'div',
	className: 'story-content',
	events:{
			"click": 'render'
	},//events
	renderTitle: function(){
		this.$el.html(this.templateLi());
	},
	initialize: function(options){
		this.storyDisplay = false;
		this.renderTitle();
	},
	templateStory: function(){
		return HandlebarsTemplates.storyContentShow(this.model.attributes);
	},
	templateLi: function(){
		return HandlebarsTemplates.storyLi(this.model.attributes);
	},
	renderStory: function(){
		this.$el.html(this.templateStory());
	},
	render: function(){
		if(this.storyDisplay = true){
			this.renderStory();
		}else{
			this.renderTitle();
		}
		this.storyDisplay = !(this.storyDisplay);
	}


})