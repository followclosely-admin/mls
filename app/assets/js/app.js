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
      controller: 'MainController'
  });

  $locationProvider.html5Mode(true);

}]);

angular.module('patternApp')
.controller('MainController', function($scope){
  $scope.message = 'MainController loaded';
  console.log($scope.message);
});