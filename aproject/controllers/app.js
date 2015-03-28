controllers.controller('Time', ['$scope', '$http', '$routeParams', '$rootScope',
	function ($scope, $http, $routeParams, $rootScope) {
		$rootScope.gNumber = $routeParams.stops;
		$http.get('http://patronage.cloudapp.net/app_dev.php/rest/time/list/'
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
		//test
    }
]);
