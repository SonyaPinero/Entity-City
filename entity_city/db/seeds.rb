# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'nokogiri'
require 'open-uri'

Neighborhood.delete_all

# Fetch and parse HTML document
doc = Nokogiri::HTML(open('http://en.wikipedia.org/wiki/List_of_Manhattan_neighborhoods'))


title = doc.css(".wikitable tr").to_a

# title.each do |i|
# 	location = i.children.text.strip.split("\n")
# 	hood = location[0]
# 	description = location[1]
# 	Neighborhood.create(name: hood, description: description)
# end

title.each do |i|
	if i.children[1].keys[0] != 'style'
		location = i.children.text.strip.split("\n")
		hood = location[0]
		description = location[1]
		Neighborhood.create(name: hood, description: description)
	end
end