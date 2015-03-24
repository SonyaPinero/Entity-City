require 'pry'
require 'nokogiri'
require 'open-uri'
require 'httparty'
require 'cgi'
require "base64"
require 'json'

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
		puts hood = location[0]
		puts description = location[1]
	end
end

Pry.start(binding)

# Pry(main)> title[1].children.text.strip.split("\n")
# # [
# #     [0] "Upper Manhattan",
# #     [1] "Above 96th Street"
# # ]
# Pry(main)> title[0].children[1].keys[0]
# # "style"



# Pry.start(binding)


# Upper Manhattan
# Above 96th Street


# Marble Hill
# Physically located on the mainland


# Inwood
# Above Dyckman Street


# Fort George
# Between Nagle Avenue, Dyckman St and 192nd Street (includes Broadway south to Fairview Avenue)


# Washington Heights
# 155th Street to Dyckman Streets


# Hudson Heights (part of Washington Heights)
# 181rd Street to Fort Tryon Park; Broadway to the Hudson River


# West Harlem
# 125th to 155th Streets; St. Nicholas Avenue to Broadway


# Hamilton Heights
# 135th to 155th Streets; Broadway to the Hudson River


# Manhattanville
# 125th to 135th Streets; St. Nicholas Avenue to the Hudson River


# Morningside Heights, SoHa (or "South of Harlem")
# 110th to 125th Streets; Morningside to Riverside Drives


# Central Harlem
# 110th to 155th Streets; Park to St. Nicholas Avenues


# Harlem
# 96th to 141st Streets (east), 110th to 155th Streets (central), 125th to 155th Streets (west)


# Strivers' Row (Central Harlem)
# 137th to 138th Streets; 7th to 8th Avenues


# Astor Row (Central Harlem)
# Centered at West 130th Street


# Sugar Hill (Central Harlem)
# 125th to 155th Streets; Edgecombe to Amsterdam Avenues


# Marcus Garvey Park, Mount Morris Historical District
# 120th to 124th Streets; Madison to 5th Avenues


# Le Petit Senegal (Little Senegal)
# 116th Street east of Morningside Park


# East Harlem (Spanish Harlem)
# 96th to 141st Streets; the East River to 5th Avenue


# Upper East Side, Silk Stocking District
# East 59th to 96th Streets; the East River to 5th Avenue (and 96th to 110th Streets along 5th Avenue)


# Lenox Hill
# 60th to 77th Streets; the East River to Park Avenue


# Carnegie Hill
# 86th to 98th Streets; 3rd to 5th Avenues (centered at East 91st Street and Park Avenue)


# Yorkville
# 79th to 96th Street; the East River to 3rd Avenue (centered at East 86th Street and 3rd Avenue)


# Upper West Side
# 59th to 110th Streets; Central Park West to the Hudson River


# Manhattan Valley, Bloomingdale District
# 96th to 110th Streets; Central Park West to Broadway


# Lincoln Square (once San Juan Hill)
# 65th to 66th Streets; Columbus Avenue to Broadway


# Midtown
# 34th to 59th Streets


# Columbus Circle
# 59th Street and 8th Avenue


# Sutton Place
# 53rd to 59th Streets; 1st Avenue to Sutton Place


# Rockefeller Center
# 49th to 51st Streets; 5th to 6th Avenues


# Diamond District
# 47th Street from 5th to 6th Avenues


# Theater District
# 42nd to 53rd Streets; 6th to 8th Avenues


# Turtle Bay
# 42nd to 53rd Streets; East River to Lexington Avenue


# Midtown East
# 42nd to 59th Streets; East River to 5th Avenue


# Midtown
# 40th to 59th Streets; 3rd to 9th Avenues


# Tudor City
# 40th to 43rd Streets; 1st to 2nd Avenues


# Little Brazil
# 46th Street from 5th to 6th Avenues


