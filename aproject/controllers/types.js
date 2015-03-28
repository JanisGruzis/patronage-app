controllers.controller('types', ['$scope', '$http',
    function ($scope, $http) {
		$scope.types = [
			{name:"Autobuss",id:"Autobuss"},
			{name:"Trolejbuus",id:"Trolejbuss"},
			{name:"Tramvajs",id:"Tramvajs"},
		];
    }
]);
