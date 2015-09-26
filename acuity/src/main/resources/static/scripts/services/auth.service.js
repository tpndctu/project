app
	.factory('Auth', function($rootScope, $timeout){
		var service = {};
		service.authenticated = false;
		service.setAuthenticated = function(newAuthenticated){
			this.authenticated = newAuthenticated;
			$rootScope.$broadcast('data_shared');
		};
		service.getAuthenticated = function(){
			return this.authenticated;
		};
		return service;
	});