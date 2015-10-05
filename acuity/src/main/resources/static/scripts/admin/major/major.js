/**
 * author : dhnhan
 */
app
	.config(function($stateProvider){
		$stateProvider
		.state('home.major',{
			url: '/student',
			templateUrl: 'views/admin/major/major.html',
			controller: 'MajorController'
		});
	});