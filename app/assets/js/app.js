'use strict';

angular.module('patternApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .when('/components', {
      templateUrl: 'views/components.html',
      controller: 'ComponentsController'
  });

  $locationProvider.html5Mode(true);

}]);