App.collectionViews['storyCollectionView'] = Backbone.View.extend({
	tagName: 'div',
	className: 'stories',
	comparator: function(model){
		console.log('hit comparator');
		return model.get('id');
	},
	render: function(){
		this.$el.empty().html(this.template());
		this.collection.models.forEach(function(model){
			var newView = new App.views.storyListView({model: model});
			this.$el.children('.stories-list').append(newView.$el);
		}.bind(this))
		$('#main').append(this.$el);
		return this;
	},
	initialize: function(){
		this.render();
		this.listenTo(this.collection, 'add', this.render.bind(this, {wait: true}))
	},
	events: {
		'submit #new-story': 'createStory'
	},
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