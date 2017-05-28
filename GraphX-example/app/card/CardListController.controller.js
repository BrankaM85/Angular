(function(){
	'use strict';
	
	angular
		.module("cardModule")
		.controller("CardListController", CardListController);

	CardListController.$inject = ["CardsService", "cardsList", "$scope", "$stateParams"];
	function CardListController(CardsService, cardsList, $scope, $stateParams){
		
		$scope.cards = cardsList.results;
		$scope.c = cardsList;

		$scope.pagination = {  
		page: 1,
		pageSize: 5,
		numberOfPages: Math.ceil(cardsList.count / 5), 
		promeniStranicu: function(page) {      
			$scope.pagination.page = page;
			getAll();
		}
	};	


	$scope.$watch('pagination.pageSize', function() {
	        getAll(); 
    });


    $scope.grade = function(gradeVal, card){
    	card.grade = parseInt(card.grade, 10) + gradeVal;
    	CardsService.updateCard(card);
    };

	function getAll() {
		CardsService.get({
			"page": $scope.pagination.page,   
			"pageSize": $scope.pagination.pageSize
		}).then(function(data) {
			$scope.cards = data.results;
			$scope.pagination.numberOfPages = Math.ceil(data.count / $scope.pagination.pageSize);

		});
	}




	}	

})();