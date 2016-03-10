(function(app){
	// New version
	app.service('dataCloudService', function ($firebaseArray, FIREBASE_URL, $q, $timeout){
		
		// Function to retrieve data object from Firebase.
		this.getData = function(obj, field){				
			var dataObject = new Firebase(FIREBASE_URL + obj);

			//Pagination
			//Create Pagination Reference
			var PageRef = new Firebase.util.Paginate(dataObject, field, {pageSize: 5, maxCacheSize: 250});

			//generate a synchronized array using the special page ref.
			var list = $firebaseArray(PageRef);
			list.page = PageRef.page;

			//Update local scope when page count loads.
			PageRef.page.onPageCount(function(currentPageCount, couldHaveMore){
				list.pageCount = currentPageCount;
				list.couldHaveMore = couldHaveMore;
			});

			//When the current page is changed, update local scope.
			PageRef.page.onPageChange(function(currentPageNumber){
				list.currentPageNumber = currentPageNumber;
				//console.log(list.pageCount);
			})

			//Load first page.
			PageRef.page.next();

			return list;
		}
		
		this.getDataNoPaging = function (obj){
			var dataObject = new Firebase(FIREBASE_URL + obj);
			return $firebaseArray(dataObject);
		}

		this.getDetail = function(obj, key){
			var deffered = $q.defer();
			$timeout(function(){
				var dataObject = new Firebase(FIREBASE_URL + obj);

				var list = $firebaseArray(dataObject);

				list.$loaded().then(function(){
					var record = list.$getRecord(key);					
					deffered.resolve(record);	
				});							
			}, 1000);

			return deffered.promise;			
		}

		this.search = function(obj, queryString){
			var dataObject = new Firebase(FIREBASE_URL + obj);
			var list = $firebaseArray(dataObject).startAt(queryString).endAt(queryString + '\uf8ff');
			/*
			The \uf8ff character used in the query above is a very high code point in the Unicode range. 
			Because it is after most regular characters in Unicode, the query matches all values that start with queryString.			
			*/
			return list;
		}


	})

}(angular.module('apptraincsc')));