angular.module('patternApp')
.controller('ComponentsController', function($scope){
	$scope.message = 'ComponentsController loaded';
	console.log($scope.message);
});