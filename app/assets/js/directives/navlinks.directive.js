angular.module('patternApp')
.directive('navlinks', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/partials/navlinks.html',
		controller: function($scope){
			$scope.anchors = [
				{
					name: 'Home',
					path: '/home'
				},
				{
					name: 'Pools',
					path: '#slides'
				},
				{
					name: 'Learn',
					path: '#resources'
				},
				{
					name: 'Reviews',
					path: '#reviews'
				},
				{
					name: 'Quote',
					path: '#cta'
				}
			];
		},
		controllerAs: 'nav'
	};
});