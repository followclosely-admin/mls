angular.module('patternApp')
.controller('MainController', function($scope){
  $scope.message = 'MainController loaded';
  $scope.urlPath = '/components';
  console.log($scope.message);

});