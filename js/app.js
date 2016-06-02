function appViewModel() {
	var self = this;
	var map;
	//Set default lat/lng to downtown Boston and location to 'Boston' so we can default back to these coordinates if we can't locate the user
	this.searchLat = ko.observable();
	this.searchLng = ko.observable();
	this.searchLocation = ko.observable('Boston');
	//Stores breweries returned in search results and filtered breweries as well as map markers
	this.breweries = ko.observableArray([]);
	this.filteredBreweries = ko.observableArray([]);
	this.mapMarkers = ko.observableArray([]);

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
            fullscreenControl: true
		});
	//Google Places autocomplete on 'input-group location'
		var input = document.getElementById('location');		console.log(input);
		var autocomplete = new google.maps.places.Autocomplete(input);
		var place = autocomplete.getPlace();
		self.searchLocation = place;
	//Get initial brewery results for default location
	searchBreweries();
	}

	function searchBreweries(){
		var breweryDbUrl = 'https://crossorigin.me/https://api.brewerydb.com/v2/search/geo/point?key=3b40c3114605a1ca4a7d7bc837d615f5&format=json&lat=42.3596936&lng=-71.0584037&radius=15'
		$.ajax({
			url: breweryDbUrl,
			dataType: 'json',
			success: function(data){
				var len = data.totalResults;
				for (var i = 0; i < 2; i++) {
					var	brewery = data.data[i].brewery,
						breweryId = data.data[i].breweryId,
						breweryLat = data.data[i].latitude,
						breweryLng = data.data[i].longitude,
						breweryType = data.data[i].locationTypeDisplay,
						breweryDescription = brewery.description,
						breweryWebsite = brewery.website,
						breweryYearEstablished = brewery.established;
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
					if (brewery.images == null ) {
						breweryImages = '';
					} else {
						breweryImages = brewery.images,
						brewerySquareMediumImage = breweryImages.squareMedium,
						breweryIconImage = breweryImages.icon	
					}

					self.breweries.push({
						id: breweryId,
						lat: breweryLat,
						lng: breweryLng,
						type: breweryType,
						description: breweryDescription,
						website: breweryWebsite,
						yearEstablished: breweryYearEstablished,
						squareMediumImage: brewerySquareMediumImage,
						iconImage: breweryIconImage,
						address: breweryStreet + "|" + breweryCity + "|" + breweryState
					});
				}
			}
		})
	};
	//TODO: Process location search function
	function processLocationSearch (){

	};
	//TODO: Create map markers
	function createMapMarkers(){

	};
	//TODO: ClearmMapMarkers
	function clearMapMarkers(){
		$.each(self.mapMarkers(), function(key, value){
			value.marker.setMap(null);
		});
		self.mapMarkers([]);

	};
	//TODO: filter breweries
	function filterBreweries(){

	};
	mapInit();
};

ko.applyBindings(new appViewModel());