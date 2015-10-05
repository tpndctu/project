/**
 * author : pvthuan
 */
app
	.config(function($stateProvider){
		$stateProvider
			.state('home.teacher',{
				url: '/teacher',
				templateUrl: 'views/admin/teacher/teacher.html',
				controller: 'ManagerTeacherController'
			});
		
	});