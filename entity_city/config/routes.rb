Rails.application.routes.draw do

root :to => 'static#home'

resources :stories, :only => [:index, :create, :update, :destroy]
resources :neighborhoods, :only => [:index, :create, :update, :destroy]

end
