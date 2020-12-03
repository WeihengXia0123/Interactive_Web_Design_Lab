/*get lat and lng */
function getLocation() {
    let location = navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            var loc;
            loc = {lat: lat, long: long};

            return loc;
            });
    return location;
}

/* reverse address to get city and country */
function reverseLocation(){
    /* Initialise Reverse Geocode API Client */
    var reverseGeocoder=new BDCReverseGeocode();
    
    /* Get the current user's location information, based on the coordinates provided by their browser */
    /* Fetching coordinates requires the user to be accessing your page over HTTPS and to allow the location prompt. */
    reverseGeocoder.getClientLocation(function(result) {
        console.log(result);
    });

    /* Get the administrative location information using a set of known coordinates */
    reverseGeocoder.getClientLocation({
        latitude: location.lat,
        longitude: location.lng,
    },function(result) {
        console.log(result);
    });

    /* You can also set the locality language as needed */
    reverseGeocoder.localityLanguage='es';

    /* Request the current user's coordinates (requires HTTPS and acceptance of prompt) */
    reverseGeocoder.getClientCoordinates(function(result) {
        console.log(result);
        res = result;
    });
    alert(res);
}
reverseLocation();