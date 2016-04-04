angular.module('nema.content.terminology', [
	'ui.router',
  'nema.service'
])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('terminology', {
      url: "/content/terminology",
      views:{
      	main:{
    		templateUrl: "content/terminology/terminology.tpl.html",
      		controller:"TerminologyCtrl"
      	}
      }

    })
      
}])

.controller('TerminologyCtrl', ["$scope","ContentService",function($scope, ContentService) {
   $scope.terminology;

   $scope.setUpUI = function(){
    if(!$scope.terminology){
        ContentService.getTerminologyContent(function(results){
        $scope.terminology = results;

        $scope.terminology.item.sort(function(a, b){
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        });
      });
    }
    
   };

   $scope.setUpUI();

   
}]);