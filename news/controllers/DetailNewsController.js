(function(app){
	app.controller('DetailNewsController', function($scope, dataCloudService, $stateParams, $state, $rootScope, $q){
		
		onLoad();
		
		function onLoad(){

			$scope.image = "";
			$scope.title = "";
			$scope.content = "";
			$scope.post_date = "";
			$scope.wating = false;
			
			var article = dataCloudService.getDetail('news', $stateParams.newsID);

			article.then(function(record){
				$scope.waiting = true;				
				$scope.image = record.image;
				$scope.title = record.title;
				$scope.content = record.content;
				$scope.post_date = record.post_date;

			})

			$scope.$watch('image', function(){
				$scope.styles = {
					'background-image' : 'url(images/' + $scope.image + ')',
					'margin-top': '-11px', 
					'padding':'15px'
				}
			}, true)
			
			
			
			
		}
		
		
		
	})
}(angular.module('apptraincsc')));