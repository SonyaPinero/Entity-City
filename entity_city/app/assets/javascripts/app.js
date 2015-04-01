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


	// $('body').click(function(e){    
 //    var storyBox = $('#storyInfoBox')
 //    if (e.target.id !== 'storyInfoBox' && e.target.classList[0] !== "Manhattan" ) { 
 //    	if (storyBox.length > 0){
	//     	storyBox.remove();            
 //    	}
 //    }  
	// });

	// var $ghostElement = $('#ghost-box');

 //    var ghostLoop = $(document).ready(function () {
 //        $ghostElement.addClass('mirror');
 //        setInterval(function () {
 //            $ghostElement.removeClass('mirror');
 //        }, 5000);
 //    });

	// $('body').on('click', function(e){
	// 	var parents = $(e.target).parents('.story-content');
	// 	console.log(parents.length);
	// })

})