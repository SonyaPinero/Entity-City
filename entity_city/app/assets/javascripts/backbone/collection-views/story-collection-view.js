var StoryCollectionView = Backbone.View.extend({
	tagName: 'div',
	className: 'stories-div',

	comparator: function(model){
		console.log('hit comparator');
		return model.get('id');
	},
	render: function(){
		// this.$el.empty().html(this.template());
		this.collection.storiesByNeighborhood().forEach(function(model){
		// this.collection..forEach(function(model){
			// var newView = new StoryListView({model: model});
			var newView = new StoryView({model:model});
			this.$el.append(newView.$el);
		}.bind(this))
		$('#storyInfoBox').append(this.$el);

		$('.stories-div').append("<span id='fakeadd'><p>"+ 'Add a story' + "</p></span>");
			
		return this;
	},
	initialize: function(){
		this.render();
		this.listenTo(this.collection, 'add', this.render.bind(this, {wait: true}))
	},
	template: function(){
    return HandlebarsTemplates.storyCollectionView();
  },

  renderForm: function() {
  	if (($('#storyInfoBox')[0].childNodes[0]).length == 46) {
  		var box = ($('#storyInfoBox')[0].childNodes[0])
  		box.remove();
  		this.$el.empty().html(this.template());
  	};
  	
  	this.$el.empty().html(this.template());
	},

	resetDiv: function(){
				
					var stories = new StoryCollection();
					stories.fetch({
						success: function(collection, data){
							collection.neighborhoodId = neighborhood.id;
							var storiesView = new StoryCollectionView({
								collection: collection
							})
						}
		  		})

	},

	clearForm: function(){
		var newBox = $('#new-story');
		newBox.remove();
	},

	events: {
		'click p': 'renderForm',
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

		var formData = e.target.elements;

		var storyData = 
			{
				title: formData.title.value,
				address: formData.address.value,
				content: formData.content.value,
				neighborhood_id: neighborhood.id

			}
			
					this.collection.create(storyData);	
					this.clearForm();
		}


})