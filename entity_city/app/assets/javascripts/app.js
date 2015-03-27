$(function(){
	// var neighborhoods = new NeighborhoodCollection();
	// neighborhoods.fetch({
	// 	success: function(){
	// 		var neighborhoodsView = new NeighborhoodCollectionView({
	// 			collection: neighborhoods
	// 		}) 
	// 	}
	// });

var stories = new StoryCollection();
	stories.fetch({
		success: function(){
			var storiesView = new StoryCollectionView({
				collection: stories
			}) 
		}
	});

})