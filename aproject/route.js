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
			when('/stops/:transportId/:reisId', {
				templateUrl: 'templates/stops.html',
				controller: 'Stops'
			}).
			when('/time/:routeId/:stopId', {
				templateUrl: 'templates/time.html',
				controller: 'Time'
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
