(function(app){
	app.controller('DetailNewsController', function($scope, dataCloudService, $stateParams, $state, $rootScope){
		
		
		var newsDetail = dataCloudService.getDetail('news', $stateParams.newsID);
		$scope.image = "";
		$scope.title = "";
		$scope.content = "";
		$scope.post_date = "";

		newsDetail.on('value', function(snap){

			var detail = snap.val();
			// console.log(detail);
			$scope.image = detail.image;
			$scope.title = detail.title;
			$scope.content = detail.content;
			$scope.post_date = detail.post_date;
		})
		$scope.$watch('image', function(){
		    $scope.styles = {
                'background-image' : 'url(images/' + $scope.image + ')',
                'margin-top': '-11px',
                'padding':'15px'
		    }

		}, true)
	})
}(angular.module('apptraincsc')));
(function(app){
	app.controller('MenuController', function($scope, dataCloudService, $state, $rootScope, FIREBASE_URL){

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
		
	})

	app.controller("NewsCtrl", function($scope, dataCloudService, $rootScope, moment){	
		var obj = dataCloudService.getData('news','title');
		//console.log(obj);
		$scope.newsData = obj;
		
		//console.log(obj);
		
		/*obj.$loaded().then(function() {

			$scope.news = [];
			$scope.currentPageNumber = obj.currentPageNumber;
			$scope.pageCount = obj.pageCount;
			$scope.pageItems = obj;

			angular.forEach(obj, function(resp){
				$scope.news.push({					
					Title: resp.title,
					Content: resp.content,
					DatePost: moment(resp.post_date, 'DD/MM/YYYY').format('DD MMM'),
					ImageUrl: resp.image
				})
			})
		  
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});*/
	})
	// end controller.
}(angular.module('apptraincsc')));
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

		teamsDetail.on('value', function(snap){

			var detail = snap.val();
			// console.log(detail);
			$scope.age = detail.age;
			$scope.fullname = detail.fullname;
			$scope.content = detail.content;
			$scope.height = detail.height;
			$scope.image = detail.image;
			$scope.title = detail.title;
			$scope.weight = detail.weight;
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
		

		// //var index = $stateParams.newsID;
		// var teamDetailPromise = teamsService.getIndexTeams();
		
		// teamDetailPromise.then(function(data, status, headers, config){
			
		// 	$scope.DetailPlayer = [];
		// 	/*$scope.breadcumbs = "Detail News";*/
		// 	angular.forEach(data.data, function(resp){
				
		// 		if(resp.id === $stateParams.playerID){
		// 			$rootScope.PageTitle = resp.title;
		// 			$rootScope.breadcrumbs = resp.fullname;		
		// 			$scope.DetailPlayer.push({
		// 				Id: resp.id,
		// 				Image: resp.image,
		// 				Fullname: resp.fullname,
		// 				Age: resp.age,
		// 				Height: resp.height,
		// 				Weight: resp.weight,
		// 				Title: resp.title,
		// 				Content: resp.content 
		// 			});
									
		// 		}


		// 	});
		// })
		//console.log($stateParams.newsID);
	})
}(angular.module('apptraincsc')));
(function(app){
	app.controller('TeamsCtrl', function($scope, dataCloudService , $state, $rootScope){
		
		var obj = dataCloudService.getData('teams','title');
		$scope.teamsData = obj;

		// loadTeams();

		
		// //Load News in Teams
		// function loadTeams(){
		// 	var newsPromise = teamsService.getIndexTeams();
		// 	newsPromise.then(function(data,status,header,config){

		// 		$scope.objTeams = [];
		// 		// console.log(data.data);
		// 		angular.forEach(data.data, function(resp){
		// 			$scope.objTeams.push({
		// 				Id: resp.id,
		// 				Image: resp.image,
		// 				Fullname: resp.fullname,
		// 				Age: resp.age,
		// 				Height: resp.height,
		// 				Weight: resp.weight,
		// 				Title: resp.title,
		// 				Content: resp.content 
		// 			});
		// 		});
				
		// 		if($state.$current == 'teams') 
		// 		{
		// 			$rootScope.breadcrumbs = 'Team Player';
		// 			$rootScope.PageTitle = 'Team Player';
		// 		}
				
		// 	},function(data,status,headder,config){
		// 		console.log('No Data!!!' + status)
		// 	})


		// }


	})
	// end controller.
}(angular.module('apptraincsc')));
(function(app){
	app.controller('LadderCtrl', function($scope, dataCloudService, $state, $rootScope, $firebaseArray){
	
		var obj = dataCloudService.getData('ladders','title');
		//console.log(obj);
		$scope.ladderData = obj;
		// var dataObject = new Firebase('https://yenhn.firebaseio.com/ladders');
		// var list = $firebaseArray(dataObject);
		// var dt ={};
		// list.on('value', function(snap){
		// 	dt=snap.val();
		// 	console.log(dt);
		// 	for(var d in dt){
		// 		dt[d].points= 23;
		// 	}
		// 	$scope.ladderData = dt;
		// })
		

	// 	loadLadder();

	// 	if($('.canvas-outer').hasClass('nav-push')){
	// 		$('.canvas-outer').toggleClass('nav-push');
	// 	}
		
	// 	//Show Canvas
	// 	/*$scope.showCanvas = function(){
	// 		$('.canvas-outer').toggleClass('nav-push');
	// 	}*/
	
	// 	//Load News in Teams
	// 	function loadLadder(){
	// 		//$scope.SampleText = "";
	// 		var ladderPromise = ladderService.getIndexLadder();
	// 		ladderPromise.then(function(data,status,header,config){

	// 			$scope.objLadders = [];
	// 			// console.log(data.data);
	// 			angular.forEach(data.data, function(resp){

	// 				//var str = resp.Nameteam;

	// 				//console.log(str.match(/[\s\S]{1,3}/g));

	// 				$scope.objLadders.push({
	// 					Logo: resp.logo,
	// 					ShortName: resp.nameteam,
	// 					Nameteam: resp.nameteam,

	// 					//Plays is sum of won, lost and draws.
	// 					Plays: (resp.won + resp.lost + resp.draws),

	// 					//Assume a team that win will receive 3 points, draws is 1 points and lost is 0 points.						
	// 					Points: ((resp.won * 3) + resp.draws),
	// 					Won: resp.won,
	// 					Lost: resp.lost,
	// 					Draws: resp.draws 
	// 				});
	// 			});
				
	// 			if($state.$current == 'ladders') 
	// 			{
	// 				$rootScope.breadcrumbs = 'Ladder';
	// 				$rootScope.PageTitle = 'Ladders';
	// 			}
				
	// 		},function(data,status,headder,config){
	// 			console.log('No Data!!!' + status)
	// 		})


	// 	}
		$scope.className = function(bg) {
			//Set class for country
	        var className = '';

	        if (bg=='nyk')
	            className += 'nyk';
	        if (bg=='brz')
	            className += 'brz';
	        if (bg=='phi')
	            className += 'phi';
	        if (bg=='ind')
	            className += 'ind';
	        
	        return className;
	    };
	    
	    


	});
	
	// end controller.
}(angular.module('apptraincsc')));
(function(app){
	app.controller('CalendarController', function(moment, alert, $rootScope){

		if($('.canvas-outer').hasClass('nav-push')){
			$('.canvas-outer').toggleClass('nav-push');
		}

		var vm = this;

		$rootScope.PageTitle = 'Calendar';
		if(vm.$current == 'Calendar') 
		{
			$rootScope.breadcrumbs = 'Calendar';
		}
	    //These variables MUST be set as a minimum for the calendar to work
	    vm.calendarView = 'month';
	    vm.viewDate = new Date();
	    $rootScope.letters = vm.viewDate;
	    $rootScope.letterLimit = 3;
	    vm.events = [
	      {
	        title: 'An event',
	        type: 'warning',
	        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
	        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
	        draggable: true,
	        resizable: true
	      }
	    ];


	    vm.isCellOpen = false;

	    vm.eventClicked = function(event) {
	      alert.show('Clicked', event);
	    };

	    vm.eventEdited = function(event) {
	      alert.show('Edited', event);
	    };

	    vm.eventDeleted = function(event) {
	      alert.show('Deleted', event);
	    };

	    vm.eventTimesChanged = function(event) {
	      alert.show('Dropped or resized', event);
	    };

	    vm.toggle = function($event, field, event) {
	      $event.preventDefault();
	      $event.stopPropagation();
	      event[field] = !event[field];
	    };
	    
	})
}(angular.module('apptraincsc')));