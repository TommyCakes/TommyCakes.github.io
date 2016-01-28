angular.module('App', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url:"/",
        templateUrl: 'app/states/home.html'
      })
      .state('music', {
        url:"/music",
        templateUrl: 'app/states/music.html'
      })
      .state('film', {
        url:"/film",
        templateUrl: 'app/states/film.html'
      })
  });
