App.collections['neighborhoodCollection'] = Backbone.Collection.extend({
	model: App.models.neighborhood,
	url: '/neighborhoods'
})