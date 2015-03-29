controllers.controller('ReportRoute', ['$scope', '$http', '$routeParams',
    function ($scope, $http,$routeParams) {
		$scope.rid = $routeParams.type;
		$http.get('http://patronage.cloudapp.net/app_dev.php/rest/transport/list/Autobuss')
		.success(function(data){
			$scope.transports = data;
		});
    }
]);
