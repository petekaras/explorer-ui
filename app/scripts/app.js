'use strict';

/**
 * @ngdoc overview
 * @name explorerUiApp
 * @description
 * # explorerUiApp
 *
 * Main module of the application.
 */
angular
  .module('explorerUiApp', [
    'ngRoute',
    'ui.bootstrap', 
    'ngTable', 
    'darthwade.dwLoading'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index-tree.html',
        controller: 'appController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
