(function(){
	'use strict';
	
	angular
		.module("coreModule")
		.config(config);

	config.$inject = ["$stateProvider", "$urlRouterProvider"];
	function config($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/home");
		
		$stateProvider
			.state("main", {
				abstract:true,
				views:{
					"navbar": {
						templateUrl:"app/core/navbar.html"
					}
				}
					
			})
			.state("main.home", {
				url: "/home",
				views:{
					"content@": {
						templateUrl:"app/core/homepage.html"
					}
				}
			})

	}	

})();