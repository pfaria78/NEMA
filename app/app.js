'use strict';

// Declare app level module which depends on views, and components
angular.module('nema', [
  'ui.router',
  'nema.navigation',
  'nema.content.rules',
  'nema.content.terminology',
  'nema.content.history',
  'nema.service',
  'nema.common.display'
  ])

.config(['$urlRouterProvider', function($urlRouterProvider) {
	/* This next line of code basically tells the app onces it gets loaded get the terminology view/template and put it into 
	the main view.
	*/
  $urlRouterProvider.otherwise("/content/terminology");
}]);
