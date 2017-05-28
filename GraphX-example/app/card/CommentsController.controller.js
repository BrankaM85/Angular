(function(){
	'use strict';
	
	angular
		.module("cardModule")
		.controller("CommentsController", CommentsController);

	CommentsController.$inject = ["CardsService", "cards", "$scope", "comments", "$stateParams"];
	function CommentsController(CardsService, cards, $scope, comments, $stateParams){

    $scope.comments = comments.results;
	$scope.cards = cards;
	


 	$scope.newComment = function() {
			$scope.comment.date = new Date();
			CardsService.saveComment($scope.comment, $stateParams.id).then(function(data){
			$scope.comments.push(data);
			});
		}

	}	

})();