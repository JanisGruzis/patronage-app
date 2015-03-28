app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
		    when('/', {
                templateUrl: 'templates/types.html',
                controller: 'Types'
            }).
			when('/stops/:transportId', {
				templateUrl: 'templates/stops.html',
				controller: 'Stops'
			}).
            otherwise({
                redirectTo: '/'
            })
        ;
    }
]);
