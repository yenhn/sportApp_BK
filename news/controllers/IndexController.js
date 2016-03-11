(function(app){
	app.controller('MenuController', function($scope, dataCloudService, $state, $rootScope){

		/*var obj = dataCloudService.getData('news');
		$scope.news = obj;*/
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		     $('.menu-link').bigSlide({
		     		push: '.canvas-outer',
					side: 'right',
					menuWidth: '80%',
					easyClose: true
		     });
		})


		
		$scope.searchArticle = function(){
			var list = dataCloudService.search('news', $scope.QueryString);
			$scope.count++;
			console.log(list);
		}
		
	})

	app.controller("NewsCtrl", function($scope, dataCloudService, $rootScope, moment, $stateParams){		
		
		onLoad();

		function onLoad(){
			var obj = dataCloudService.getData('news', 'title');		
			$scope.newsData = obj;
		}
		
		$scope.recentNews = function(){
			var recentObj = dataCloudService.getDataNoPaging('news');
			
			recentObj.$loaded().then(function(){
				var recentNewsItem = [];
				angular.forEach(recentObj, function(rsp){

					//Overlook article displayed.
					if(!(rsp.$id == $stateParams.newsID)){
						recentNewsItem.push({
							Id: rsp.$id,
							Title: rsp.title,
							Content: rsp.content,
							Post_Date: rsp.post_date,
							ImageUrl: rsp.image
						})
					}					
				})				
				$scope.listRecentNews = recentNewsItem;
			})
		}
	})
	// end controller.
}(angular.module('apptraincsc')));