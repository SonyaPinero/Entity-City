(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['app/assets/javascripts/templates/neighborhoodCollectionView'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div>\n	<h1>"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n</div>";
},"useData":true});
templates['app/assets/javascripts/templates/neighborhoodLi'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a href=\"#neighborhoods/"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" >"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>";
},"useData":true});
templates['app/assets/javascripts/templates/storyCollectionView'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<!-- <form id='new-story'>\n  <label for=\"title\">Title</label>\n  <input type=\"text\" name=\"title\"><br>\n\n  <label for=\"address\">Address</label>\n  <input type=\"text\" name=\"address\"><br>\n\n  <label for=\"content\">Content</label>\n  <input type=\"text\" name=\"content\"><br>\n\n  <input type=\"submit\">\n</form> -->";
},"useData":true});
templates['app/assets/javascripts/templates/storyContentShow'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div>\n	<h1>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\n	<h1>"
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.story : depth0)) != null ? stack1.neighborhood : stack1), depth0))
    + "</h1>\n	<h3>"
    + alias3(((helper = (helper = helpers.address || (depth0 != null ? depth0.address : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"address","hash":{},"data":data}) : helper)))
    + "</h3>\n	<p>"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p>\n</div>";
},"useData":true});
templates['app/assets/javascripts/templates/storyLi'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<p>"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});
})();