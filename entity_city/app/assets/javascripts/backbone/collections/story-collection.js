var StoryCollection = Backbone.Collection.extend({
	model: Story,
	url: '/stories'
})