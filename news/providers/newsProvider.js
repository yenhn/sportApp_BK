(function(app){
	app.config(function($breadcrumbProvider) {
		$breadcrumbProvider.setOptions({
		  prefixStateName: 'home',
		  template: 'bootstrap2'
		});
	  });
	  
	  
	app.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		//Router to List News in Index
		$stateProvider.state('news',{
			url: '/',
			templateUrl: 'news/views/listNews.html',
			ncyBreadcrumb: {
				label: 'Home page'
			}
			
		});
		
		//Detail News Router to DetailNews pages
		$stateProvider.state('detail',{
			url: '/detail/:newsID',
			templateUrl: 'news/views/detailNews.html',
			ncyBreadcrumb: {
				label: 'Detail'
			  }			
			
		})	
		// use the HTML5 History API
        // $locationProvider.html5Mode(true);
	})
}(angular.module('apptraincsc')));