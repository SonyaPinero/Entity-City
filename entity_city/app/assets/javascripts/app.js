$(function(){
	var neighborhood;
	var stories;
	var storiesView;

	var neighborhoods = new NeighborhoodCollection();
	neighborhoods.fetch({
		success: function(){
			var neighborhoodsView = new NeighborhoodCollectionView({
				collection: neighborhoods,
				el: $('svg')
			}) 
		}
	});

	// var stories = new StoryCollection();
	// 	stories.fetch({
	// 		success: function(){
	// 			var storiesView = new StoryCollectionView({
	// 				collection: stories
	// 			}) 
	// 		}
	// 	});

	var loops = 10;
  function removeAddClass() {
		$("#ghost-box").toggleClass("mirror");
	  if (--loops > 0) {
	  	setTimeout(removeAddClass, 5000);
	  }
	}
	removeAddClass();


$('body').click(function(e){
    var storyBox = $('#storyInfoBox')
    if (e.target.id !== 'storyInfoBox' && e.target.classList[0] !== "Manhattan" && e.target.nodeName !== 'P' && e.target.nodeName !== 'H1' && e.target.nodeName !== 'H3') { 
    		storyBox.css('visibility', 'hidden');
    	}
	});

})