app
	.factory('Auth',function(){
		var authenticated = false;
		return {
			isAuthenticated: function(){
				return authenticated;
			},
			setAuthenticated: function(newAuthenticated){
				authenticated = newAuthenticated;
			}
		};
	});