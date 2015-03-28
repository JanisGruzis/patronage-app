controllers.controller('transport', ['$scope', '$http',
    function ($scope, $http) {
        $scope.transports = [
			{name:"Autobuss",id:"A"},
			{name:"Trolejbuus",id:"T"},
			{name:"Tramvajs",id:"R"},
		];
    }
]);
