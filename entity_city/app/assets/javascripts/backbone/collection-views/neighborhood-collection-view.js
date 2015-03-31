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

		var neighborhoodCollView = this;

		var width = 960;
		    height = 900;

		var svg = d3.select(this.el)
		    .attr("width", width)
		    .attr("height", height)
		    .attr("viewBox", "0 0 1100 50")

		var projection = d3.geo.mercator()
		            .center([-73.94, 40.70])
		            .scale(225000)
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