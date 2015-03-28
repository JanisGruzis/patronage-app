app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
		    when('/transport/:type', {
                templateUrl: 'templates/transport.html',
                controller: 'transport'
            }).
			when('/stops/:transportId', {
				templateUrl: 'templates/stops.html',
				controller: 'Stops'
			}).
			when('/', {
				templateUrl: 'templates/types.html',
				controller: 'types'
			}).
			otherwise({
				redirectTo: '/'
			});
    }
]);
