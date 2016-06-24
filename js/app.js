function controller () {
    //A function to handle a successful call to google 
    function googleSuccess() {
        ko.applyBindings(new appViewModel());
    };
    function googleError() {
        ko.applyBindings(new appViewModel());
        self.status('Google Maps was unable to load. Please refresh your browser and try again');
    };
};
function appViewModel() {
	var self = this;
	var map, infowindow;
	//Set default lat/lng to downtown Boston and location to 'Boston' so we can default back to these coordinates if we can't locate the user
	this.searchLat = ko.observable(42.3545948);
	this.searchLng = ko.observable(-71.0660132);
    this.status = ko.observable();
    this.resultsNum = ko.observable();
	//Stores breweries returned in search results and filtered breweries as well as map markers
	this.breweries = ko.observableArray([]);
	this.filteredBreweries = ko.observableArray([]);
	this.mapMarkers = ko.observableArray([]);
	//Observables to hold the available values to filter a brewery by and to hold the selected brewery typ to filter by
	this.breweryTypes = ko.observableArray(['Macro Brewery', 'Micro Brewery', 'Nano Brewery', 'Brewpub', 'Tasting Room', 'Restaurant/Ale House', 'Cidery', 'Meadery']);
	this.filterType = ko.observable(" ");

	//Get user location from google maps and then search for breweries
	this.getUserLocation = function(){
		var x = document.getElementById('status-bar');
		navigator.geolocation.getCurrentPosition(function(position){
			var coords = position.coords;
			self.searchLat = coords.latitude;
			self.searchLng = coords.longitude;
			getBreweries();
		},showErrors);
		function showErrors(error) {
		    switch(error.code) {
		        case error.PERMISSION_DENIED:
		            self.status("User denied the request for Geolocation.")
		            break;
		        case error.POSITION_UNAVAILABLE:
		            self.status("Location information is unavailable.")
		            break;
		        case error.TIMEOUT:
		            self.status("The request to get user location timed out.")
		            break;
		        case error.UNKNOWN_ERROR:
		            self.status("An unknown error occurred.")
		            break;
			}
		}
	};
	//Initialize Google Map
	function mapInit(){
		defaultLocation = new google.maps.LatLng(self.searchLat(), self.searchLng());
		map = new google.maps.Map(document.getElementById('map'), {
			center: defaultLocation,
			zoom: 13,
			panControl: false,
			mapTypeControl: false,
		 	zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
            style: google.maps.ZoomControlStyle.SMALL
            },
            streetViewControl: false,
            fullscreenControl: true,
            fullscreenControlOptions: {
            	position: google.maps.ControlPosition.LEFT_CENTER
            }
		});
		clearTimeout(self.mapRequestTimeout);
	//Google Places autocomplete on 'input-group location' -- can't use observable here because the Places API library
	//will only accept an HTML element
		var input = (
            document.getElementById('location'));
		var autocomplete = new google.maps.places.Autocomplete(input);
		//Add a listener to the input field to prevent the whole page from reloading when someone selects a place with the arrow down and hits the return key
		google.maps.event.addDomListener(input, 'keydown', function(e){
			if (e.keyCode == 13) {
				e.preventDefault();
			}
		});
		autocomplete.bindTo('bounds', map);
		//Add listener to Places autocomplete box to center the map and save the LatLng when a Place is selected
		autocomplete.addListener('place_changed', function(){
			var place = autocomplete.getPlace();
			map.setCenter(place.geometry.location);
			var searchLocation = place.geometry.location;
			self.searchLat = searchLocation.lat;
			self.searchLng = searchLocation.lng;
			getBreweries();
		});
		//Add listener to select list
		document.getElementById('filterButton').addEventListener('click', function(){
			self.filterBreweries();
		});
		//Create infowindow and save to global infowindow variable to temporarily store content for markers
		infowindow = new google.maps.InfoWindow({maxWidth: 450});
		//Get initial brewery results for default location
		getBreweries();
	};

	function getBreweries(){
		var breweryDbUrl = 'https://crossorigin.me/https://api.brewerydb.com/v2/search/geo/point?key=3b40c3114605a1ca4a7d7bc837d615f5&format=json&lat=' + self.searchLat() + '&lng=' + self.searchLng() + '&radius=15'
		$.ajax({
			url: breweryDbUrl,
			timeout: 3000,
			dataType: 'json',
			success: function(data) {
                self.resultsNum(data.totalResults + ' results returned from http://www.brewerydb.com');
				processBreweryResults(data);
			},
			error: function(){
                self.status('Sorry, unable to load breweries for your location, please refresh your browser and try again.');
			}
		})
	};
	//Handle JSON response and push results to breweries list and filtered breweries list
	function processBreweryResults (data){
		//Clear any brewery data already in observable arrays
		self.filteredBreweries([]);
		self.breweries([]);
		//Loop through data result, process and push to breweries list
		var len = data.totalResults;
		for (var i = 0; i < len; i++) {
			var	brewery = data.data[i].brewery,
				breweryId = data.data[i].breweryId,
				breweryName = brewery.name;
				breweryLat = data.data[i].latitude,
				breweryLng = data.data[i].longitude,
				breweryType = data.data[i].locationTypeDisplay,
				breweryDescription = brewery.description,
				breweryHours = data.data[i].hoursOfOperation;
            //Some breweries don't have a year established
            if (brewery.established == null) {
                var breweryYearEstablished = ' ';
            } else {
                breweryYearEstablished = brewery.established;
            }
            //Some breweries don't have a website
            if (brewery.website == null) {
                breweryWebsite = ' ';
            } else {
                breweryWebsite = brewery.website;
            }
			//Some breweries don't have street data, this for loop avoids storing values for those breweries
			if (data.data[i].streetAddress == null) {
				var breweryStreet = '';
			} else {
				breweryStreet = data.data[i].streetAddress
			}
				breweryCity = data.data[i].locality,
				breweryState = data.data[i].region
			//Some breweries don't have any images associated, which will kill this function
			//this if statement checks for images and leaves an empty string in the images variables
			//if there are no imaages
			var breweryImages;
			if (brewery.images === undefined ) {
				breweryIconImage ='';
				breweryImages = '';
			} else {
				breweryImages = brewery.images,
				brewerySquareMediumImage = breweryImages.squareMedium,
				breweryIconImage = breweryImages.icon	
			}

			self.breweries.push({
				name: breweryName,
				id: breweryId,
				lat: breweryLat,
				lng: breweryLng,
				type: breweryType,
				description: breweryDescription,
				website: breweryWebsite,
				yearEstablished: "Established" + breweryYearEstablished,
				squareMediumImage: brewerySquareMediumImage,
				iconImage: breweryIconImage,
				address: breweryStreet + "|" + breweryCity + "|" + breweryState
			});
		}
        //Load breweries into filtered list of breweries and call createMapMarkers to create markers for breweries
        self.filteredBreweries(self.breweries());
        createMapMarkers(self.filteredBreweries());
	};
	//Handles an array of breweries and creates markers with infoWindows
	function createMapMarkers(breweries){
		$.each(breweries, function(index, value) {
			var lat = value.lat,
				lng = value.lng,
				geoLoc = new google.maps.LatLng(lat, lng),
				breweryName = value.name;
				breweryId = value.id;

			var contentString = '<div id="infowindow" class="infowindow">'+
			'<div class="header-container">' +
			'<img src="' + value.iconImage + '">' +
			'<h4>' + value.name + '</h4>' +
			'</div>' +
			'<p>' + value.address + '</p>' +
			'<p><a href="' + value.website + '">' + value.website + '</a></p>' +
			'<p>' + value.description + '</p>' +
			'</div>';

			var marker = new google.maps.Marker({
					position: geoLoc,
					title: breweryName,
					map: map,
                    animation: google.maps.Animation.DROP,
					icon: 'http://www.travelhudsonvalley.com/wp-content/uploads/2015/07/HVT_BreweryIcon.jpg'
			});
			self.mapMarkers.push({marker: marker, content: contentString});
			//Add listener for a click that will open the created infoWindow and center the map on the marker
			google.maps.event.addListener(marker, 'click', function(){
                marker.setAnimation(google.maps.Animation.BOUNCE)
				infowindow.setContent(contentString);
				map.setZoom(13);
				infowindow.open(map, marker);
				map.panTo(marker.position);
			});
		});
	};
	//Clear mapMarkers array
	function clearMapMarkers(){
		$.each(self.mapMarkers(), function(key, value){
			value.marker.setMap(null);
		});
		self.mapMarkers([]);

	};
	//Set timeout limit for google maps api call 
	self.mapRequestTimeout = setTimeout(function(){
		$('.map-canvas list-width-30').html('Google Maps was unable to load. Please refresh your browser and try again');
	}, 8000);
	//Filter breweries and push to filtered array
	this.filterBreweries = function(){
		var array = self.breweries();
		var filterTerm = self.filterType();
		//Clear filtered list
		self.filteredBreweries([]);
		//Loop through breweries and match their type against filtered type, push matches to filtered array
		for (var i=0; i < array.length; i++) {
			if (array[i].type == filterTerm ) {
				self.mapMarkers()[i].marker.setMap(map);
				self.filteredBreweries.push(array[i]);
			} else {
				self.mapMarkers()[i].marker.setMap(null);
			}
		}
	};
	//Handle the clicked li element for brewery results. Pans the map to the marker and opens the infoWindow for that marker
	this.goToMarker = function(clickedBrewery){
		var clickedBreweryName = clickedBrewery.name;
		for (var key in self.mapMarkers()) {
			if (clickedBreweryName === self.mapMarkers()[key].marker.title) {
				map.panTo(self.mapMarkers()[key].marker.position);
				map.panBy(0, -150);
				infowindow.setContent(self.mapMarkers()[key].content);
				infowindow.open(map, self.mapMarkers()[key].marker);
			}
		}
	};
	mapInit();
};

