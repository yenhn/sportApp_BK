(function(app){
	app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function (sp, urp, $locationProvider) {
		urp.otherwise("/");
		//Router to List News in Index
		sp.state('teams',{
			url: '/teams',
			templateUrl: 'teams/views/listTeams.html',
			controller: 'TeamsCtrl',			
		})
		sp.state('player',{
			url: '/teams/:playerID',
			templateUrl: 'teams/views/detailTeams.html',
			controller: 'DetailTeamsController',			
		})	
	}])
}(angular.module('apptraincsc')));

