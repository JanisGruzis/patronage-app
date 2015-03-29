controllers.controller('ReportMap', ['$scope', '$http',
    function ($scope, $http) {

		var getLabel = function(type){
			switch (type)
			{
				case 1:
					return 'Homeless';
					break;
				case 2:
					return 'Crowd';
					break;
				case 3:
					return 'Rabbit';
					break;
				case 4:
					return 'Dirty';
					break;
			}
			return 'Unknown';
		};

		/**
		 * Init google map.
		 */
		var initGoogleMap = function()
		{
			var mapOptions = {
				center: { lat: 56.912464, lng: 24.158249},
				zoom: 11
			};

			var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			_.each($scope.reports, function(item){
				var title = getLabel(item.type);

				if (item.transport)
				{
					var transport = item.transport;
					title = transport.type + ' ' + transport.name + '. ' + title;
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

			google.maps.event.addDomListener(window, 'load');
		};

		$http.get('http://patronage.cloudapp.net/api/report')
			.success(function(data) {
				$scope.reports = data;
				initGoogleMap();
			});
	}
]);
