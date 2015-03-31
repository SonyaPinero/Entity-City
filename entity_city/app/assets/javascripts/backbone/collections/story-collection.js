var StoryCollection = Backbone.Collection.extend({
	model: Story,
	url: '/stories',
	storiesByNeighborhood: function(neighborhoodId){
		return this.where({neighborhoodId: neighborhoodId})
	}
})