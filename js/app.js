function appViewModel() {
	//!!!
	//Stubbed out single brewery data, remove after API call is sucessful
	//!!!
	var demoBreweryResults = {
	    "currentPage": 1,
	    "numberOfPages": 1,
	    "totalResults": 28,
	    "data": [{
	        "id": "v3S0tr",
	        "name": "Main Brewery",
	        "locality": "Boston",
	        "region": "Massachusetts",
	        "latitude": 42.3600825,
	        "longitude": -71.0588801,
	        "isPrimary": "Y",
	        "inPlanning": "N",
	        "isClosed": "N",
	        "openToPublic": "Y",
	        "locationType": "nano",
	        "locationTypeDisplay": "Nano Brewery",
	        "countryIsoCode": "US",
	        "status": "verified",
	        "statusDisplay": "Verified",
	        "createDate": "2016-01-13 17:32:32",
	        "updateDate": "2016-01-13 17:32:50",
	        "breweryId": "vs1W4f",
	        "brewery": {
	            "id": "vs1W4f",
	            "name": "Old Planters Brewing Co.",
	            "nameShortDisplay": "Old Planters",
	            "description": "Old Planters is a boutique nanobrewery that specializes in brewing hop forward ales in small batches. We take pride in our practice of classic brewing techniques while also utilizing innovative equipment and technology to make well balanced craft beer. We use the best ingredients we can get our hands on, while always keeping an eye on sustainability.",
	            "website": "http:\/\/www.oldplanters.com\/",
	            "established": "2014",
	            "mailingListUrl": "http:\/\/eepurl.com\/bMmTgv",
	            "isOrganic": "N",
	            "images": {
	                "icon": "https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vs1W4f\/upload_pqVOov-icon.png",
	                "medium": "https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vs1W4f\/upload_pqVOov-medium.png",
	                "large": "https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vs1W4f\/upload_pqVOov-large.png",
	                "squareMedium": "https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vs1W4f\/upload_pqVOov-squareMedium.png",
	                "squareLarge": "https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vs1W4f\/upload_pqVOov-squareLarge.png"
	            },
	            "status": "verified",
	            "statusDisplay": "Verified",
	            "createDate": "2016-01-10 19:46:56",
	            "updateDate": "2016-01-13 17:28:33"
	        },
	        "country": {
	            "isoCode": "US",
	            "name": "UNITED STATES",
	            "displayName": "United States",
	            "isoThree": "USA",
	            "numberCode": 840,
	            "createDate": "2012-01-03 02:41:33"
	        }
	    }],
	    "status": "success"
	};
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