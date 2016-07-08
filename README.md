# BrewMap 
A Udactiy Front End Nanodegree project - Leverage BreweryDB's crowd-sourced data to explore all the great breweries in your area or in an area you want to visit.

# Instructions to Run App
Hard way:

1.) Fork this repo

2.) Download files

3.) Open index.html

Easy Way: 

Go to this link http://zackboyd.github.io/BrewMap for the GitHub Pages hosted version

# Current Features
- Autocomplete location search
- Search returns all breweries with a location within 10 miles of the search location
- Filter brewery results by type
- Clickable results list with brewery info and icon, a click will center the map on the selected brewery
- Mobile responsive design hides results list but retains search/filter fileds on mobile devices

# Future Features
- Get and view beers for breweries
- View/filter beer ratings for a brewery
- Filter brewery/beer results by beer style
- Better handling of long descriptions for breweries (especially on mobile)
- Better mobile experience, specifically better infowindow styling and results viewing in a more polished way and adding a hamburger icon for nav
- Setup a server to handle requests to BreweryDB (doesn't support CORS and currently using crossorigin.me as a stopgap to handle CORS)

# Resources used
- Knockout.js framework
- BreweryDB api
- Twitter's Bootstrap CSS framework
- jQuery
- Google Places api
