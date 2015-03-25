require 'pry'
require 'nokogiri'
require 'open-uri'



# Fetch and parse HTML document
doc = Nokogiri::HTML(open('http://ny.curbed.com/archives/2013/10/31/the_13_most_haunted_buildings_in_new_york_city.php'))

div = doc.css("'.point-detail vcard  selected' div").to_a

# title.each do |i|
# 	location = i.children.text.strip.split("\n")
# 	hood = location[0]
# 	description = location[1]
# 	Neighborhood.create(name: hood, description: description)
# end

# neighborhoods.features.forEach(function(i,x){
# 	console.log(i.properties.BoroName)
# 	})

Pry.start(binding)




