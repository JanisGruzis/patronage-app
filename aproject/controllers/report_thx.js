controllers.controller('ReportThx', ['$scope', '$http','$routeParams','$timeout','$location',
    function ($scope, $http,$routeParams,$timeout,$location) {
		var rid = $routeParams.rid;
		var transportId = $routeParams.transport;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position){
			  $scope.$apply(function(){
				$http({
					url: 'http://patronage.cloudapp.net/report',
					method: "GET",
				  	params: {
						rid:rid,
						tid: transportId,
						lat:position.coords.latitude,
						lng:position.coords.longitude
					}
				})
				.success(function(data, status, headers, config) {{
					$timeout(function() {
					  $location.path("/");
					  }, 5000);
				}});
			  });
			});
		  }
    }
]);
