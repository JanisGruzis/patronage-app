controllers.controller('Stops', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
        $http.get('http://127.0.0.1:8000/rest/stop/list/' + $routeParams.transportId)
			.success(function(data){
				$scope.stops = data;
			});

		$http.get('http://127.0.0.1:8000/rest/route/list/' + $routeParams.transportId)
			.success(function(data){
				$scope.routes = data;
			});
    }
]);
