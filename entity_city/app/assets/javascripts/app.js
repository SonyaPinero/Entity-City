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

  // $('body').click(function (e) {
  // 	if ($("#storyInfoBox").is(":visible" )) {
  // 		if (e.target.id !== 'storyInfoBox' && e.target.classList[0] !== "Manhattan" && e.target.className('stories-div') !== 'stories-div' && e.target.className('story-content') !== 'story-content' && e.target.className('story-view') !== 'story-view'); {
  // 			$("#storyInfoBox").css('visibility', 'hidden');
  // 		};
  // 	};
  // });




	// $('body').click(function(e){    
 //    var storyBox = $('#storyInfoBox')
 //    if (e.target.id !== 'storyInfoBox' && e.target.classList[0] !== "Manhattan" ) { 
 //    	if (storyBox.length > 0){
	//     	storyBox.remove();            
 //    	}
 //    }  
	// });


	// $('body').on('click', function(e){
	// 	debugger
	// 	var parents = $(e.target).parents('.story-view');
	// 	console.log(parents);
	// })

})