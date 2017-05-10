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
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl: false
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
    self.status = ko.observable();
    self.beerModalVisible = ko.observable(false);
	//Observables to hold the available values to filter a brewery by and to hold the selected brewery typ to filter by
	self.breweryTypes = ko.observableArray(['Macro Brewery', 'Micro Brewery', 'Nano Brewery', 'Brewpub', 'Tasting Room', 'Restaurant/Ale House', 'Cidery', 'Meadery']);
	self.filterType = ko.observable("");
    self.breweryResultsNum = ko.observable();
    //Stores breweries returned in search results and filtered breweries as well as map markers
    self.breweries = ko.observableArray([]);
    self.filteredBreweries = ko.observableArray([]);
    self.mapMarkers = ko.observableArray([]);
    //Stores beers returned from Breweries
    self.beers = ko.observableArray([]);
    self.filteredBeers = ko.observableArray([]);
    self.beerResultsNum = ko.observable();
    //Observables for selected brewery
    self.selectedBreweryId = ko.observable();
    self.selectedBreweryName = ko.observable();

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
    self.getBreweries = function (){
        var breweryDbUrl = 'https://crossorigin.me/https://api.brewerydb.com/v2/search/geo/point?key=3b40c3114605a1ca4a7d7bc837d615f5&format=json&lat=' + searchLat() + '&lng=' + searchLng() + '&radius=15';
        console.log(searchLat(), searchLng());
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
            //Some breweries don't have street data, self for loop avoids storing values for those breweries
            if (data.data[i].streetAddress == null) {
                var breweryStreet = '';
            } else {
                breweryStreet = data.data[i].streetAddress;
            }
                breweryCity = data.data[i].locality,
                breweryState = data.data[i].region
            //Some breweries don't have any images associated, which will kill self function
            //self if statement checks for images and leaves an empty string in the images variables
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

            var contentString = '<div id="infowindow" class="container-fluid">'+
            '<div class="row">' +
            '<h4>' + value.name + '</h4>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-xs-3">' +
            '<img class="img-responsive" src="' + value.iconImage + '">' +
            '</div>' +
            '<div class="col-xs-9">' +
            '<h5>' + value.type + '</h5>' +
            '<div>' + value.address + '</div>' +
            '<div><a href="' + value.website + '">' + value.website + '</a></div>' +
            '</div>' +
            '</div>' +
            '</div>';


            var marker = new google.maps.Marker({
                    position: geoLoc,
                    title: breweryName,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    icon: 'img/beer-icon.png'
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
                    self.showBeerModal();
                    console.log('beers' + self.beers());
                });
                map.panTo(marker.position);
                map.panBy(0, -150);
                //Find the breweryId for the marker and set it as the selected brewery id
                var array = self.filteredBreweries();
                for(var i = 0; i < array.length; i++) {
                    if(array[i].name === marker.title) {
                        self.selectedBreweryId(array[i].id);
                        self.selectedBreweryName(array[i].name);
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
    // var accessMapMarkers = function (){
    //     var retrievedMapMarkers = self.mapMarkers();
    //     return {
    //         retrievedMapMarkers
    //     };
    // };
	//Get user location from google maps and then search for breweries
	self.getUserLocation = function(){
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
	self.filterBreweries = function(){
        var array = self.breweries();
        var filterTerm = self.filterType();
    //Check if '--None--' is selected and redraw brewery markers with unfiltered results
    if (typeof(filterTerm) == 'undefined') {
        console.log(typeof(filterTerm));
        self.filteredBreweries(self.breweries());
        clearMapMarkers();
        createMapMarkers(self.filteredBreweries());
    } else {
        //Clear filtered list
        self.filteredBreweries([]);
        //Loop through breweries and match their type against filtered type, push matches to filtered array        
        for (var i=0; i < array.length; i++) {
            if (array[i].type == filterTerm ) {
                self.filteredBreweries.push(array[i]);
            };
        };
        //Clear and redraw markers
        clearMapMarkers();
        createMapMarkers(self.filteredBreweries());
        //Update results count
        // self.breweryResultsNum(self.filteredBreweries().length + ' results returned from http://www.brewerydb.com');
    };
    };
	//Handle the clicked li element for brewery results. Pans the map to the marker and opens the infoWindow for that marker
	self.goToMarker = function(clickedBrewery){
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
                    self.showBeerModal();
                });
                //Find the breweryId for the marker and set it as the selected brewery id
                var array = self.filteredBreweries();
                for(var i = 0; i < array.length; i++) {
                    if(array[i].name === clickedBreweryName) {
                        self.selectedBreweryId(array[i].id);
                        self.selectedBreweryName(array[i].name);
                    }
                }
			}
		}
	};
    //Toggle to hide/show mobile results
    self.mobileShow = ko.observable(false);
    self.mobileToggle = function(){
        if (self.mobileShow() === false) {
            self.mobileShow(true)
        } else {
            self.mobileShow(false)
        }
    };

