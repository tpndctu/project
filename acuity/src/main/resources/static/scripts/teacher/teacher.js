/**
 * author : pvthuan
 */
app
	.config(function($stateProvider){
		$stateProvider
			.state('home.manageraccount.teacher',{
				url: '/teacher',
				templateUrl: 'views/teacher/teacher.html',
				controller: 'ManagerTeacherController'
			});
		
	});