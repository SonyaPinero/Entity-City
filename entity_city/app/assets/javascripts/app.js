$(function(){
  new App.routers.storiesRouter();
  new App.routers.neighborhoodsRouter();
  Backbone.history.start();
})