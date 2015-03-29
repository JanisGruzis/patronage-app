controllers.controller('ReportMap', ['$scope', '$http',
    function ($scope, $http) {
		var mapOptions = {
			center: { lat: 56.912464, lng: 24.158249},
			zoom: 11
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

		$http.get('http://patronage.cloudapp.net/app_dev.php/rest/report')
			.success(function(data){
				_.each(data, function(item){
					var title = 'Nezināms';

					switch (item.type)
					{
						case 1:
							title = 'Hobo';
							break;
						case 2:
							title = 'Crowd';
							break;
						case 3:
							title = 'Stowaway';
							break;
						case 4:
							title = 'Grannies';
							break;
					}

					var ll = new google.maps.LatLng(item.lat, item.lng);
					var marker = new google.maps.Marker({
						position: ll,
						title: title,
						map: map,
						icon: 'img/' + item.type + '.png'
					});

					var infowindow = new google.maps.InfoWindow({
						content: title
					});

					google.maps.event.addListener(marker, 'click', function() {
						infowindow.open(map,marker);
					});
				});
			});

		google.maps.event.addDomListener(window, 'load', initialize);
    }
]);
