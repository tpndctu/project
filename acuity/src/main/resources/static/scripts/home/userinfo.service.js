/**
 * @author: dhnhan
 */
app
	.factory('UserInfoService',function($http){
		var service = {};
		service.getUser = function () {
            return $http.get('api/userinfo/admin').then(function (response) {
                return response.data;
            });
        };
        return service;
	});
	