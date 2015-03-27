class StoriesController < ApplicationController

	def index 
		respond_to do |format|
			format.html 
			format.json { render :json => Story.all}
		end
	end

	def create 
		story = Story.create(story_params)
		render :json => story 
	end

	private 

	def story_params 
		params.require(:story).permit(:title, :content, :neighborhood_id, :address)
	end

end