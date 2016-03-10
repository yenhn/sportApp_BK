(function(app){
	app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function (sp, urp, $locationProvider) {
		urp.otherwise("/");
		//Router to List News in Index
		sp.state('ladders',{
			url: '/ladders',
			templateUrl: 'ladders/views/listLadders.html'
						
		})	
	}])
}(angular.module('apptraincsc')));

