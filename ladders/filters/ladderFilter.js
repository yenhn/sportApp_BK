(function(app){
	//Custom filter
	app.filter('split', function(){
		return function(text){
			return text.substr(0, 3);
		}
	})
}(angular.module('apptraincsc')));