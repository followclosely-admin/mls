angular.module('patternApp')
.controller('ComponentsController', function($scope){
	$scope.message = 'ComponentsController fully loaded';
	console.log($scope.message);
});