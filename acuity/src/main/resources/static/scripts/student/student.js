/**
 * author : pvthuan
 */
app
	.config(function($stateProvider){
		$stateProvider
			.state('home.manageraccount.student',{
				url: '/student',
				templateUrl: 'views/student/student.html',
				controller: 'ManagerStudentController'
			});
		
	});