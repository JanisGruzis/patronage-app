controllers.controller('Options', ['$scope', '$http', '$routeParams', '$rootScope',
	function ($scope, $http, $routeParams, $rootScope) {
		$scope.pallete = 1;
		$scope.pallete = $rootScope.palleteId;
		if($scope.pallete === undefined)
			$scope.pallete = 1;
		$scope.$watch('pallete', function(value) {
		console.log(value);
			$rootScope.palleteId = value;
		});
    }
]);
