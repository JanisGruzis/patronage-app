controllers.controller('transport', ['$scope', '$http', '$routeParams', '$rootScope',
    function ($scope, $http, $routeParams, $rootScope) {
		$rootScope.gType = $routeParams.type;
		$http.get('http://patronage.cloudapp.net/rest/transport/list/' + $routeParams.type)
			.success(function(data){
				$scope.transports = data;
			});
    }
]);
