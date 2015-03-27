class StoryController < ApplicationController

	def create 
		story = Story.create(story_params)
		render :json => story 
	end

	private 

	def story_params 
		params.require(:story).permit(:title, :content, :neighborhood_id, :address)
	end

end