app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'templates/transport.html',
                    controller: 'transport'
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
