//todo add modular loading with require js http://knockoutjs.com/documentation/amd-loading.html

//map init and starting coords
//todo update to be based on state machine and add markers dynamically
var map;

//this initializes the google map on the page to load async
function initMap() {
    var lat = mapArea.lat;
    var lng = mapArea.lng;
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat, lng },
        zoom: 14
            //todo change control defaults to prevent interference with new location button
            //https://developers.google.com/maps/documentation/javascript/controls#Adding_Controls_to_the_Map
            //todo change the map space to change on rezise so that 15% of map is not off screen on desktop
    });
    var tribeca = { lat: 40.719526, lng: -74.0089934 };
    var marker = new google.maps.Marker({
        position: tribeca,
        map: map,
        title: 'tribeca'
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'la;sdkfjl;asdfj'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

//initial map area used in initMap
var mapArea = {
    lat: 30.284301,
    lng: -97.74473390000001
};

//Main view model
var ViewModel = function() {
    var self = this;
    //todo add current object and state machine

    //todo implement areas
    /*var allAreas = ko.observableArray([
        {'default': new Area()}
    ]);*/

    self.locationArray = ko.observableArray([]);

    //function called when a location is being added
    self.newLocation = function(address, nickname) {
        var obj = {};
        obj['nickname'] = nickname;
        obj['placeInfo'] = new Location(address);

        //push the newLocation to locationArray 
        self.locationArray.push(obj);
    };
};

//location class used within viewmodel
var Location = function(address) {
    //stores the google maps json info
    this.address = address;
};

var vm = new ViewModel();

ko.applyBindings(vm);