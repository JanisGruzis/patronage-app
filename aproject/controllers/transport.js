controllers.controller('transport', ['$scope', '$http', '$routeParams',
    function ($scope, $http, $routeParams) {
		$http.get('http://patronage.cloudapp.net/app_dev.php/rest/transport/list/' + $routeParams.type)
			.success(function(data){
				$scope.transports = data;
			});
    }
]);
