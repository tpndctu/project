app
		.controller(
				'LoginController',['$rootScope', '$scope', '$http', '$location','Auth',
				function($rootScope, $scope, $http, $location, Auth) {
					$scope.authenticate = function(callback) {
						$scope.$on('data_shared',function(){
						      var temp = Auth.getAuthenticated();
						      console.log(temp);
						      $scope.authenticated = temp;
						});
						
						$http.get('api/users').success(function(data) {
							if (data.name) {
								//$rootScope.authenticated = true;
								var isAuthenticated = true;
								Auth.setAuthenticated(isAuthenticated);
							} else {
								//$rootScope.authenticated = false;
								var isAuthenticated = false;
								Auth.setAuthenticated(isAuthenticated);
							}
							callback && callback();
						}).error(function() {
							//$rootScope.authenticated = false;
							var isAuthenticated = false;
							Auth.setAuthenticated(isAuthenticated);
							callback && callback();
						});

					};

					$scope.authenticate();
					$scope.credentials = {};

					$scope.login = function() {
						$http
								.post(
										'login',
										$scope.credentials,
										{

											headers : {
												"content-type" : 'application/x-www-form-urlencoded; charset=UTF-8'
											},
											transformRequest : function(obj) {
												var str = [];
												for ( var p in obj)
													str
															.push(encodeURIComponent(p)
																	+ "="
																	+ encodeURIComponent(obj[p]));
												return str.join("&");
											}
										}).success(function(data) {
									$scope.authenticate(function() {
										if (Auth.getAuthenticated() === true) {
											$location.path("/home");
											$scope.error = false;
										} else {
											$location.path("/");
											$scope.error = true;
										}
									});
								}).error(function(data) {
									$scope.error = true;
									//$rootScope.authenticated = false;
									var isAuthenticated = false;
									Auth.setAuthenticated(isAuthenticated);
								})
					};

					$scope.logout = function() {
						$http.post('logout', {}).success(function() {
							//$rootScope.authenticated = false;
							var isAuthenticated = false;
							Auth.setAuthenticated(isAuthenticated);
							$location.path("/");
						}).error(function(data) {
							//$rootScope.authenticated = false;
							var isAuthenticated = false;
							Auth.setAuthenticated(isAuthenticated);
						});
					}
				}]);