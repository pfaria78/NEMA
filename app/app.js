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
  $urlRouterProvider.otherwise("/content/terminology");
}]);
