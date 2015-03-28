controllers.controller('Time', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
		$http.get('http://patronage.cloudapp.net/app_dev.php/rest/time/list/'
			+ $routeParams.routeId + '/' + $routeParams.stopId)
			.success(function(data){
				var lengths = _.map(data, function(line) { return line.length; });
				var width = _.max(lengths);
				$scope.width = _.range(0, width);

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
    }
]);
