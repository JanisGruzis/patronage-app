controllers.controller('Stops', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
		$http.get('http://patronage.cloudapp.net/app_dev.php/rest/route/list/' + $routeParams.transportId)
			.success(function(data){
				$scope.routes = data;
				$scope.route = data[0].id;
			});

		$scope.watch('route', function(newValue, oldValue){
			if (newValue != oldValue) {
				$http.get('http://patronage.cloudapp.net/app_dev.php/stops/route/list/' + $scope.route)
					.success(function(data){
						$scope.stops = data;
					});
			}
		});
    }
]);
