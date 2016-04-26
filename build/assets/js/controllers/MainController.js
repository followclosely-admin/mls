angular.module('patternApp')
.controller('MainController', function($scope){
  $scope.message = 'MainController loaded';
  $scope.urlPath = '/components';
  $scope.paths = [];
  console.log($scope.message);


});