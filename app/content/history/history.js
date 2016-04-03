angular.module('nema.content.history', [
	'ui.router',
  'nema.service'
])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('history', {
      url: "/content/history",
        views:{
      	main:{
    		templateUrl: "content/history/history.tpl.html",
      		controller:"HistoryCtrl"
      	}
      }
      
    })
}])

.controller('HistoryCtrl', ['$scope', 'ContentService',function($scope, ContentService) {
  $scope.history = {};

  ContentService.getHistoryContent(function(results){
    $scope.history = results;
  });

}]);