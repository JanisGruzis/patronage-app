controllers.controller('Time', ['$scope', '$http', '$routeParams', '$rootScope',
	function ($scope, $http, $routeParams, $rootScope) {
		$scope.getColor = function (rating){
			/*
			var palette = [
				'#16a085',
				'#16a085',
				'#1abc9c',
				'#2ecc71',
				'#8cbf26',
				'#f1c40f',
				'#f39c12',
				'#e67e22',
				'#d35400',
				'#e74c3c',
				'#c0392b'
			]
			*/
			//var n = rating;
			//var R = Math.round((255 * n));
			//var G = Math.round((255 * (1 - n)));
			//var B = 0;
			//return ("rgb(" + R.toString() + ", " + G.toString() + ", " + B.toString() + ")");
			//return "#"+(R).toString(16)+(G).toString(16)+(B).toString(16);
			//return palette[Math.round((palette.length - 1) * rating)];
			return 'minute-color-2-' + ((Math.round(4 * rating) + 1).toString());
		}
		
		$rootScope.gNumber = $routeParams.stops;
		$http.get('http://patronage.cloudapp.net/rest/time/list/'
			+ $routeParams.routeId + '/' + $routeParams.stopId)
			.success(function(data){
				var keys = _.keys(data);
				if (keys.length > 0)
				{
					$scope.height = _.range(
						parseInt(_.first(keys)),
						parseInt(_.last(keys)));
				} else {
					$scope.height = [];
				}

				$scope.times = data;
			});
		//var minutes = document.getElementsByClassName("minute");
    }
]);
