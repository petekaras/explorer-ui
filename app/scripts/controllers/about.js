'use strict';

/**
 * @ngdoc function
 * @name explorerUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the explorerUiApp
 */
angular.module('explorerUiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
