app
	.factory('Auth', function($rootScope, $timeout){
		var service = {};
		service.authenticated = false;
		service.setAuthenticated = function(newAuthenticated){
			this.authenticated = newAuthenticated;
			$timeout(function(){
		         $rootScope.$broadcast('data_shared');
		    },100);
		};
		service.getAuthenticated = function(){
			return this.authenticated;
		};
		return service;
	});