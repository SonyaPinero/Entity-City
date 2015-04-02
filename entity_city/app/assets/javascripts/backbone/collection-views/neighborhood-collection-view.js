var NeighborhoodCollectionView = Backbone.View.extend({
	// tagName: 'ul',
	// className: 'neighborhoods-list',
	comparator: function(model){
		console.log('hit comparator');
		return model.get('id');
	},
	
	render: function(){
		// this.$el.empty().html(this.template());
		// this.collection.models.forEach(function(model){
		// 	var newView = new NeighborhoodListView({model: model});
		// 	this.$el.append(newView.$el);
		// }.bind(this))
		// $('#main').append(this.$el);
		// return this;

		var currentNCV = this;	

		var storyTotalDiv = d3.select('body')
			.append('div')
			.attr('id', 'storyTotalDiv')

		var storyInfoBox = d3.select('body')
			.append('div')
			.attr('id', 'storyInfoBox')


		var neighborhoodCollView = this;

		var width = 1000;
		    height = 1500;

		var svg = d3.select(this.el)
		    .attr("width", width)
		    .attr("height", height)
		    .attr("viewBox", "0 0 1100 650")


		var projection = d3.geo.mercator()
		            .center([-73.94, 40.70])
		            .scale(300000)
		            .translate([(width/2), (height)/2]);

		d3.json("coords.json", function(error, ny) {
		  
		  if (error) return console.error(error);
		  ny.features.forEach(function(feature){
		    svg.append("path")
		      .datum(feature)
		      .attr("d", d3.geo.path().projection(projection))
		      .attr("id", feature.properties.NTAName)
		      .attr("class", feature.properties.BoroName)
		      .on('mousemove', function(d){
							var neighborhood = neighborhoodCollView.collection.findWhere({name: d.properties.NTAName});
		      		var stories = new StoryCollection().fetch({
		      					success: function(collection, data){
		      					currentNCV
		      					.storyTotal = collection.where({neighborhood_id: neighborhood.id}).length
		      					}
		      		})
								return storyTotalDiv
									.style('left', d3.event.pageX+10 + 'px')
									.style('top', d3.event.pageY-10 + 'px')
									.style('visibility', 'visible') 
                  .text(currentNCV
                  	.storyTotal);
		      	})
					.on('mouseout', function(){
            return storyTotalDiv.style('visibility', 'hidden')
          })
					.on('click', function(d){
						storyTotalDiv.style('visibility', 'hidden')
						var storyDiv = $('.stories-div');
						storyDiv.remove();
						var storyContent = $('.story-content');
						storyContent.remove();
						
						// finding the neighborhood_id
						neighborhood = neighborhoodCollView.collection.findWhere({name: d.properties.NTAName});
		      		
		      		// now I need some stories
		      		var stories = new StoryCollection();
							stories.fetch({
									success: function(collection, data){
											// var neighborhoodStories = collection.where({neighborhood_id: neighborhood.id})
											collection.neighborhoodId = neighborhood.id;
											var storiesView = new StoryCollectionView({
												collection: collection
											})
									}
		      		})
		      		if (currentNCV.storyTotal == 0) {
		      			return storyInfoBox
									.style('left', d3.event.pageX+10 + 'px')
						  		.style('top', d3.event.pageY-10 + 'px')
									.style('visibility', 'visible')
                  .text('This neighborhood does not contain any stories');
              }
		      		return storyInfoBox
		      			.text('')
								.style('left', d3.event.pageX+10 + 'px')
						  	.style('top', d3.event.pageY-10 + 'px')
								.style('visibility', 'visible') 
					});
		  })
		});
	
	},

	initialize: function(){
		this.render();
		// this.listenTo(this.collection, 'add', this.render.bind(this, {wait: true}))
	},
	template: function(){
    return HandlebarsTemplates.neighborhoodCollectionView();
  },
	events: {
		
	}
	
})