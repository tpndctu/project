/**
 * 
 */
app.controller('UserInfoController', function($scope,UserInfoService,$http){
	$scope.userinfo = {};
	$scope.username='admin';
	$scope.getUserByName = function(){
		$scope.userinfo = UserInfoService.getUser();
		console.log($scope.userinfo);
	};
	$scope.getUserByName();
});