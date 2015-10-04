/**
 * author : pvthuan
 */
app
	.config(function($stateProvider){
		$stateProvider
			.state('home.manageraccount.teacher.addteacher',{
				url: '/addteacher',
				templateUrl: 'views/teacher/addteacher/addteacher.html',
				controller: 'ManagerAddTeacherController'
			})
			.state('home.manageraccount.teacher.listteacher',{
				url: '/listteacher',
				templateUrl: 'views/teacher/addteacher/listteacher.html',
				controller: 'ManagerAddTeacherController'
			})
			;
	});