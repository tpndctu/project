/**
 * author : dhnhan
 */
app
	.config(function($stateProvider){
		$stateProvider
		.state('home.major',{
			url: '/major',
			templateUrl: 'views/admin/major/major.html',
			controller: 'MajorController'
		});
	});