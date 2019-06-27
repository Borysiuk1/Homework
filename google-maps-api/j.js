(function($) {
   $(window).on('load', function () {
      var map;
      var mapContainer = $('#map')[0];
      var mapCenter = {lat: 49.218383, lng: 28.437557};

      map = new google.maps.Map(mapContainer, {
         center: mapCenter,
         zoom: 17,
         disableDefaultUI: true
      });

      var icon = {
         url: 'https://static.thenounproject.com/png/224964-200.png',
         scaledSize: new google.maps.Size(120,120)
      }

      var marker = new google.maps.Marker({
         position: mapCenter,
         map: map,
         icon: icon
      });

      var CITIES_DATA = {
         poltava: {lat: 49.592552, lng: 34.547128},
         kyiv: {lat: 50.449511, lng: 30.532976},
         odessa: {lat: 46.482124, lng: 30.707181}
      }

      $( "#citySelector" ).change(function() {
         var selectedCity = this.value;
         var currentMapCenter = CITIES_DATA[selectedCity];
         var  currentLocation = new google.maps.LatLng(currentMapCenter.lat, currentMapCenter.lng);
         marker.setPosition(currentLocation);
         map.setCenter(new google.maps.LatLng(currentMapCenter.lat, currentMapCenter.lng));
      });
   });
})(jQuery);