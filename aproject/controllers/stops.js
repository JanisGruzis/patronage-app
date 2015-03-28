controllers.controller('Stops', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
        $http.get('http://patronage.cloudapp.net/app_dev.php/rest/stop/list/' + $routeParams.transportId)
			.success(function(data){
				$scope.stops = data;
			});

		$http.get('http://patronage.cloudapp.net/app_dev.php/rest/route/list/' + $routeParams.transportId)
			.success(function(data){
				$scope.routes = data;
			});
    }
]);
