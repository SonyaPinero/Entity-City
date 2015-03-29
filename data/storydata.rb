require 'mechanize'
require 'pry'
require 'nokogiri'
require 'open-uri'


# Fetch and parse HTML document
# doc = Nokogiri::HTML(open('http://www.complex.com/pop-culture/2012/10/10-places-in-nyc-that-are-definitely-haunted/new-amsterdam-theatre'))

doc = Nokogiri::HTML(open('http://ny.curbed.com/archives/2013/10/31/the_13_most_haunted_buildings_in_new_york_city.php'))


# agent = Mechanize.new
# agent.get("http://ny.curbed.com/archives/2013/10/31/the_13_most_haunted_buildings_in_new_york_city.php")


# caption = agent.page.parser.css('div')




story = doc.xpath("//div[contains(@class,'point-detail')]")

Pry.start(binding)

# doc = Nokogiri::HTML(open('http://www.complex.com/pop-culture/2012/10/10-places-in-nyc-that-are-definitely-haunted/new-amsterdam-theatre'))

# story = doc.css("article").text

# story = doc.css("article")

# stuff = story.css("script")

# hello = stuff.css("p")



# title.each do |i|
# 	location = i.children.text.strip.split("\n")
# 	hood = location[0]
# 	description = location[1]
# 	Neighborhood.create(name: hood, description: description)
# end





