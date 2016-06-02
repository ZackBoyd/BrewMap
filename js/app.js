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
				console.log(data);
			}
		});
	};
	//TODO: Process location search function
	function processLocationSearch (){

	};
	//TODO: Create map markers
	function createMapMarkers(){

	};
	mapInit();
};

ko.applyBindings(new appViewModel());