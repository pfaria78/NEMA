angular.module('nema.content.terminology', [
	'ui.router'
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

.controller('TerminologyCtrl', [function() {

}]);