(function(app){
	app.controller('DetailTeamsController', function($scope, dataCloudService, $stateParams, $state, $rootScope){
		var teamsDetail = dataCloudService.getDetail('teams', $stateParams.playerID);
		$scope.age = "";
		$scope.fullname = "";
		$scope.content = "";
		$scope.height = "";
		$scope.image = "";
		$scope.title = "";
		$scope.weight = "";
		$scope.waiting = false;
		
		teamsDetail.then(function(record){
			$scope.waiting = true;
			$scope.age = record.age;
			$scope.fullname = record.fullname;
			$scope.content = record.content;
			$scope.height = record.height;
			$scope.image = record.image;
			$scope.title = record.title;
			$scope.weight = record.weight;
			
		})
		
		if($state.$current == 'teams') 
		{
			$rootScope.breadcrumbs = 'Team Player';
			$rootScope.PageTitle = 'Team Player';
		}
		$scope.$watch('image', function(){
		    $scope.srcs = {
                'background-image' : 'url(images/' + $scope.image + ')'
		    }

		}, true)
		
	})
}(angular.module('apptraincsc')));