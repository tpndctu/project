app
	.config(function($stateProvider){
		$stateProvider
			.state('home',{
				url: '/home',
				templateUrl: 'views/home/home.html',
				controller: 'HomeController'
			});
	});