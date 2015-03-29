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
		 * Init google charts.
		 */
		var initGoogleChart = function(){

			var drawChart = function(type, title, elem) {

				var data = _.filter($scope.reports, function(value){
					return value.type == type && value.transport;
				});

				data = _.groupBy(data, function(value){
					return value.transport.name;
				});

				data = _.map(data, function(value, key){
					return [key, value.length ];
				});

				if (data.length) {
					data = _.first(data, 5);
					var colors = ['#2d89ef', '#ffc40d', '#7e3878', '#1e7145', '#00aba9'];
					for (var i = 0; i < data.length; ++i) {
						data[i].push(colors[i]);
					}

					// Create the data table.
					var tableData = google.visualization.arrayToDataTable(
						[['Transport Nr.', getLabel(type), {role: 'style'}]].concat(data)
					);

					// Set chart options
					var options = {
						title: title,
						width: 400,
						height: 300
					};

					// Instantiate and draw our chart, passing in some options.
					var chart = new google.visualization.ColumnChart(elem);
					chart.draw(tableData, options);
				}
			};

			function drawCharts(){
				var args = [
					[1, 'Buses with most homeless.', document.getElementById('chart-homeless')],
					[2, 'Most crowded buses.', document.getElementById('chart-crowded')],
					[3, 'Buses with most rabbits.', document.getElementById('chart-rabbit')],
					[4, 'Dirtiest buses.', document.getElementById('chart-dirty')]
				];

				_.each(args, function(item){
					drawChart(item[0], item[1], item[2]);
				});
			};

			drawCharts();
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
				initGoogleChart();
			});
	}
]);
