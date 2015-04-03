$(function(){
	var neighborhood;
	var noStories;
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
    var name = e.target.nodeName;
    if (e.target.id !== 'storyInfoBox' && 
    		e.target.classList[0] !== "Manhattan" && 
    		e.target.id !== 'story-view' &&
    		name !== 'P' && 
    		name !== 'H1' && 
    		name !== 'H3' && 
    		name !== 'INPUT' && 
    		name !== 'FORM') { 
    		storyBox.css('visibility', 'hidden');
    	}
	});

function clickMe() {
	$('body').click(function(e){
		debugger
		console.log(e.target);
		})
	}
	clickMe();


})