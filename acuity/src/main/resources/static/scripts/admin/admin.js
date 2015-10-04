/**
 * author : dhnhan
 */
app
	.config(function($stateProvider){
		$stateProvider
			.state('home.manageraccount',{
				url: '/manageraccount',
				templateUrl: 'views/admin/manageraccount.html',
				controller: 'ManagerAccountController'
			});
		
	});