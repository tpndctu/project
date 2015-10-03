/**
 * author: dhnhan
 */
app
	.factory('User', function ($resource) {
	    return $resource('api/userinfo/:id', {}, {
	        'query': { method: 'GET', isArray: true},
	        'get': {
	            method: 'GET',
	            transformResponse: function (data) {
	                data = angular.fromJson(data);
	                return data;
	            }
	        },
	        'update': { method:'PUT' }
	    });
	});