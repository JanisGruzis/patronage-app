controllers.controller('routes', ['$scope', '$http','$routeParams',
    function ($scope, $http,$routeParams) {
        var routes = {
            'A':[
                {name:"37",id:"1"},
                {name:"41",id:"2"},
            ],
            'T':[
                {name:"1",id:"3"},
                {name:"2",id:"4"},
            ],
            'R':[
                {name:"3",id:"5"},
                {name:"4",id:"6"},
            ],
        };
        $scope.routes = routes[$routeParams.type];
    }
]);
