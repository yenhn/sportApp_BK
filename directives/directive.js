(function(app){
	
	app.directive('headerDirective',function(){
		return{
			restrict: 'AE',
			templateUrl: 'templates/header.html',
			link: function(scope, element, attrs){
				$('.menu-link').bigSlide({
					push: '.canvas-outer',
					side: 'right',
					menuWidth: '80%',
					easyClose: true
				});
			}
		}
	});
	app.directive('footerDirective', function(){
		return{
			restrict: 'AE',
			templateUrl: 'templates/footer.html'
		}
	});
	app.directive('listNewsDirective', function(){
		return{
			restrict: 'AE',
			templateUrl: '	news/views/listNews.html'
		}
	});
	app.directive('recentNews', function(){
		return{
			restrict: 'AE',
			templateUrl: 'news/templates/recent.news.html'
		}
	});
	app.directive('listLaddersDirective', function(){
		return{
			restrict: 'AE',
			templateUrl: '	ladders/views/listLadders.html'
		}
	});
	// app.directive('listTeamsDirective', function(){
	// 	return{
	// 		restrict: 'AE',
	// 		templateUrl: '	teams/views/listTeams.html'
	// 	}
	// });
	// app.directive('detailTeamsDirective', function(){
	// 	return{
	// 		restrict: 'AE',
	// 		templateUrl: '	teams/templates/detailTeams.html'
	// 	}
	// })

	app.directive("owlCarousel", function() {
	    return {
	        restrict: 'E',
	        transclude: false,
	        link: function (scope) {
	            scope.initCarousel = function(element) {
	              // provide any default options you want
	                var defaultOptions = {
	                };
	                var customOptions = scope.$eval($(element).attr('data-options'));
	                // combine the two options objects
	                for(var key in customOptions) {
	                    defaultOptions[key] = customOptions[key];
	                }
	                // init carousel
	                $(element).owlCarousel(defaultOptions);
	            };
	        }
	    };
	})
	app.directive('owlCarouselItem', [function() {
	    return {
	        restrict: 'A',
	        transclude: false,
	        link: function(scope, element) {
	          // wait for the last item in the ng-repeat then call init
	            if(scope.$last) {
	                scope.initCarousel(element.parent());
	            }
	        }
	    };
	}]);
	
}(angular.module('apptraincsc')));//end directive.