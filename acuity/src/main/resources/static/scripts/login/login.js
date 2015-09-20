app
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('login', {
			url : '/',
			templateUrl : 'views/login.html',
			controller : 'LoginController'
		});
});