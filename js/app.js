
function appViewModel() {
	var self = this;
	//defaultData is set to act as dummy data for crossorigin.me failures until I get get node.js up a runnding
	this.defaultData = {
	  "currentPage":1,
	  "numberOfPages":1,
	  "totalResults":27,
	  "data":[
	    {
	      "id":"OJdDDq",
	      "name":"Boston",
	      "streetAddress":"115 Stuart Street",
	      "locality":"Boston",
	      "region":"Massachusetts",
	      "postalCode":"02116",
	      "phone":"617.742.2739",
	      "website":"http:\/\/www.rockbottom.com\/boston",
	      "hoursOfOperation":"Sun - Thurs:  11:30am - Midnight\r\nFri - Sat:  11:30am - 1am",
	      "latitude":42.351068,
	      "longitude":-71.065359,
	      "isPrimary":"N",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"brewpub",
	      "locationTypeDisplay":"Brewpub",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-10-04 14:37:12",
	      "updateDate":"2014-07-23 19:11:34",
	      "breweryId":"D1UQzj",
	      "brewery":{
	        "id":"D1UQzj",
	        "name":"Rock Bottom Restaurant & Brewery",
	        "nameShortDisplay":"Rock Bottom Restaurant",
	        "description":"Our brewers eat, drink and sleep beer. They\u2019re equal parts scientist, artist and beer geek. So, while every Rock Bottom brewer is passionate about their craft, they also put their own signature into every beer.\r\n\r\nIn other words, there is a unique beer menu at every Rock Bottom in addition to our core line up of consistent flavor profiles that you can expect at any Rock Bottom you visit nationwide.\r\n\r\nBut, you\u2019re thirsty and want to know what beers you can expect down here, right?",
	        "website":"http:\/\/www.rockbottom.com\/",
	        "established":"1998",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/D1UQzj\/upload_P4PqC1-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/D1UQzj\/upload_P4PqC1-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/D1UQzj\/upload_P4PqC1-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/D1UQzj\/upload_P4PqC1-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/D1UQzj\/upload_P4PqC1-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:42:15",
	        "updateDate":"2015-12-22 15:06:19"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":0.2
	    },
	    {
	      "id":"ERW6Da",
	      "name":"Main Brewery",
	      "locality":"Boston",
	      "region":"Massachusetts",
	      "website":"http:\/\/www.BacklashBeer.com\/",
	      "latitude":42.3584308,
	      "longitude":-71.0597732,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "yearOpened":"2009",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:41:44",
	      "updateDate":"2014-09-07 17:53:04",
	      "breweryId":"DrFlD0",
	      "brewery":{
	        "id":"DrFlD0",
	        "name":"Backlash Beer Company",
	        "nameShortDisplay":"Backlash",
	        "description":"It\u2019s time to stand up against the predictable, old beer establishment and craft beers the way they were intended: flavorful, gimmick free and not produced in ridiculous quantities. We\u2019re a Boston company with a Boston attitude, here to reclaim beer by recruiting people to fuel the craft beer movement.\r\n\r\nJoin the Backlash.",
	        "website":"http:\/\/www.BacklashBeer.com\/",
	        "established":"2009",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/DrFlD0\/upload_mE86UN-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/DrFlD0\/upload_mE86UN-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/DrFlD0\/upload_mE86UN-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/DrFlD0\/upload_mE86UN-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/DrFlD0\/upload_mE86UN-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:41:44",
	        "updateDate":"2015-12-22 15:27:04"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":0.4
	    },
	    {
	      "id":"v3S0tr",
	      "name":"Main Brewery",
	      "locality":"Boston",
	      "region":"Massachusetts",
	      "latitude":42.3600825,
	      "longitude":-71.0588801,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"nano",
	      "locationTypeDisplay":"Nano Brewery",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2016-01-13 17:32:32",
	      "updateDate":"2016-01-13 17:32:50",
	      "breweryId":"vs1W4f",
	      "brewery":{
	        "id":"vs1W4f",
	        "name":"Old Planters Brewing Co.",
	        "nameShortDisplay":"Old Planters",
	        "description":"Old Planters is a boutique nanobrewery that specializes in brewing hop forward ales in small batches. We take pride in our practice of classic brewing techniques while also utilizing innovative equipment and technology to make well balanced craft beer. We use the best ingredients we can get our hands on, while always keeping an eye on sustainability.",
	        "website":"http:\/\/www.oldplanters.com\/",
	        "established":"2014",
	        "mailingListUrl":"http:\/\/eepurl.com\/bMmTgv",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vs1W4f\/upload_pqVOov-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vs1W4f\/upload_pqVOov-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vs1W4f\/upload_pqVOov-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vs1W4f\/upload_pqVOov-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vs1W4f\/upload_pqVOov-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2016-01-10 19:46:56",
	        "updateDate":"2016-01-13 17:28:33"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":0.5
	    },
	    {
	      "id":"f7ck3G",
	      "name":"Main Brewery",
	      "streetAddress":"85 Merrimac Street",
	      "locality":"Boston",
	      "region":"Massachusetts",
	      "postalCode":"02114",
	      "latitude":42.363507,
	      "longitude":-71.0614196,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"Y",
	      "openToPublic":"Y",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:41:51",
	      "updateDate":"2014-07-23 19:11:34",
	      "breweryId":"VKkhxa",
	      "brewery":{
	        "id":"VKkhxa",
	        "name":"Commonwealth Brewing #1",
	        "nameShortDisplay":"Commonwealth Brewing #1",
	        "isOrganic":"N",
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:41:51",
	        "updateDate":"2015-12-22 14:43:32"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":0.7
	    },
	    {
	      "id":"Vy6jKr",
	      "name":"Trillium Brewing Co.",
	      "streetAddress":"369 Congress St",
	      "locality":"Boston",
	      "region":"Massachusetts",
	      "postalCode":"02210",
	      "phone":"(617) 453-8745",
	      "website":"http:\/\/www.trilliumbrewing.com\/",
	      "hoursOfOperation":"Mon:  4:00pm - 7:30pm\r\nTue:  4:00pm - 7:30pm\r\nWed:  4:00pm - 7:30pm\r\nThu:  12:00pm - 7:30pm\r\nFri:  12:00pm - 7:30pm\r\nSat:  12:00pm - 6:00pm",
	      "latitude":42.3498417,
	      "longitude":-71.0480154,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "yearOpened":"2013",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2013-03-23 17:57:40",
	      "updateDate":"2015-08-17 16:26:05",
	      "breweryId":"SsYPgS",
	      "brewery":{
	        "id":"SsYPgS",
	        "name":"Trillium Brewing",
	        "nameShortDisplay":"Trillium",
	        "description":"We are a family owned and operated brewery in the Fort Point Channel neighborhood of Boston, Massachusetts. We created Trillium to realize our dream of bringing creative and flavorful beers to you. These beers are what we envision might have been made today, if a centuries old beer culture had naturally evolved in New England.  To achieve this vision, we stand our craft beers on the shoulders of native ingredients and artisan practices, balancing them with modern-day expertise.",
	        "website":"http:\/\/www.trilliumbrewing.com\/",
	        "established":"2013",
	        "mailingListUrl":"info@trilliumbrewing.com",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/SsYPgS\/upload_ZW01Ek-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/SsYPgS\/upload_ZW01Ek-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/SsYPgS\/upload_ZW01Ek-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/SsYPgS\/upload_ZW01Ek-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/SsYPgS\/upload_ZW01Ek-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:42:10",
	        "updateDate":"2015-12-22 15:23:49"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":1
	    },
	    {
	      "id":"8bdJml",
	      "name":"Main Brewery",
	      "streetAddress":"P.O. Box 426037",
	      "locality":"Cambridge",
	      "region":"Massachusetts",
	      "postalCode":"02142",
	      "phone":"617-666-1650",
	      "website":"http:\/\/www.prettythingsbeertoday.com\/",
	      "latitude":42.3635847,
	      "longitude":-71.0824613,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"Y",
	      "openToPublic":"N",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:42:06",
	      "updateDate":"2016-06-07 18:33:44",
	      "breweryId":"oe2DQp",
	      "brewery":{
	        "id":"oe2DQp",
	        "name":"Pretty Things Beer & Ale Project",
	        "nameShortDisplay":"Pretty Things Beer & Ale Project",
	        "description":"We are a gypsy brewery, without a permanent brewing home. We like it that way, we can be whatever we want to be on a shoestring budget. What more do you want than that?\r\n\r\nOur flagship beer is Jack D'Or. Jack is the mournful grain of barley you can see to the right. He is the soul of beer, nature's magician, creating sugar from starch and bringing together the Pretty Things to produce the substance we adore: beer.",
	        "website":"http:\/\/www.prettythingsbeertoday.com\/",
	        "established":"2008",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/oe2DQp\/upload_DNOi5b-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/oe2DQp\/upload_DNOi5b-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/oe2DQp\/upload_DNOi5b-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/oe2DQp\/upload_DNOi5b-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/oe2DQp\/upload_DNOi5b-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:42:06",
	        "updateDate":"2015-12-22 15:09:43"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":1
	    },
	    {
	      "id":"VLwX03",
	      "name":"Main Brewery",
	      "streetAddress":"PO Box 1498",
	      "locality":"Boston",
	      "region":"Massachusetts",
	      "postalCode":"02117",
	      "phone":"1-781-963-4007",
	      "latitude":42.3458497,
	      "longitude":-71.0464339,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"Y",
	      "openToPublic":"Y",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:42:03",
	      "updateDate":"2014-09-26 13:41:38",
	      "breweryId":"wCmrsY",
	      "brewery":{
	        "id":"wCmrsY",
	        "name":"New Century Brewing Company",
	        "nameShortDisplay":"New Century",
	        "isOrganic":"N",
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:42:03",
	        "updateDate":"2015-12-22 14:53:07"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":1.2
	    },
	    {
	      "id":"EB3XVT",
	      "name":"Main Brewery",
	      "streetAddress":"1 Kendall Square",
	      "extendedAddress":"Bldg 100",
	      "locality":"Cambridge",
	      "region":"Massachusetts",
	      "postalCode":"02139",
	      "phone":"(617) 494-1994",
	      "website":"http:\/\/www.cambrew.com\/",
	      "hoursOfOperation":"Mon: 11:30 am - 11:00 pm\r\nTue - Thu: 11:30 am - 12:00 am\r\nFri: 11:30 am - 1:00 am\r\nSat: 11:00 am - 1:00 am\r\nSun: 11:00 am - 11:00 pm",
	      "latitude":42.366468,
	      "longitude":-71.0914549,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"brewpub",
	      "locationTypeDisplay":"Brewpub",
	      "countryIsoCode":"US",
	      "yearOpened":"1989",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:41:50",
	      "updateDate":"2014-07-23 19:11:34",
	      "breweryId":"nvfMg1",
	      "brewery":{
	        "id":"nvfMg1",
	        "name":"Cambridge Brewing Company",
	        "nameShortDisplay":"Cambridge",
	        "description":"CBC blends a passion for fresh, flavorful beer and delicious, imaginative cuisine to create a one-of-a-kind dining experience for greater Boston. Since opening in 1989, CBC has been the destination for diners with adventurous palates and a thirst for both authentic flavors and unique interpretations of classic beer styles. To satisfy these appetites, CBC\u2019s brewmaster and chef routinely collaborate on investigating beer-food pairings and ways in which beer\u2014even brewing ingredients\u2014can transform traditional dishes and inspire new ones. This eagerness to ask ourselves \u201cwhat if?\u201d has earned us a slew of accolades, a shelf full of awards and devoted customers who are always eager to try what CBC comes up with next.",
	        "website":"http:\/\/www.cambrew.com\/",
	        "established":"1989",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/nvfMg1\/upload_mcniin-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/nvfMg1\/upload_mcniin-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/nvfMg1\/upload_mcniin-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/nvfMg1\/upload_mcniin-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/nvfMg1\/upload_mcniin-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:41:50",
	        "updateDate":"2015-12-22 14:42:31"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":1.5
	    },
	    {
	      "id":"9aSjFg",
	      "name":"Boston",
	      "streetAddress":"306 Northern Avenue",
	      "locality":"Boston",
	      "region":"Massachusetts",
	      "postalCode":"02210",
	      "phone":"1-888-HARPOON",
	      "website":"http:\/\/www.harpoonbrewery.com",
	      "latitude":42.3465,
	      "longitude":-71.033843,
	      "isPrimary":"N",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"N",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "yearOpened":"1986",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:42:15",
	      "updateDate":"2014-09-26 14:01:43",
	      "breweryId":"RzvedX",
	      "brewery":{
	        "id":"RzvedX",
	        "name":"Harpoon Brewery",
	        "nameShortDisplay":"Harpoon",
	        "description":"We started the Harpoon Brewery in 1986 because\u2014like today\u2014we loved beer and wanted more quality choices.  \r\n\r\nThere was only one problem: we were beer lovers, not brewers. We knew what we wanted to drink, but we needed some help actually brewing it. So we enlisted our first brewer, took over some warehouse space on the Boston waterfront, and began introducing fresh, local craft beer to Boston drinkers. We tried to do it in a way that captured the spirit of fun that had brought us to beer in the first place. From that warehouse, surrounded by fish companies on the docks of South Boston (neighboring what is now the Seaport District), we couldn\u2019t imagine that craft brewing would become what it has today.  \r\n\r\nWe still remember our days on the other side of the bar, and have spent as much time spreading the joy of beer drinking as we have focusing on recipes, ingredients, and brewing equipment. Hopefully our sense of gratitude is reflected in both the quality of the beer and the spirit of fun and enjoyment surrounding our beer and breweries. We invite all of you to visit our Boston brewery, where it all began, and our beautiful brewery in Windsor, Vermont.",
	        "website":"http:\/\/www.harpoonbrewery.com\/",
	        "established":"1986",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/RzvedX\/upload_AbOUmA-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/RzvedX\/upload_AbOUmA-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/RzvedX\/upload_AbOUmA-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/RzvedX\/upload_AbOUmA-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/RzvedX\/upload_AbOUmA-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:41:57",
	        "updateDate":"2015-12-22 14:47:47"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":1.7
	    },
	    {
	      "id":"uRlbJl",
	      "name":"Boston Beer Works",
	      "streetAddress":"61 Brookline Ave",
	      "locality":"Boston",
	      "region":"Massachusetts",
	      "postalCode":"02215",
	      "phone":"617-536-2337",
	      "website":"http:\/\/www.beerworks.net\/",
	      "latitude":42.3470085,
	      "longitude":-71.0987753,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"N",
	      "locationType":"brewpub",
	      "locationTypeDisplay":"Brewpub",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:42:15",
	      "updateDate":"2014-07-23 19:11:34",
	      "breweryId":"oXpZ0p",
	      "brewery":{
	        "id":"oXpZ0p",
	        "name":"Slesar Bros Brewing Co",
	        "nameShortDisplay":"Slesar Bros",
	        "website":"http:\/\/www.beerworks.net\/",
	        "isOrganic":"N",
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:42:15",
	        "updateDate":"2015-12-22 15:26:20"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":1.8
	    },
	    {
	      "id":"pYoN1d",
	      "name":"Main Brewery - Fenway",
	      "streetAddress":"61 Brookline Avenue",
	      "locality":"Boston",
	      "region":"Massachusetts",
	      "postalCode":"02215",
	      "phone":"617-536-2337",
	      "website":"http:\/\/www.beerworks.net\/",
	      "hoursOfOperation":"Monday through Saturday 11 AM until 11 PM\r\n\r\nOpens early for Red Sox Opening Day, Marathon Monday and other early Sox\/Event Days.",
	      "latitude":42.3471278,
	      "longitude":-71.0990805,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:41:47",
	      "updateDate":"2014-09-29 20:36:21",
	      "breweryId":"eGBo2o",
	      "brewery":{
	        "id":"eGBo2o",
	        "name":"Boston Beer Works",
	        "nameShortDisplay":"Boston Beer Works",
	        "website":"http:\/\/www.beerworks.net\/",
	        "established":"1992",
	        "isOrganic":"N",
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:41:47",
	        "updateDate":"2015-12-22 14:40:23"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":1.8
	    },
	    {
	      "id":"pATY6L",
	      "name":"Main Brewery",
	      "streetAddress":"15 Ward St.",
	      "locality":"Somerville",
	      "region":"Massachusetts",
	      "postalCode":"02143",
	      "phone":"1-800-428-1150",
	      "website":"http:\/\/www.slumbrew.com\/",
	      "hoursOfOperation":"Mon:  11:00am - 12:00am\nTue:  11:00am - 12:00am\nWed:  11:00am - 12:00am\nThu:  11:00am - 12:00am\nFri:  11:00am - 12:00am\nSat:  11:00am - 12:00am\nSun:  11:00am - 10:00pm\n\n",
	      "latitude":42.3748173,
	      "longitude":-71.0892732,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "yearOpened":"2011",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-02-13 00:36:08",
	      "updateDate":"2015-05-08 13:45:09",
	      "breweryId":"gwDTjS",
	      "brewery":{
	        "id":"gwDTjS",
	        "name":"Somerville Brewing Company",
	        "nameShortDisplay":"Somerville",
	        "description":"Slumbrew is all about the synergy between craft products and every day consumption. Well conceived, locally-sourced, quality products should be an every day part of our lives \u2013 not a unique occurrence. This is the spirit of Slumbrew.\r\n\r\nSlumbrew is the research & development brand and concept of Somerville Brewing Company. Our mission is to brew unique, ingredient-driven beers that challenge common notions of what a beer should taste like. It is the result of nearly 15 years of beer travel and research by Caitlin Jewell and Jeff Leiter; and a decade of Jeff\u2019s homebrewing recipe formulation.\r\n\r\nWe produce a lot of small-run, pilot beers at the Slumbrew Beerlab, but only a small number make their way to commercial production. The Somerville Brewing Company contracts with regional breweries to make the best recipes for wide-spread commercial release, but each recipe is an evolving process of refinement. This model for beer production provides an opportunity to experiment with innovative local ingredients to produce craft beers that stand apart from typical formulations.",
	        "website":"http:\/\/www.slumbrew.com\/",
	        "established":"2011",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/gwDTjS\/upload_6jyi8Y-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/gwDTjS\/upload_6jyi8Y-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/gwDTjS\/upload_6jyi8Y-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/gwDTjS\/upload_6jyi8Y-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/gwDTjS\/upload_6jyi8Y-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-02-13 00:30:15",
	        "updateDate":"2015-12-22 15:28:13"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":1.8
	    },
	    {
	      "id":"ETPxXo",
	      "name":"Main Brewery",
	      "streetAddress":"230 Somerville Ave",
	      "locality":"Somerville",
	      "region":"Massachusetts",
	      "postalCode":"02143",
	      "phone":"(617) 299-8600",
	      "website":"http:\/\/www.bantamcider.com",
	      "latitude":42.37807,
	      "longitude":-71.092168,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "yearOpened":"2011",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2014-06-06 12:21:26",
	      "updateDate":"2014-07-23 19:11:34",
	      "breweryId":"TIn5vy",
	      "brewery":{
	        "id":"TIn5vy",
	        "name":"Bantam Cider",
	        "nameShortDisplay":"Bantam Cider",
	        "description":"Modern American Cider. We are committed to making creative and distinctive crafted cider using fresh pressed apples and high-quality, all-natural ingredients.",
	        "website":"http:\/\/www.bantamcider.com",
	        "established":"2012",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/TIn5vy\/upload_5V8OOI-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/TIn5vy\/upload_5V8OOI-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/TIn5vy\/upload_5V8OOI-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/TIn5vy\/upload_5V8OOI-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/TIn5vy\/upload_5V8OOI-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2014-06-05 21:27:24",
	        "updateDate":"2015-12-22 15:54:31"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":2.1
	    },
	    {
	      "id":"WCPtV5",
	      "name":"Main Brewery",
	      "streetAddress":"1281 Cambridge St.",
	      "locality":"Cambridge",
	      "region":"Massachusetts",
	      "postalCode":"021396",
	      "latitude":42.3736495,
	      "longitude":-71.0987416,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2015-07-09 18:54:11",
	      "updateDate":"2015-07-09 18:54:11",
	      "breweryId":"GkOm1P",
	      "brewery":{
	        "id":"GkOm1P",
	        "name":"Portico Brewing Company",
	        "nameShortDisplay":"Portico",
	        "website":"http:\/\/www.porticobrewing.com\/",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/GkOm1P\/upload_UhCZ8q-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/GkOm1P\/upload_UhCZ8q-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/GkOm1P\/upload_UhCZ8q-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/GkOm1P\/upload_UhCZ8q-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/GkOm1P\/upload_UhCZ8q-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2015-07-09 18:51:33",
	        "updateDate":"2015-12-22 16:13:16"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":2.1
	    },
	    {
	      "id":"rO78za",
	      "name":"Main Cidery",
	      "streetAddress":"200 Terminal St.",
	      "locality":"Charlestown",
	      "region":"Massachusetts",
	      "postalCode":"02129",
	      "phone":"(857) 301-8881",
	      "website":"http:\/\/downeastcider.com\/",
	      "hoursOfOperation":"Fri:  1:00pm - 5:00pm\nSat:  12:00pm - 10:00pm\nSun:  1:00pm - 6:00pm\n\n",
	      "latitude":42.383121,
	      "longitude":-71.0500472,
	      "isPrimary":"Y",
	      "inPlanning":"Y",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"cidery",
	      "locationTypeDisplay":"Cidery",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2015-03-10 20:13:10",
	      "updateDate":"2015-03-10 20:13:10",
	      "breweryId":"IiXNhx",
	      "brewery":{
	        "id":"IiXNhx",
	        "name":"Down East Cider",
	        "nameShortDisplay":"Down East Cider",
	        "description":"Downeast Cider House was founded by Ross Brockman and Tyler Mosher during their senior year of college. After a considerable amount of time spent on the family orchard, an affinity for farm-fresh apple products was born. Meanwhile, at school, the guys could always be found studying. Whether it was deep into a weekend night, Wed\/Thurs specials at the local library, or perhaps a casual \u201cSunday fun-day study-day,\u201d the fellas were relentlessly toiling away, focused primarily on the classic works of Professor Busch and his famous theories on the smooth-cold continuum, copper-top revision.",
	        "website":"http:\/\/www.downeastcider.com\/",
	        "established":"2011",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/IiXNhx\/upload_CRNSlQ-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/IiXNhx\/upload_CRNSlQ-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/IiXNhx\/upload_CRNSlQ-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/IiXNhx\/upload_CRNSlQ-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/IiXNhx\/upload_CRNSlQ-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2015-03-10 19:22:50",
	        "updateDate":"2015-12-22 16:05:52"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":2.1
	    },
	    {
	      "id":"V3KZk3",
	      "name":"Main Brewery",
	      "streetAddress":"14 Tyler St",
	      "locality":"Somerville",
	      "region":"Massachusetts",
	      "postalCode":"02143",
	      "phone":"(617) 718-0602",
	      "website":"http:\/\/www.aeronautbrewing.com\/",
	      "latitude":42.3817829,
	      "longitude":-71.1056689,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2014-07-25 13:40:04",
	      "updateDate":"2015-12-03 19:16:21",
	      "breweryId":"zKipbt",
	      "brewery":{
	        "id":"zKipbt",
	        "name":"Aeronaut Brewing Company",
	        "nameShortDisplay":"Aeronaut",
	        "description":"Aeronaut is a craft brewery and foods hub under one roof. Here, our inspired team of brewers and scientists collaborate with New England farmers and food makers to drive the invention of craft beers and spur a renaissance of local victuals and industrial revitalization.",
	        "website":"http:\/\/www.aeronautbrewing.com\/",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/zKipbt\/upload_Pi2iNv-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/zKipbt\/upload_Pi2iNv-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/zKipbt\/upload_Pi2iNv-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/zKipbt\/upload_Pi2iNv-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/zKipbt\/upload_Pi2iNv-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2014-07-25 13:39:24",
	        "updateDate":"2015-12-22 15:56:26"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":2.8
	    },
	    {
	      "id":"a7z4aQ",
	      "name":"Main Brewery",
	      "streetAddress":"174 Williams Street",
	      "locality":"Chelsea",
	      "region":"Massachusetts",
	      "postalCode":"02150",
	      "phone":"617-800-9023",
	      "website":"http:\/\/www.mystic-brewery.com\/",
	      "latitude":42.3920022,
	      "longitude":-71.044077,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:42:03",
	      "updateDate":"2014-07-23 19:11:34",
	      "breweryId":"7yzKhF",
	      "brewery":{
	        "id":"7yzKhF",
	        "name":"Mystic Brewery",
	        "nameShortDisplay":"Mystic",
	        "description":"Mystic microbes abhorred the isolation of the industrial age. They became a microscopic cabal intent on flourishing. As mystic brewers we yield to their intent; we let them make the beer. Our job is to goad them unto self-realization.",
	        "website":"http:\/\/www.mystic-brewery.com\/",
	        "established":"2011",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/7yzKhF\/upload_TNpMKj-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/7yzKhF\/upload_TNpMKj-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/7yzKhF\/upload_TNpMKj-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/7yzKhF\/upload_TNpMKj-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/7yzKhF\/upload_TNpMKj-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:42:03",
	        "updateDate":"2015-12-22 15:14:28"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":2.8
	    },
	    {
	      "id":"dgdVJz",
	      "name":"American Fresh Beer Garden",
	      "streetAddress":"310 Canal St.",
	      "locality":"Somerville",
	      "region":"Massachusetts",
	      "postalCode":"02145",
	      "phone":"1.800.428.1150",
	      "hoursOfOperation":"Tue:  11:00am - 10:00pm\nWed:  11:00am - 10:00am\nThu:  11:00am - 12:00am\nFri:  11:00am - 12:00am\nSat:  11:00am - 12:00am\nSun:  11:00am - 12:00am\n\n",
	      "latitude":42.3941311,
	      "longitude":-71.079673,
	      "isPrimary":"N",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"brewpub",
	      "locationTypeDisplay":"Brewpub",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2015-05-08 13:50:59",
	      "updateDate":"2015-05-08 13:50:59",
	      "breweryId":"gwDTjS",
	      "brewery":{
	        "id":"gwDTjS",
	        "name":"Somerville Brewing Company",
	        "nameShortDisplay":"Somerville",
	        "description":"Slumbrew is all about the synergy between craft products and every day consumption. Well conceived, locally-sourced, quality products should be an every day part of our lives \u2013 not a unique occurrence. This is the spirit of Slumbrew.\r\n\r\nSlumbrew is the research & development brand and concept of Somerville Brewing Company. Our mission is to brew unique, ingredient-driven beers that challenge common notions of what a beer should taste like. It is the result of nearly 15 years of beer travel and research by Caitlin Jewell and Jeff Leiter; and a decade of Jeff\u2019s homebrewing recipe formulation.\r\n\r\nWe produce a lot of small-run, pilot beers at the Slumbrew Beerlab, but only a small number make their way to commercial production. The Somerville Brewing Company contracts with regional breweries to make the best recipes for wide-spread commercial release, but each recipe is an evolving process of refinement. This model for beer production provides an opportunity to experiment with innovative local ingredients to produce craft beers that stand apart from typical formulations.",
	        "website":"http:\/\/www.slumbrew.com\/",
	        "established":"2011",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/gwDTjS\/upload_6jyi8Y-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/gwDTjS\/upload_6jyi8Y-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/gwDTjS\/upload_6jyi8Y-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/gwDTjS\/upload_6jyi8Y-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/gwDTjS\/upload_6jyi8Y-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-02-13 00:30:15",
	        "updateDate":"2015-12-22 15:28:13"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":2.8
	    },
	    {
	      "id":"BirFEL",
	      "name":"Cambridge",
	      "streetAddress":"33 Dunster Street",
	      "locality":"Cambridge",
	      "region":"Massachusetts",
	      "postalCode":"02138",
	      "phone":"617-868-3585",
	      "website":"http:\/\/johnharvards.com\/",
	      "latitude":42.3724324,
	      "longitude":-71.1193062,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"N",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:42:15",
	      "updateDate":"2014-09-26 14:02:09",
	      "breweryId":"z2MPZY",
	      "brewery":{
	        "id":"z2MPZY",
	        "name":"John Harvard's Brew House",
	        "nameShortDisplay":"John Harvard's Brew House",
	        "description":"John Harvard\u2019s boasts and extensive list of brews, ranging from the tried and true All Amrican Light Lager to the rich, roasted Dry Irish Stout. In addition, we carry a full-line of seasonal brews, so you\u2019re sure to find the perfect beer any time of year.\r\n\r\nWhen you come to John Harvard\u2019s, please check with your server to find out what specialty beers are available, as well. Our award winning brewers offer a range of beer styles from around the world.",
	        "website":"http:\/\/johnharvards.com\/",
	        "established":"1992",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/z2MPZY\/upload_u8ael6-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/z2MPZY\/upload_u8ael6-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/z2MPZY\/upload_u8ael6-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/z2MPZY\/upload_u8ael6-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/z2MPZY\/upload_u8ael6-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:42:15",
	        "updateDate":"2015-12-22 14:49:18"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":3
	    },
	    {
	      "id":"DF5YsC",
	      "name":"Main Brewery",
	      "streetAddress":"30 Germania Street",
	      "locality":"Boston",
	      "region":"Massachusetts",
	      "postalCode":"02130",
	      "phone":"1-800-372-1131",
	      "website":"http:\/\/www.samueladams.com\/",
	      "latitude":42.314449,
	      "longitude":-71.103365,
	      "isPrimary":"N",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "yearOpened":"1984",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:41:47",
	      "updateDate":"2015-12-02 19:22:03",
	      "breweryId":"1wSztN",
	      "brewery":{
	        "id":"1wSztN",
	        "name":"Boston Beer Company",
	        "nameShortDisplay":"Boston Beer",
	        "description":"Today, we're a team of about 750 people, and we all share a common passion for bringing great Samuel Adams beers to beer lovers everywhere. We've worked hard and are incredibly proud of the many successes we've enjoyed over the years. The Boston Beer Company has been cited as one of the best companies to work for by Boston Magazine, one of the Best Entry-Level Jobs by The Princeton Review, and our beers have won more awards than any other in history. Jim has been named an \"Entrepreneur of the Year\" by Inc. Magazine. Our brewers keep amazing us with innovative new brews, including Samuel Adams Utopias and our Samuel Adams Barrel Room Collection.\r\n\r\nJim has believed from the beginning that the more you know and understand about beer, the more you'll appreciate a beer like Samuel Adams Boston Lager. To begin that mission, all new employees go through intensive training on everything from ingredients, brewing, and beer styles, to taking care of the beer once it leaves the brewery. We're all beer lovers and protectors of the beer so we're trained how to identify off flavors and how to troubleshoot the causes. The passion for beer continues with an annual homebrew competition that we all take part in.\r\n\r\nOne of our wholesalers once asked Jim why he invested so much in training his people, when ultimately they might leave. Jim smiled and replied without hesitation: \"What if I didn't train them, and they stayed?\"\r\n\r\nEach year, usually in January, everyone gathers together. One of the highlights of the meeting is the beer trivia contest. With a culture so steeped in beer education and knowledge, winning is a pretty big deal. Recently, one of the hotel bartenders who was watching as the various teams arrived in costume with music and much enthusiasm and fanfare, said, \"I've always known Samuel Adams made the best beer in America, but now I see this is the greatest company in America.\" When you look around you see that The Boston Beer Company is a team of enthusiastic people who are passionate about beer and who really love coming to work every day to provide American drinkers with the best beer possible.\r\n\r\nThe Boston Beer Company, Inc. is a publicly-traded company listed on the New York Stock Exchange under the symbol, SAM.",
	        "website":"http:\/\/www.samueladams.com\/",
	        "established":"1984",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/1wSztN\/upload_C4C7qF-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/1wSztN\/upload_C4C7qF-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/1wSztN\/upload_C4C7qF-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/1wSztN\/upload_C4C7qF-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/1wSztN\/upload_C4C7qF-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:41:47",
	        "updateDate":"2015-12-22 15:24:45"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":3.4
	    },
	    {
	      "id":"jtBUsv",
	      "name":"Main Brewery",
	      "streetAddress":"87 Santilli Highway",
	      "locality":"Everett",
	      "region":"Massachusetts",
	      "postalCode":"02149",
	      "phone":"978-270-6613",
	      "website":"http:\/\/www.nightshiftbrewing.com\/",
	      "latitude":42.4061138,
	      "longitude":-71.0674884,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"tasting",
	      "locationTypeDisplay":"Tasting Room",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-03-27 11:45:26",
	      "updateDate":"2015-05-05 15:47:50",
	      "breweryId":"B1gDW0",
	      "brewery":{
	        "id":"B1gDW0",
	        "name":"Night Shift Brewing",
	        "nameShortDisplay":"Night Shift",
	        "description":"Night Shift Brewing is three friends who turned a passion for nocturnal brewing into our profession. Started in a Somerville kitchen, we now brew at our Everett, MA nanobrewery. Fusing unique ingredients into an array of rich, complex flavors, we present and pour our small-batch creations throughout Greater Boston. Our mission: the innovation and sharing of memorable craft beer.",
	        "website":"http:\/\/www.nightshiftbrewing.com\/",
	        "established":"2011",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/B1gDW0\/upload_v0AYDG-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/B1gDW0\/upload_v0AYDG-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/B1gDW0\/upload_v0AYDG-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/B1gDW0\/upload_v0AYDG-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/B1gDW0\/upload_v0AYDG-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-03-27 11:43:29",
	        "updateDate":"2015-12-22 15:28:39"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":3.6
	    },
	    {
	      "id":"3OOWRS",
	      "name":"Main Brewery",
	      "streetAddress":"1630 Dorchester Ave.",
	      "locality":"Dorchester",
	      "region":"Massachusetts",
	      "phone":"781-664-4705",
	      "website":"http:\/\/www.percivalbeercompany.com\/",
	      "latitude":42.294767,
	      "longitude":-71.061486,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"N",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "yearOpened":"2010",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-12-10 12:11:14",
	      "updateDate":"2014-07-23 19:11:34",
	      "breweryId":"f5TLVN",
	      "brewery":{
	        "id":"f5TLVN",
	        "name":"Percival Beer Company",
	        "nameShortDisplay":"Percival",
	        "description":"ercival Beer Company was discovered in 2010, but wasn't launched until 2012. After home brewing for over three years, we felt compelled to share our great beer with other beer drinkers and our community.\r\n\ufeff\r\nOur desire was to brew and distribute quality Craft Beer Brands that can be enjoyed and appreciated by all, not just a few. In addition, we wanted to help showcase the diverse personalities of Boston. Thus, PBC set out to develop brands which directly represented  the diverse neighborhoods that make up Boston, Massachusetts. In particular, we focused our efforts at spotlighting the multi-ethnic neighborhood of Dorchester.",
	        "website":"http:\/\/www.percivalbeercompany.com\/",
	        "established":"2010",
	        "isOrganic":"N",
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-12-10 12:09:39",
	        "updateDate":"2015-12-22 15:39:17"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":4.1
	    },
	    {
	      "id":"7w7trb",
	      "name":"Main Brewery",
	      "streetAddress":"89 Commercial Stree",
	      "locality":"Malden",
	      "region":"Massachusetts",
	      "postalCode":"02148",
	      "website":"http:\/\/www.idlehandscraftales.com\/",
	      "latitude":42.4243943,
	      "longitude":-71.0747573,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"nano",
	      "locationTypeDisplay":"Nano Brewery",
	      "countryIsoCode":"US",
	      "yearOpened":"2010",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:41:58",
	      "updateDate":"2015-10-19 17:10:19",
	      "breweryId":"UPyYMm",
	      "brewery":{
	        "id":"UPyYMm",
	        "name":"Idle Hands Craft Ales",
	        "nameShortDisplay":"Idle Hands Craft Ales",
	        "description":"Based in Everett, Massachusetts, Idle Hands Craft Ales is the Boston area\u2019s only nanobrewery.  We hand craft our beer with a nod towards belgian styles mixed with new world ideas. Founded in 2010, we recently received our federal license only days before the new year and are currently planning to produce our first commercial beers by late Winter\/early Spring 2011.",
	        "website":"http:\/\/www.idlehandscraftales.com\/",
	        "established":"2010",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/UPyYMm\/upload_70DJ68-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/UPyYMm\/upload_70DJ68-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/UPyYMm\/upload_70DJ68-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/UPyYMm\/upload_70DJ68-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/UPyYMm\/upload_70DJ68-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:41:58",
	        "updateDate":"2015-12-22 15:09:37"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":4.8
	    },
	    {
	      "id":"Q0pTRZ",
	      "name":"Main Brewery",
	      "streetAddress":"292 Centre Street",
	      "locality":"Newton",
	      "region":"Massachusetts",
	      "postalCode":"02458",
	      "phone":"617-916-0752",
	      "latitude":42.3583332,
	      "longitude":-71.1846242,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"Y",
	      "locationType":"brewpub",
	      "locationTypeDisplay":"Brewpub",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2014-11-14 18:51:09",
	      "updateDate":"2015-11-18 21:47:35",
	      "breweryId":"iIQ8cF",
	      "brewery":{
	        "id":"iIQ8cF",
	        "name":"Hopster's",
	        "nameShortDisplay":"Hopster's",
	        "description":"A beer is only as good as its ingredients, and at Hopsters we provide the best. We\u2019ve partnered with the Wood Family Farm in Dudley, MA to source organic ingredients for our beers as well as meat and cheese for our charcuterie boards.\r\n\r\nJust as we\u2019re committed to showing the full-circle process of beer brewing beer at Hopsters, we\u2019re also committed to full-circle local farming. We send the used grains (byproducts of the brewing process) back to Woods Farm to feed the pigs raised there. You could say we\u2019re a \u201cfarm-to-table-and-back-to-farm\u201d kind of place!",
	        "website":"http:\/\/www.hopsters.net\/",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/iIQ8cF\/upload_e5jzGh-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/iIQ8cF\/upload_e5jzGh-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/iIQ8cF\/upload_e5jzGh-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/iIQ8cF\/upload_e5jzGh-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/iIQ8cF\/upload_e5jzGh-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2014-11-14 00:12:34",
	        "updateDate":"2015-12-22 16:01:22"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":6.1
	    },
	    {
	      "id":"Pz9reO",
	      "name":"Main Brewery",
	      "locality":"Newton",
	      "region":"Massachusetts",
	      "latitude":42.3370413,
	      "longitude":-71.2092214,
	      "isPrimary":"Y",
	      "inPlanning":"Y",
	      "isClosed":"N",
	      "openToPublic":"N",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2015-06-16 16:16:07",
	      "updateDate":"2015-06-16 16:16:07",
	      "breweryId":"N2BqUv",
	      "brewery":{
	        "id":"N2BqUv",
	        "name":"Down the Road Beer Co.",
	        "nameShortDisplay":"Down the Road Beer Co.",
	        "description":"An up-and-coming Metro Boston beer crafter. We are committed to making top-quality beer and getting it to you at the peak of freshness. Get Thirsty!",
	        "website":"http:\/\/www.downtheroadbrewery.com",
	        "established":"2013",
	        "mailingListUrl":"http:\/\/downtheroadbrewery.com\/contact\/",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/N2BqUv\/upload_wgyFq0-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/N2BqUv\/upload_wgyFq0-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/N2BqUv\/upload_wgyFq0-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/N2BqUv\/upload_wgyFq0-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/N2BqUv\/upload_wgyFq0-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2015-06-16 12:45:41",
	        "updateDate":"2015-12-22 16:11:09"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":7.4
	    },
	    {
	      "id":"t0Y73R",
	      "name":"Main Brewery",
	      "streetAddress":"256 Moody Street",
	      "locality":"Waltham",
	      "region":"Massachusetts",
	      "postalCode":"02453",
	      "phone":"781-647-4000",
	      "website":"http:\/\/www.watchcitybrew.com\/",
	      "hoursOfOperation":"Mon - Wed:11:30 am-10:00 pm\r\nThu:11:30 am - 10:30 pm\r\nFri - Sat:11:30 am - 11:00 pm\r\nSun:11:30 am - 10:00 pm",
	      "latitude":42.3717819,
	      "longitude":-71.2364457,
	      "isPrimary":"Y",
	      "inPlanning":"Y",
	      "isClosed":"Y",
	      "openToPublic":"N",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "yearOpened":"1996",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2012-01-03 02:42:12",
	      "updateDate":"2015-02-06 13:27:05",
	      "breweryId":"vd0Jcg",
	      "brewery":{
	        "id":"vd0Jcg",
	        "name":"Watch City Brewing Company",
	        "nameShortDisplay":"Watch City",
	        "description":"Welcome to Watch City Brewing Company. As both a restaurant and brewery it is at the core of a vibrant dining scene in the Metrowest. Since 1996 it has consistently provided its customers with fresh, handcrafted beer and intensely appetizing and delicious meals. Watch City beer is highly regarded on both a local and national level, winning distinctions for a number of the styles produced at it\u2019s Moody St. locale. Much like the jeweled pocket watches this city once manufactured, there\u2019s a professional respect for the craftmanship of it\u2019s Brew Master, Aaron Mateychuk. The beer is always satisfying and never sparing for flavor or character.",
	        "website":"http:\/\/www.watchcitybrew.com\/",
	        "established":"1996",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vd0Jcg\/upload_0De941-icon.png",
	          "medium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vd0Jcg\/upload_0De941-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vd0Jcg\/upload_0De941-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vd0Jcg\/upload_0De941-squareMedium.png",
	          "squareLarge":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/vd0Jcg\/upload_0De941-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2012-01-03 02:42:12",
	        "updateDate":"2015-12-22 15:02:14"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":8.8
	    },
	    {
	      "id":"pUVZvr",
	      "name":"Lord Hobo Brewing Company",
	      "streetAddress":"5 Draper St",
	      "locality":"Woburn",
	      "region":"Massachusetts",
	      "postalCode":"01801",
	      "phone":"7812810809",
	      "website":"lordhobobrewing.com",
	      "hoursOfOperation":"Mon:  4:00pm - 9:00pm\nTue:  4:00pm - 9:00pm\nWed:  4:00pm - 9:00pm\nThu:  4:00pm - 9:00pm\nFri:  4:00pm - 10:00pm\nSat:  12:00pm - 10:00pm\nSun:  12:00pm - 6:00pm\n\n",
	      "latitude":42.47621,
	      "longitude":-71.128878,
	      "isPrimary":"Y",
	      "inPlanning":"N",
	      "isClosed":"N",
	      "openToPublic":"N",
	      "locationType":"micro",
	      "locationTypeDisplay":"Micro Brewery",
	      "countryIsoCode":"US",
	      "yearOpened":"2015",
	      "status":"verified",
	      "statusDisplay":"Verified",
	      "createDate":"2015-06-09 18:41:30",
	      "updateDate":"2015-06-15 17:17:38",
	      "breweryId":"NXRM7y",
	      "brewery":{
	        "id":"NXRM7y",
	        "name":"Lord Hobo Brewing Company",
	        "nameShortDisplay":"Lord Hobo",
	        "description":"Hoppy Ales from the Hills of Woburn",
	        "website":"http:\\lordhobobrewing.com",
	        "established":"2015",
	        "isOrganic":"N",
	        "images":{
	          "icon":"https:\\s3.amazonaws.com\/brewerydbapi\/brewery\/NXRM7y\/upload_qomjCu-icon.png",
	          "medium":"https:\\s3.amazonaws.com\/brewerydbapi\/brewery\/NXRM7y\/upload_qomjCu-medium.png",
	          "large":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/NXRM7y\/upload_qomjCu-large.png",
	          "squareMedium":"https:\/\/s3.amazonaws.com\/brewerydbapi\/brewery\/NXRM7y\/upload_qomjCu-squareMedium.png",
	          "squareLarge":"https:\\/s3.amazonaws.com/brewerydbapi/brewery\/NXRM7y\/upload_qomjCu-squareLarge.png"
	        },
	        "status":"verified",
	        "statusDisplay":"Verified",
	        "createDate":"2015-06-09 18:33:47",
	        "updateDate":"2015-12-22 16:10:22"
	      },
	      "country":{
	        "isoCode":"US",
	        "name":"UNITED STATES",
	        "displayName":"United States",
	        "isoThree":"USA",
	        "numberCode":840,
	        "createDate":"2012-01-03 02:41:33"
	      },
	      "distance":9
	    }
	  ],
	  "status":"success"
	};
	var map, infowindow;
	//Set default lat/lng to downtown Boston and location to 'Boston' so we can default back to these coordinates if we can't locate the user
	this.searchLat = ko.observable(42.3545948);
	this.searchLng = ko.observable(-71.0660132);
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
				processBreweryResults(data);
			},
			error: function(){
				console.log("HTTP request failed");
				processBreweryResults(self.defaultData);
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
		console.log(data);
		for (var i = 0; i < len; i++) {
			var	brewery = data.data[i].brewery,
				breweryId = data.data[i].breweryId,
				breweryName = brewery.name;
				breweryLat = data.data[i].latitude,
				breweryLng = data.data[i].longitude,
				breweryType = data.data[i].locationTypeDisplay,
				breweryDescription = brewery.description,
				breweryWebsite = brewery.website,
				breweryYearEstablished = brewery.established,
				breweryHours = data.data[i].hoursOfOperation;
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
		//Load breweries into filtered list of breweries and call createMapMarkers to create markers for breweries
		self.filteredBreweries(self.breweries());
		createMapMarkers(self.filteredBreweries());
		}
	};
	//TODO: Process location search function
	function processLocationSearch (){

	};
	//Handles an array of breweries and creates markers with infoWindows
	function createMapMarkers(array){
		$.each(array, function(index, value) {
			var lat = value.lat,
				lng = value.lng,
				geoLoc = new google.maps.LatLng(lat, lng),
				breweryName = value.name;

			var contentString = '<div id="infowindow" class="infowindow">'+
			'<div class="header-container">' +
			'<img src="' + value.iconImage + '">' +
			'<h4>' + value.name + '</h4>' +
			'</div>' +
			'<p>' + value.address + '</p>' +
			'<p><a href="' + value.website + '">' + value.website + '</a></p>' +
			'<p>' + value.description + '</p>' +
			'<button>Show me this brewerys beers' +
			'<span class="glyphicon glyphicon-glass"></span>' +
			'</button>' +
			'</div>';

			var marker = new google.maps.Marker({
					position: geoLoc,
					title: breweryName,
					map: map,
					icon: 'http://www.travelhudsonvalley.com/wp-content/uploads/2015/07/HVT_BreweryIcon.jpg'
				});
			self.mapMarkers.push({marker: marker, content: contentString});
			//Create infowindows for all the markers
			var infowindow = new google.maps.InfoWindow({
				content: contentString,
				maxWidth: 450
			});
			marker.addListener('click', function(){
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
		$('map-canvas list-width-30').html('Google Maps was unable to load. Please refresh your browser and try again');
	}, 8000);
	//TODO: filter breweries
	function filterBreweries(){

	};
	//TODO: get beers function to return all beers from a brewery called by button in infowindows
	function getBeers(beer){

	};
	//Handle the clicked li element for brewery results. Pans the map to the marker and opens the infoWindow for that marker
	function goToMarker(clickedBrewery){
		var clickedBreweryName = clickedBrewery.name;
		console.log(clickedBrewery);
		console.log(clickedBreweryName);
		for (var key in self.mapMarkers()) {
			if (clickedBreweryName === self.mapMarkers()[key].marker.title) {
				map.panTo(self.mapMarkers()[key].marker.position);
				infowindow.setContent(self.mapMarkers[key].marker.content);
				infowindow.open(map, self.mapMarkers()[key].marker);
			}
		}
	};
	mapInit();
};

ko.applyBindings(new appViewModel());