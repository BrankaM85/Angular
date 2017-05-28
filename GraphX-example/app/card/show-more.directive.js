(function(){
	'use strict';

	angular
		.module("cardModule")
		.directive("showMore", showMore);

	function showMore(){
		var showMoreO = {
			template:"{{description}} <a ng-show='!full' ng-click='ispisi()'><span ng-show='short'>(Show More)</span><span ng-show='!short'>(Show Less)</span></a>",
			restrict: "A",
			link: function(scope, element, atributte){
				var fullDesc = atributte.showMore;
				if(fullDesc.length > 130){
					var shortDecs = fullDesc.substring(0, 130) + "...";
					scope.short = true;
					scope.ispisi = function(){
						scope.description = scope.short ? fullDesc : shortDecs;
						scope.short = !scope.short;
					}
					scope.description = shortDecs;
				} else {
					scope.full = true;
					scope.description = fullDesc;
				}	
			},
			scope:{}

		}
		return showMoreO;
	}	

})();