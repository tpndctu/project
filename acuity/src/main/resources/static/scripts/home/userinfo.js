/**
 * author : dhnhan
 */
app
	.config(function($stateProvider){
		$stateProvider
			.state('home.userinfo',{
				url: '/userinfo',
				templateUrl: 'views/home/userinfo.html',
				controller: 'UserInfoController'
			});
	});