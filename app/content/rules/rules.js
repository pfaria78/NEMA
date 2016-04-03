angular.module('nema.content.rules', [
	'ui.router'
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

.controller('RulesCtrl', [function() {

}]);