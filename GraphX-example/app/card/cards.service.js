(function(){
	'use strict';
	
	angular
		.module("cardModule")
		.factory("CardsService",CardsService);

	CardsService.$inject = ["$http"];
	function CardsService($http){
		//funkcije koje cu koristiti dalje
		var url = "http://localhost:3000/api/cards"
		return{
			get:get,
			updateCard:updateCard,
			getComments:getComments,
			saveComment:saveComment,
			getOne:getOne
		};


		function get(params){
			return $http.get(url, {"params": params}).then(function(response){
				return response.data;
			})
		}

		function getOne(id){
			return $http.get(url +"/"+id).then(function(response){
				return response.data;
			})
		}


		function updateCard(card) {
			return $http.put(url + "/" + card._id, card).then(function(response) {
				return response.data;
			});
		}

		function getComments(id) {
			return $http.get(url + "/" + id + "/comments").then(function(response) {
				return response.data;
			});
		}

		function saveComment(comment, id) {
			return $http.post(url + "/" + id + "/comments", comment).then(function(response) {
				return response.data;
			});
		}




	}	

})();