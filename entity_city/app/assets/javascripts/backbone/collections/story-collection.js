var StoryCollection = Backbone.Collection.extend({
	model: Story,
	url: '/stories',
	storiesByNeighborhood: function(){
		return this.where({neighborhood_id: this.neighborhoodId})
	}
})