# Times Square
# 39th to 52nd Streets; 7th to 9th Avenues


# Hudson Yards
# 28th to 43rd Streets; 7th Avenue to the Hudson River


# Midtown West
# 34th to 59th Streets; 5th Avenue to the Hudson River


# Hell's Kitchen, Clinton
# 34th to 57th Streets; 8th to the Hudson River


# Garment District
# 34th to 42nd Streets and 5th to 9th Avenues


# Herald Square
# 34th Street and 6th Avenue


# Koreatown
# 31st to 36th Streets; 5th to 6th Avenues


# Murray Hill
# 34th to 40th Streets; 3rd to Madison Avenues


# Tenderloin
# 23rd Street to 42nd Streets; 5th to 7th Avenues


# Madison Square
# 23rd to 26th Streets; 5th Avenue to Broadway


# Flower District
# 26th to 28th Streets; 6th to 7th Avenues


# Brookdale
# 25th Street from FDR Drive to 1st Avenue


# Hudson Yards
# 30th to 34th Streets; the Hudson River to Tenth Avenue


# Kips Bay
# 23rd to 34th Streets; the East River to 3rd Avenue


# Rose Hill
# Between Murray Hill to the north and Gramercy Park to the south


# NoMad
# 23rd Street to 34th Street; Madison Avenue and Second Avenue


# Peter Cooper Village† (former Gas House district)
# 20th to 23rd Streets; Avenue C to 1st Avenue


# Chelsea
# 14th to 34th Streets; 7th Avenue to the Hudson River


# Flatiron District, Toy District, Photo District
# 16th to 27th Streets; Park Avenue South to 6th Avenue


# Gramercy Park
# 14th to 23rd Streets; 1st Avenue to Park Avenue South


# Stuyvesant Square
# 15th to 18th Streets; 1st to 3rd Avenues


# Union Square
# 14th to 17th Streets; 4th Avenue to University Place


# Stuyvesant Town† (former Gas House district)
# 14th to 20th Streets; Avenue C to 1st Avenue


# Meatpacking District
# Gansevoort to 15th Streets; Hudson Street to the Hudson River


# Waterside Plaza
# 25th to 29th Streets; the East River to FDR Drive


# Downtown Manhattan
# Below 14th Street


# Little Germany (historic)
# 7th to 10th Streets; Avenues A to B


# Alphabet City and Loisaida
# Houston to 14th Streets; FDR Drive to Avenue A


# East Village
# Houston to 14th Streets; the East River to the Bowery


# Greenwich Village
# Houston to 14th Streets; Broadway to the Hudson River


# NoHo
# Houston Street to Astor Place; the Bowery to Broadway


# Bowery
# Canal to 4th Streets; the Bowery


# West Village
# Houston to 14th Streets; 6th Avenue (or 7th Avenue) to the Hudson River


# Lower East Side
# Canal to Houston Streets; the East River to the Bowery


# SoHo
# Canal to Houston Streets; Lafayette to Varick Streets


# Nolita (NoLIta)
# Broome to Houston Streets; the Bowery to Lafayette Street


# Little Italy
# Mulberry Street from Canal to Broome Streets


# Chinatown
# Chambers to Delancey Streets; East Broadway to Broadway


# Financial District
# Below Chambers Street


# Five Points (historic)
# Worth and Baxter Streets


# Cooperative Village†
# Frankfort to Grand Streets; FDR Drive to East Broadway


# Two Bridges
# Brooklyn Bridge to Montgomery Street; St. James Place to the East River


# Tribeca (TriBeCa)
# Park Place to Canal Street; Broadway to the Hudson River


# Civic Center
# Vesey to Chambers Streets; the East River to Broadway


# Radio Row (historic)
# Greenwich Street from Cortlandt to Dey Streets (World Trade Center site)


# South Street Seaport Historical District
# South of Fulton Street and along the FDR Drive


# Battery Park City
# West of West Street
