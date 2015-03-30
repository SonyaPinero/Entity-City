$(function(){
	// var neighborhoods = new NeighborhoodCollection();
	// neighborhoods.fetch({
	// 	success: function(){
	// 		var neighborhoodsView = new NeighborhoodCollectionView({
	// 			collection: neighborhoods
	// 		}) 
	// 	}
	// });

	$('svg').click(function(){
		mainDiv = $('#main')
		mainDiv.empty();

	var stories = new StoryCollection();
		stories.fetch({
			success: function(){
				var storiesView = new StoryCollectionView({
					collection: stories
				}) 
			}
		});
	})

    // $(document).click(function(e){
    //     var x = e.pageX + 'px';
    //     var y = e.pageY + 'px';
    //     var div = $('#main').css({
    //         "position": "absolute",                    
    //         "left": x,
    //         "top": y
    //     });
    //     $(document.body).append(div);        
    // });

 

 $(document).ready(function() {
        var loops = 10;
        function removeAddClass() {
            $("#ghost-box").toggleClass("mirror");
            if (--loops > 0)
                 setTimeout(removeAddClass, 5000);
        }
        removeAddClass();
    });

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