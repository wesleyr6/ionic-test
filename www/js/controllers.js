angular.module('starter.controllers', [])

.controller('ProductsCtrl', function($scope, $ionicSlideBoxDelegate, $location, Products) {
	var getCategoryProduct = $location.path().split('/').pop();
	
	$scope.title = 'Colecionáveis';

	if( getCategoryProduct == 'games' ){
		$scope.title = 'Games';
	}
	
	$scope.items = Products.all($scope.title);

	$scope.nextSlide = function() {
		$ionicSlideBoxDelegate.next();
	};
})

.controller('MatchCtrl', function($scope, Match) {
	$scope.title = 'Combinação';
	$scope.items = Match.all();
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
})

.controller('LoginCtrl', function($scope) {
	$scope.title = "TroqueJá"
});