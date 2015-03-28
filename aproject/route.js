app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
		    when('/', {
                templateUrl: 'templates/transport.html',
                controller: 'transport'
            }).
			when('/stops/:transportId', {
				templateUrl: 'templates/stops.html',
				controller: 'Stops'
			}).
			when('/route/:type', {
				templateUrl: 'templates/routes.html',
				controller: 'routes'
			}).
			otherwise({
				redirectTo: '/'
			});
    }
]);
