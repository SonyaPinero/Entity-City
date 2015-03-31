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
		      .on('mouseover', function(feature){
                        d3.select(this)
                        // var xPosition = d3.event.pageX + 'px'
                        // var yPosition = d3.event.pageY + 'px'
                        // console.log('xpos:' + xPosition, 'ypos' + yPosition)
                        svg.append('text')
                            .attr('id', 'tooltip')
                            .attr('x', xPosition)
                            .attr('y', yPosition)
                            // .attr('text-anchor', 'middle')
                            .attr('font-family', 'sans-serif')
                            .attr('font-size', '20px')
                            .attr('font-weight', 'bold')
                            .text(feature.properties.NTAName);
                          })
          .on('mouseout', function(){
                        d3.select('#tooltip').remove().transition();
                    });



		      // .on('mouseover', function(d){
		      // 		var neighborhood = neighborhoodCollView.collection.findWhere({name: d.properties.NTAName})
		      // 		var stories = new StoryCollection().fetch({
		      // 			// async: false
		      // 			success: function(collection, data){
		      // 				console.log(collection.where({neighborhood_id: neighborhood.id}).length)
		      // 			}
		      // 		})
		      // 	});
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