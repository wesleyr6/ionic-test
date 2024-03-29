// Ionic Starter App
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
  	})

    .state('tab', {
		url: '/tab',
		templateUrl: 'templates/tabs.html'
	})

	.state('tab.games', {
		url: '/games',
		views: {
			'tab-products': {
				templateUrl: 'templates/tab-products.html',
				controller: 'ProductsCtrl'
			}
		}
	})

	.state('tab.collectibles', {
		url: '/collectibles',
		views: {
			'tab-products': {
				templateUrl: 'templates/tab-products.html',
				controller: 'ProductsCtrl'
			}
		}
	})

	.state('tab.match', {
		url: '/match',
		views: {
			'tab-products': {
				templateUrl: 'templates/tab-match.html',
				controller: 'MatchCtrl'
			}
		}
	})

	.state('tab.chats', {
		url: '/chats',
		views: {
			'tab-chats': {
				templateUrl: 'templates/tab-chats.html',
				controller: 'ChatsCtrl'
			}
		}
    })

    .state('tab.chat-detail', {
		url: '/chats/:chatId',
		views: {
			'tab-chats': {
				templateUrl: 'templates/chat-detail.html',
				controller: 'ChatDetailCtrl'
			}
		}
    })

	.state('tab.account', {
		url: '/account',
		views: {
			'tab-account': {
				templateUrl: 'templates/tab-account.html',
				controller: 'AccountCtrl'
			}
		}
  	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/login');
});
