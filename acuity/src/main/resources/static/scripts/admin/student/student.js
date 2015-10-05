/**
 * author : pvthuan
 */
app
	.config(function($stateProvider){
		$stateProvider
			.state('home.student',{
				url: '/student',
				templateUrl: 'views/admin/student/student.html',
				controller: 'ManagerStudentController'
			});
		
	});