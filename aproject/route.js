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
			when('/report_thx/:rid/:transport', {
				templateUrl: 'templates/report_thx.html',
				controller: 'ReportThx'
			}).
			when('/report_route/:type', {
				templateUrl: 'templates/report_route.html',
				controller: 'ReportRoute'
			}).
			when('/report', {
				templateUrl: 'templates/report.html',
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
