(function(app){
	app.filter('dateFormat', function(){
		return function(date){
			return moment(date, 'DD/MM/YYYY').format('DD MMM');
		}
	})

}(angular.module('apptraincsc')));