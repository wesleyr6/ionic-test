angular.module('starter.controllers', [])

.controller('GamesCtrl', function($scope, $ionicSlideBoxDelegate, Games) {
	$scope.title = 'Games';
	$scope.items = Games.all();

	$scope.nextSlide = function() {
		$ionicSlideBoxDelegate.next();
	}
})

.controller('CollectiblesCtrl', function($scope, $ionicSlideBoxDelegate, Collectibles) {
	$scope.title = 'Colecionáveis';
	$scope.items = Collectibles.all();

	$scope.nextSlide = function() {
		$ionicSlideBoxDelegate.next();
	}
})

.controller('ChatsCtrl', function($scope, Chats) {
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	};
})

.controller('AccountCtrl', function($scope, Account) {
	$scope.accountItems = Account.all();
	$scope.remove = function(accountItems) {
		Account.remove(accountItems);
	};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
});