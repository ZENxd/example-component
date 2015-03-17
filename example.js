(function() {
	'use strict';
	angular.module('myModule', [])
	.controller('myController', ['$scope', '$compile', function($scope, $compile) {
		
		//Controller vars & methods needed for demo
		$scope.hello = 'Hello World!';


	}])
	.directive('hello', function(){
		return {
			restrict: 'E',
			scope: {
					data:'@'
			},
			template:	'<div><h3 class="demo-h3">{{data}}</h3></div>'
		};
	});
})();