//------------------------------//
//BEER SEARCH AND VIEW FUNCTIONS//
//------------------------------//
    //Shwo the beer modal for the selected brewery
    self.showBeerModal = function (){
        self.beerModalVisible(true);
    };
    //Knockout template for beeer modal
    //Get beers for a given brewery
    self.getBeers = function(){
        var breweryDbBeerUrl = 'https://crossorigin.me/https://api.brewerydb.com/v2/brewery/' + self.selectedBreweryId() + '/beers?key=3b40c3114605a1ca4a7d7bc837d615f5&format=json';
                $.ajax({
                    url: breweryDbBeerUrl,
                    timeout: 6000,
                    dataType: 'json',
                    success: function(data) {
                        self.beerResultsNum(data.data.length + ' beers found for this brewery');
                        console.log(self.beerResultsNum());
                        console.log(data);
                        self.processBeerResults(data);
                    },
                    error: function(){
                        vm.status('Sorry, unable to load beers for this brewery.');
                    }
                });
    };
    //Process and save results from getBeers so the data can be displayed by the viewModel
    self.processBeerResults = function(data){
        //Clear any beer data already in observable arrays
        self.filteredBeers([]);
        self.beers([]);
        //Loop through data result, process and push to breweries list
        var array = data.data;
        var len = array.length;
        for (var i = 0; i < len; i++) {
            //Attributes I expect to always get for a beer
            var beerId = array[i].id,
                beerName = array[i].name
                beerDescription = array[i].description,
                beerStyle = array[i].style,
                beerStyleName = beerStyle.name,
                //Ternarys to check attributes I'm not sure I'll get for every beer
                beerStyleShortName = beerStyle.shortName ? beerStyle.shortName : " ",
                beerAbvMin = array[i].abvMin ? array[i].abvMix : "No abv provided",
                beerAbvMax = array[i].abvMax ? array[i].abvMax : "No abv provided",
                beerIbu = array[i].ibu ? array[i].ibu : "No ibu provided",
                beerYear = array[i].year ? array[i].year : " "
                // beerAvailability = array[i].available ? array[i].available : "No available provided",
                // beerAvailabilityName = beerAvailability.name ? beerAvailability.name : "No availability provided",
                // beerAvailabilityDescription = beerAvailability.description ? beerAvailability.description : "No availability description provided",
                // beerLabels = array[i].labels ? array[i].label : "No labels provided",
                // beerLabelMedium = beerLabels.medium ? beerLabels.medium : "No labels provided",
                // beerLabelLarge = beerLabels.large ? beerLabels.large : "No labels provided",
                // beerLabelIcon = beerLabels.icon ? beerLabels.icon : "No labels provided"


            self.beers.push({
                id: beerId,
                name: beerName,
                description: beerDescription,
                styleName: beerStyleName,
                styleShortName: beerStyleShortName,
                minAbv: beerAbvMin,
                maxAbv: beerAbvMax,
                ibu: beerIbu,
                year: beerYear,
                // availabilityShort: beerAvailability,
                // availabilityLong : beerAvailabilityDescription,
                // labelIcon: beerLabelIcon,
                // LabelMedium: beerLabelMedium
            });
        }
    };

//-----------------//
//APPVIEWMODEL INIT//
//-----------------//

    //Call getBreweries to get results
    self.getBreweries();
};