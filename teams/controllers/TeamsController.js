(function(app){
	app.controller('TeamsCtrl', function($scope, dataCloudService , $state, $rootScope){
		
		var obj = dataCloudService.getData('teams','title');
		$scope.teamsData = obj;
	})
	// end controller.
}(angular.module('apptraincsc')));