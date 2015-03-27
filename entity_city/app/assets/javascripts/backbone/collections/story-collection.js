App.collections['storyCollection'] = Backbone.Collection.extend({
	model: App.models.story,
	url: '/stories'
})