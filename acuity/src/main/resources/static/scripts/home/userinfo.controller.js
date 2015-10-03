/**
 * 
 */
app
	.controller('UserInfoController',['$scope','User','$http','$rootScope', function($scope,User,$http,$rootScope){
		$scope.userinfo = {};
		$scope.username='admin';
		$scope.userinfo.birthDate = new Date();
		$scope.load = function(){
			User.get({id: $rootScope.name}, function(result){
				$scope.userinfo = result;
				$scope.userinfo.birthDate = new Date(result.birthDate);
			})
		}
		$scope.load();
		$scope.showUpdate = function(){
			$('#saveUserInfo').modal('show');
		}
		$scope.saveUserInfo = function(){
			User.update($scope.userinfo);
			$('#saveUserInfo').modal('hide');
		}
	}]);