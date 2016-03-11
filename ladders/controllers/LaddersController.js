(function(app){
	app.controller('LadderCtrl', function($scope, dataCloudService, $state, $rootScope, $firebaseArray){
	
		var ladderObj = dataCloudService.getDataNoPaging('ladders','title');

		ladderObj.$loaded().then(function(){
			$scope.ladderItems = [];
			angular.forEach(ladderObj, function(rsp){
				$scope.ladderItems.push({
					Logo: rsp.logo,
					TeamName: rsp.nameteam,
					Point: (rsp.won * 3) + rsp.draws,
					Plays: rsp.won + rsp.lost + rsp.draws,
					Won: rsp.won,
					Lost: rsp.lost,
					Draws: rsp.draws,
					Background: rsp.background
				})
			})
		})
		
		//$scope.ladderData = obj;

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
	        if (bg=='bru')
	            className += 'bru';
	        if (bg=='blu')
	            className += 'blu';
	        if (bg=='ali')
	            className += 'ali';
	        
	        return className;
	    };

	});
	
	// end controller.
}(angular.module('apptraincsc')));