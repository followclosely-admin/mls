angular.module('patternApp')
.directive('slides', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/partials/slides.html',
		controller: function ($scope){
			$scope.slides = [
				{
					imgSrc: 'img-1.jpg',
					imgAttr: 400000	
				},
				{
					imgSrc: 'img-2.jpg',
					imgAttr: 300000
				},
				{
					imgSrc: 'img-3.jpg',
					imgAttr: 200000
				}
			];
		},
		controllerAs: 'slide'
	};
});


