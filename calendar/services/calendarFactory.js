(function(app){
	app.factory('alert', function($uibModal){
		function show(action, event) {
	      return $uibModal.open({
	        templateUrl: 'calendar/views/calendar/modalContent.html',
	        controller: function() {
	          var vm = this;
	          vm.action = action;
	          vm.event = event;
	        },
	        controllerAs: 'vm'
	      });
	    }

	    return {
	      show: show
	    };
	})
}(angular.module('apptraincsc')));