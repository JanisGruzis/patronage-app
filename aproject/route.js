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
				templateUrl: 'templates/report.html'
			}).
			when('/docs', {
				templateUrl: 'templates/docs.html',
			}).
			when('/report_map', {
				templateUrl: 'templates/report_map.html',
				controller: 'ReportMap'
			}).
			when('/report_stat', {
				templateUrl: 'templates/report_stat.html',
				controller: 'ReportStat'
			}).
			when('/options', {
				templateUrl: 'templates/options.html',
				controller: 'Options'
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
