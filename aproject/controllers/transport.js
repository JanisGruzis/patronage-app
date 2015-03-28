controllers.controller('transport', ['$scope', '$http', '$routeParams', '$rootScope',
    function ($scope, $http, $routeParams, $rootScope) {
		$rootScope.gType = $routeParams.type;
		$http.get('http://patronage.cloudapp.net/app_dev.php/rest/transport/list/' + $routeParams.type)
			.success(function(data){
				$scope.transports = data;
			});
    }
]);
