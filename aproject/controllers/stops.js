controllers.controller('Stops', ['$scope', '$http', '$routeParams', '$rootScope', 
    function ($scope, $http, $routeParams, $rootScope) {
	
		$rootScope.gTransportId = $routeParams.transportId;
		console.log('$routeParams', $routeParams);
		$http.get('http://patronage.cloudapp.net/app_dev.php/rest/route/list/' + $routeParams.transportId)
			.success(function(data){
				$scope.routes = data;
				$scope.route = data[0].id;
				$http.get('http://patronage.cloudapp.net/app_dev.php/rest/stop/list/' + $scope.route)
					.success(function(data){
						$scope.stops = data;
					});				
			});
		var reisId = ($routeParams.reisId)?$routeParams.reisId:false;
		$scope.showTime = ($routeParams.reisId)?true:false;
		
		if(reisId){
			$http.get('http://patronage.cloudapp.net/app_dev.php/rest/stop/time/' + reisId)
			.success(function(data){
				$scope.time = data;
			});
		}
/* 		$scope.$watch('route', function(newValue, oldValue){
			console.log(this);
			if (newValue != oldValue) {
				$http.get('http://patronage.cloudapp.net/app_dev.php/rest/stop/list/' + $scope.route)
					.success(function(data){
						$scope.stops = data;
					});
			}
		}); */
		$scope.setDirection = function(e) {
			//console.log('e', e.item.id);
			$http.get('http://patronage.cloudapp.net/app_dev.php/rest/stop/list/' + e.item.id)
				.success(function(data){
					$scope.stops = data;
				});
		};	
    }
]);
