/**
 * 
 */
app
	.controller('UserInfoController',['$scope','User','$http','$rootScope', function($scope,User,$http,$rootScope){
		$scope.userinfo = {};
		$scope.userinfo.birthDate = new Date();
		$scope.load = function(){
			User.get({id: $rootScope.name}, function(result){
				$scope.userinfo = result;
				$scope.userinfo.birthDate = new Date(result.birthDate);
			})
		};
		$scope.load();
		$scope.showUpdate = function(){
			$('#saveUserInfo').modal('show');
		};
		$scope.saveUserInfo = function(){
			User.update($scope.userinfo);
			$('#saveUserInfo').modal('hide');
		};
		$scope.showChangePassword = function(){
			$('#changePassword').modal('show');
		};
		$scope.clear = function(){
			$scope.passwordFirst = null;
			$scope.passwordSecond = null;
		};
		$scope.changePass = function (){
			var dataObj = {
				username: $rootScope.name,
				passwordNew : $scope.passwordSecond
			};
			var res = $http.post('/api/userinfo/changepassword',dataObj);
			res.success(function(data, status, headers, config) {
				$scope.message = data;
			});
			res.error(function(data, status, headers, config) {
				alert( "failure message: " + JSON.stringify({data: data}));
			});
			$('#changePassword').modal('hide');
		};
	}]);