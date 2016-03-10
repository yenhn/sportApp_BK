(function(app){
	app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function (sp, urp, $locationProvider) {

		sp.state('calendar',{
			url: '/calendar',
			templateUrl: 'calendar/views/calendar.html',
			controller: 'CalendarController'
		})
	}])


}(angular.module('apptraincsc')));