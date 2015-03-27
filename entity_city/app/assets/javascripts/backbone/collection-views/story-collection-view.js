var StoryCollectionView = Backbone.View.extend({
	tagName: 'ul',
	className: 'stories-ul',
	comparator: function(model){
		console.log('hit comparator');
		return model.get('id');
	},
	render: function(){
		this.$el.empty().html(this.template());
		this.collection.models.forEach(function(model){
			// var newView = new StoryListView({model: model});
			var newView = new StoryView({model:model});
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
    return HandlebarsTemplates.storyCollectionView();
  },
	events: {
		'submit #new-story': 'createStory'//,
		//"click .stories-li": "showStory"
	},

  // showStory: function(){
  // 		this.collection.models.forEach(function(model){
		// 		var newStory = new StoryContentView({model: model});
		// 		this.$el.children('stories-li').append(newStory.$el);
		// }.bind(this))
		// $('#main').append(this.$el);
		// return this;
  // },

  //   showStory: function(e){
  //   	e.preventDefault();
  //   	var model = this.collection.at($(e.currentTarget).data('id') - 1)
		// 	var newStory = new StoryContentView({model: model});
		// 	$(e.currentTarget).append(newStory.$el);
		// $('#main').append(this.$el);
		// return this;
  // },

		createStory: function(e){
		e.preventDefault();

		var formData = e.currentTarget.elements;

		this.model.save(
			{
				title: formData.title.value,
				address: formData.address.value,
				content: formData.content.value,
				neighborhood_id: formData.neighborhood_id.value
			},
			{
				success: function(){
					this.render('Show');
				}.bind(this)
			})
	}


})