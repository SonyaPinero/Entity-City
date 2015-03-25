require 'pry'
require 'nokogiri'
require 'open-uri'
require 'httparty'
require 'cgi'
require "base64"
require 'json'

# Fetch and parse HTML document
doc_page = HTTParty.get('http://en.wikipedia.org/wiki/List_of_Manhattan_neighborhoods')
doc = Nokogiri::HTML(doc_page)

title = doc.css(".wikitable tr").to_a

# title.each do |i|
# 	location = i.children.text.strip.split("\n")
# 	hood = location[0]
# 	description = location[1]
# 	Neighborhood.create(name: hood, description: description)
# end