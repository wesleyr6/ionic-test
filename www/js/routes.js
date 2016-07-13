angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabs.troqueJ', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/troqueJ.html',
        controller: 'troqueJCtrl'
      }
    }
  })

  .state('tabs.troqueJ2', {
    url: '/home2',
    views: {
      'tab1': {
        templateUrl: 'templates/troqueJ2.html',
        controller: 'troqueJ2Ctrl'
      }
    }
  })

  .state('tabs.myMessages', {
    url: '/messages',
    views: {
      'tab2': {
        templateUrl: 'templates/myMessages.html',
        controller: 'myMessagesCtrl'
      }
    }
  })

  .state('tabs.profile', {
    url: '/profile',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/page1',
    templateUrl: 'templates/tabs.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabs.chat', {
    url: '/message-chat',
    views: {
      'tab2': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('tabs.math', {
    url: '/math',
    views: {
      'tab1': {
        templateUrl: 'templates/math.html',
        controller: 'mathCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});