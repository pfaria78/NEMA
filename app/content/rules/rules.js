angular.module('nema.content.rules', [
	'ui.router',
   'nema.service'
])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('rules', {
      url: "/content/rules",
      views:{
      	main:{
      		templateUrl: "content/rules/rules.tpl.html",
      		controller:"RulesCtrl"
      	}
      }
     
    })
}])

.controller('RulesCtrl', ["$scope", "ContentService", function($scope, ContentService) {
 $scope.rules = {};

    ContentService.getRulesContent(function(results){
      $scope.rules = results;
    });
}]);