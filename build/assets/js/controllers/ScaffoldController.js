angular.module('patternApp')
.controller('ScaffoldController', function($scope){
	$scope.title = 'Sun Ray Pools';
	$scope.services = [
		'Pools',
		'Spas',
		'Firepits',
		'Patio'
	];

});