app
	.controller('HomeController',function($rootScope, $scope, Auth){
		$scope.authenticated = Auth.isAuthenticated;
	});