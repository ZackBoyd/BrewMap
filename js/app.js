//-------------//
/*===Global===*/
//-------------//

var vm, map, infowindow;
//Set default lat/lng to downtown Boston and location to 'Boston' so we can default back to these coordinates if we can't locate the user
var searchLat = ko.observable(42.3545948);
var searchLng = ko.observable(-71.0660132);
//Global function to handle successful and unsuccessful google calls
function googleSuccess() {
    //Apply knockout bindings and load the appViewModel
    vm = new appViewModel();
    ko.applyBindings(vm);
    //Initialize map
    mapInit();
};

//A function to handle google errors and command the viewModel to display an error message to the user
function googleError() {
    viewModel = new appViewModel();
    ko.applyBindings(viewModel);
    //Need a function in appViewModel to display text passed to 'status'
    viewModel.status('Google Maps was unable to load. Please refresh your browser and try again');
};

//A function to instantiate the google map
var mapInit = function(){
    defaultLocation = new google.maps.LatLng(searchLat(), searchLng());
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
    //Create infowindow and save to global infowindow variable to temporarily store content for markers
    infowindow = new google.maps.InfoWindow({maxWidth: 400});
};

//------------------//
/*====ViewModel====*/
//------------------//

var appViewModel = function() {

//-------------------------------------//
    //LOCAL VARIABLES AND OBSERVABLES
//-------------------------------------//

	var self = this;
    this.status = ko.observable();
	//Observables to hold the available values to filter a brewery by and to hold the selected brewery typ to filter by
	this.breweryTypes = ko.observableArray(['Macro Brewery', 'Micro Brewery', 'Nano Brewery', 'Brewpub', 'Tasting Room', 'Restaurant/Ale House', 'Cidery', 'Meadery']);
	this.filterType = ko.observable("");
    this.breweryResultsNum = ko.observable();
    //Stores breweries returned in search results and filtered breweries as well as map markers
    this.breweries = ko.observableArray([]);
    this.filteredBreweries = ko.observableArray([]);
    this.mapMarkers = ko.observableArray([]);
    //Stores beers returned from Breweries
    this.beers = ko.observableArray([]);
    this.beerResultsNum = ko.observable();
    this.selectedBreweryId = ko.observable();

//---------//
//LISTENERS//
//---------//

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
    //Add listener to Places autocomplete box to center the map and save the LatLng when a Place is selected
    autocomplete.addListener('place_changed', function(){
        var place = autocomplete.getPlace();
        map.setCenter(place.geometry.location);
        var searchLocation = place.geometry.location;
        searchLat = searchLocation.lat;
        searchLng = searchLocation.lng;
        self.getBreweries();
    });

//-----------------------------------//
//BREWERY SEARCH AND FILTER FUNCTIONS//
//-----------------------------------//

    //AJAX call to BreweryDB to get results for the given search Lat/Lng
    this.getBreweries = function (){
        var breweryDbUrl = 'https://crossorigin.me/https://api.brewerydb.com/v2/search/geo/point?key=3b40c3114605a1ca4a7d7bc837d615f5&format=json&lat=' + searchLat() + '&lng=' + searchLng() + '&radius=15';
        $.ajax({
            url: breweryDbUrl,
            timeout: 6000,
            dataType: 'json',
            success: function(data) {
                self.breweryResultsNum(data.totalResults + ' results returned from http://www.brewerydb.com');
                processBreweryResults(data);
            },
            error: function(){
                vm.status('Sorry, unable to load breweries for your location, please refresh your browser and try again.');
            }
        });
    };
    //Handle JSON response and push results to breweries list and filtered breweries list
    var processBreweryResults = function (data){
        //Clear any brewery data already in observable arrays
        self.filteredBreweries([]);
        self.breweries([]);
        //Loop through data result, process and push to breweries list
        var len = data.totalResults;
        for (var i = 0; i < len; i++) {
            var brewery = data.data[i].brewery,
                breweryId = data.data[i].breweryId,
                breweryName = brewery.name;
                breweryLat = data.data[i].latitude,
                breweryLng = data.data[i].longitude,
                breweryType = data.data[i].locationTypeDisplay
            //Some breweries don't have hours of operation
            if (data.data[i].hoursOfOperation == null) {
                var breweryHours = ' ';
            } else {
                breweryHours = 'Open: ' + data.data[i].hoursOfOperation;
            }
            //Some breweries don't have a description
            if (brewery.description == null) {
                var breweryDescription = ' ';
            } else {
                breweryDescription = brewery.description;
            }
            //Some breweries don't have a year established
            if (brewery.established == null) {
                var breweryYearEstablished = ' ';
            } else {
                breweryYearEstablished = "Established " + brewery.established;
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
                breweryStreet = data.data[i].streetAddress;
            }
                breweryCity = data.data[i].locality,
                breweryState = data.data[i].region
            //Some breweries don't have any images associated, which will kill this function
            //this if statement checks for images and leaves an empty string in the images variables
            //if there are no imaages
            var breweryImages;
            if (brewery.images == undefined ) {
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
                hoursOfOperation: breweryHours,
                description: breweryDescription,
                website: breweryWebsite,
                yearEstablished: breweryYearEstablished,
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
    var createMapMarkers = function (breweries){
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
            '<p>' + value.hoursOfOperation + '</p>' +
            '<p>' + value.description + '</p>' +
            '<button id="beerButton">Show me the beers for this brewery ' +
            '<i class="fa fa-beer"  class="glyphicon glyphicon-glass"></i></button>' +
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
                infowindow.setContent(contentString);
                map.setZoom(13);
                infowindow.open(map, marker);
                // Add click listener to beerButton within infowindow to call getBeers()
                $('#beerButton').click(function(){
                    self.getBeers();
                });
                map.panTo(marker.position);
                //Find the breweryId for the marker and set it as the selected brewery id
                var array = self.filteredBreweries();
                for(var i = 0; i < array.length; i++) {
                    if(array[i].name === marker.title) {
                        self.selectedBreweryId(array[i].id);
                    }
                }
            });
        });
    };
    //Clear mapMarkers array
    var clearMapMarkers = function (){
        $.each(self.mapMarkers(), function(key, value){
            value.marker.setMap(null);
        });
        self.mapMarkers([]);
    };
    //Method to give access to mapMarkers array
    var accessMapMarkers = function (){
        var retrievedMapMarkers = self.mapMarkers();
        return {
            retrievedMapMarkers
        };
    };
	//Get user location from google maps and then search for breweries
	this.getUserLocation = function(){
		var x = document.getElementById('status-bar');
		navigator.geolocation.getCurrentPosition(function(position){
			var coords = position.coords;
            searchLat = coords.latitude;
            searchLng = coords.longitude;
			self.getBreweries();
		},showErrors);
		function showErrors(error) {
		    switch(error.code) {
		        case error.PERMISSION_DENIED:
		            self.status("User denied the request for Geolocation.");
		            break;
		        case error.POSITION_UNAVAILABLE:
		            self.status("Location information is unavailable.");
		            break;
		        case error.TIMEOUT:
		            self.status("The request to get user location timed out.");
		            break;
		        case error.UNKNOWN_ERROR:
		            self.status("An unknown error occurred.");
		            break;
			}
		}
	};
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
        self.mobileShow(false);
		for (var key in self.mapMarkers()) {
			if (clickedBreweryName === self.mapMarkers()[key].marker.title) {
				map.panTo(self.mapMarkers()[key].marker.position);
				map.panBy(0, -150);
				infowindow.setContent(self.mapMarkers()[key].content);
				infowindow.open(map, self.mapMarkers()[key].marker);
                // Add click listener to beerButton within infowindow to call getBeers()
                $('#beerButton').click(function(){
                    self.getBeers();
                });
                //Find the breweryId for the marker and set it as the selected brewery id
                var array = self.filteredBreweries();
                for(var i = 0; i < array.length; i++) {
                    if(array[i].name === clickedBreweryName) {
                        self.selectedBreweryId(array[i].id);
                    }
                }
			}
		}
	};
    //Toggle to hide/show mobile results
    this.mobileShow = ko.observable(false);
    this.mobileToggle = function(){
        if (self.mobileShow() === false) {
            self.mobileShow(true)
        } else {
            self.mobileShow(false)
        }
    };

//------------------------------//
//BEER SEARCH AND VIEW FUNCTIONS//
//------------------------------//
    //Get beers for a given brewery
    this.getBeers = function(){
        var breweryDbBeerUrl = 'https://crossorigin.me/https://api.brewerydb.com/v2/brewery/' + self.selectedBreweryId() + '/beers?key=3b40c3114605a1ca4a7d7bc837d615f5&format=json';
                $.ajax({
                    url: breweryDbBeerUrl,
                    timeout: 6000,
                    dataType: 'json',
                    success: function(data) {
                        self.beerResultsNum(data.totalResults + ' beers found for this brewery');
                        self.processBeerResults(data);
                    },
                    error: function(){
                        vm.status('Sorry, unable to load beers for this brewery.');
                    }
                });
    };
    //Process and save results from getBeers so the data can be displayed by the viewModel
    this.processBeerResults = function(data){
        console.log(data);
    }

//-----------------//
//APPVIEWMODEL INIT//
//-----------------//

    //Call getBreweries to get results
    self.getBreweries();
};