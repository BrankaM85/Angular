(function(){
	'use strict';
	
	angular
		.module("cardModule")
		.config(config);

	config.$inject = ["$stateProvider"];
	function config($stateProvider){

		$stateProvider
			.state("main.cards", {
				url: "/cards",
				views:{
					"content@":{
						templateUrl:"app/card/cards-list.html",
						controller: "CardListController",
						controllerAs: 'clc',
						resolve:{
							cardsList:getCards,
							
						}
					}
				}
			})
			.state("main.cards.comments", {
				url: "/:id/comments",
				views:{
					"comments":{
						templateUrl:"app/card/comments.html",
						controller: "CommentsController",
						resolve:{
							comments: getComm,
							cards:getCard
						}
					}
				}
			});


		getCards.$inject = ["CardsService"];
		function getCards(CardsService){
			return CardsService.get({"pageSize":5});
			
		};	

		getComm.$inject = ["CardsService", "$stateParams"];
		function getComm(CardsService, $stateParams){
			return CardsService.getComments($stateParams.id);
			
		}	

		getCard.$inject = ["CardsService", "$stateParams"];
		function getCard(CardsService, $stateParams){
			return CardsService.getOne($stateParams.id);
			
		};	





	}	

})();