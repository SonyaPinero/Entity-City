class StoriesController < ApplicationController

	def index 
		# Story.all.where(published: true)
		respond_to do |format|
			format.html 
			format.json { render :json => Story.all.where(published: true)}
		end
	end

	def create 
		story = Story.new(story_params)
		[:title, :content, :address].each do |attr|
			story[attr] = ActionView::Base.full_sanitizer.sanitize(story[attr])
		end
		story.save
		render :json => story 
	end

	# /stories/unpublished  (for you: /?user=sonya)
	# def unpublished
	# 	if param[:user] == "sonya"
	# 		@stories = Story.where(published: false)
	# 	else
	# 		redirect_to :index
	# 	end
	# end

	# def update .... 
	# 	story = Story.find(params[:id])
	# 	story.update(published: true)
	# end

	private 

	def story_params 
		params.require(:story).permit(:title, :content, :neighborhood_id, :address)
	end

end