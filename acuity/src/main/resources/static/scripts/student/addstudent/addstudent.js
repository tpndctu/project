/**
 * author : pvthuan
 */
app
	.config(function($stateProvider){
		$stateProvider
			.state('home.manageraccount.student.addstudent',{
				url: '/addstudent',
				templateUrl: 'views/student/addstudent/addstudent.html',
				controller: 'ManagerAddStudentController'
			})
			.state('home.manageraccount.student.liststudent',{
				url: '/list',
				templateUrl: 'views/student/addstudent/liststudent.html',
				controller: 'ManagerAddStudentController'
			})
			;
		
	});