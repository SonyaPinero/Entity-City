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
			"click": 'renderStory',
			"click .story-view": 'hideStory'
	},//events
	
	initialize: function(options){
		this.renderTitle();
	},

	emptyMain: function(){
		var mainDiv = $('#storyInfoBox')
		mainDiv.empty();
	},

	renderTitle: function(){
		this.$el.html(this.templateLi());
	},
	
	templateStory: function(){
		return HandlebarsTemplates.storyContentShow(this.model.attributes);
	},
	templateLi: function(){
		return HandlebarsTemplates.storyLi(this.model.attributes);
	},
	renderStory: function(){
		$('#fakeadd').remove();
		var storyDiv = $('.story-content');
		storyDiv.empty();
		this.$el.html(this.templateStory());
	},

	hideStory: function(){
		this.emptyMain();
		this.resetDiv();
		this.renderTitle();
	},

	resetDiv: function(){
		// var stories = new StoryCollection();
		// 	stories.fetch({
		// 	success: function(){
		// 			var storiesView = new StoryCollectionView({
		// 			collection: stories
		// 		}) 
		// 	}
		// })
		var stories = new StoryCollection();
			stories.fetch({
				success: function(collection, data){
					collection.neighborhoodId = neighborhood.id;
					var storiesView = new StoryCollectionView({
						collection: collection
					})
				}
		  })
	}


	// render: function(){
	// 	if(this.storyDisplay == false){
	// 		this.renderStory();
	// 	}else{
	// 		this.renderTitle();
	// 	}
	// 	// this.storyDisplay = !(this.storyDisplay);
	// }

})