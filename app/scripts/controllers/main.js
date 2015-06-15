'use strict';

/**
 * @ngdoc function
 * @name explorerUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the explorerUiApp
 */
angular.module('explorerUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
